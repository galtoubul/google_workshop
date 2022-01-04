/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import tabGetURL from "../chrome_api/tabGetURL";
import tabGetDocument from "../chrome_api/tabGetDocument";
import tabGetSearchParams from "../chrome_api/tabGetSearchParams";
import getDocOfURL from "../chrome_api/getDocOfURL";
import getCurrentTabID from "../chrome_api/getCurrentTabID";

const amazonExtractor = async () => {
  var url = await tabGetURL();
  var id = await getCurrentTabID();
  var doc = await tabGetDocument(id);
  var searchParams = await tabGetSearchParams();

  var card = {};
  var url_params = JSON.parse(
    `{"${decodeURI(url.split("?")[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  );
  var data = doc.getElementsByClassName("a-row cardContainer");

  //Extracting the 'order_serial_code', Format: 'ZZ000000009Z7':
  var regex = /[A-Z]{2}[0-9]{9}[A-Z,0-9]{2}/;
  var text = data[0].outerText;
  card.order_serial_code = text.substr(text.search(regex), 13);

  //Extracting the 'estimated_arrival_date', Format: 'December 6, 2021':
  text = doc.getElementsByClassName("pt-promise-main-slot")[0].outerText;
  regex =
    /(January|February|March|April|May|June|July|August|September|October|November|December) [1-9]{1,2}/;
  card.estimated_arrival_date = text.substring(text.search(regex), text.length);
  if (card.estimated_arrival_date.split(",").length === 1) {
    var d = new Date();
    card.estimated_arrival_date += `, ${d.getFullYear()}`;
  }

  card.estimated_arrival_date = new Date(
    new Date(card.estimated_arrival_date).toLocaleDateString("en-US")
  );

  //Fill 'order_name', 'company', 'order_url'
  card.company = "Amazon";
  card.order_name = `${card.company}: ${url_params.orderId}`;
  card.url = `www.amazon.com/progress-tracker/package${searchParams}`;

  /*VERY PROBLEMATIC AREA! */
  //Extracting the 'currency', 'order_price', 'order_date' fields
  //Therefore I need to open a new tab and close it
  var newURL = `https://www.amazon.com/gp/css/summary/print.html/?ie=UTF8&orderID=${url_params.orderId}`;
  var furtherDoc = await getDocOfURL(newURL);
  data = furtherDoc.getElementsByTagName("td");
  card.order_date = data[1].outerText.split(":")[1].trim();
  card.order_date = new Date(
    new Date(card.order_date).toLocaleDateString("en-US")
  );
  //Before continuing-verify the correctness of the Estimated Arrival Date (compared to the Order Date)
  if (card.estimated_arrival_date < card.order_date)
    card.estimated_arrival_date.setFullYear(
      card.estimated_arrival_date.getFullYear() + 1
    );
  //Rest
  text = data[3].innerText.split(":")[1].trim();
  regex = /\d+\.?\d*/;
  card.order_price = text.substring(text.search(regex), text.length);
  // eslint-disable-next-line prefer-destructuring
  card.currency = text[0];
  console.log(card);
  return card;
};

export default amazonExtractor;
