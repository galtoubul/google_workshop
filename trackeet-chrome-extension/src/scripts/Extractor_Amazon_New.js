/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

const Extractor_Amazon_New = (cur_win, temp_win) => {
  //Checking that we are at the correct URL form:
  var url = cur_win.location.href;
  if (url.split("?")[0].search(cur_win.location.pathname) === -1) {
    //not matching for amazon!
    console.error("No valid Amazon path!");
    return { error: "chingar" };
  }

  //If we are here so we are in a relevant window
  const card = {};
  const url_params = JSON.parse(
    `{"${decodeURI(url.split("?")[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  );
  var data = cur_win.document.getElementsByClassName("a-row cardContainer");

  //Extracting the 'order_serial_code', Format: 'ZZ000000009Z7':
  var regex = /[A-Z]{2}[0-9]{9}[A-Z,0-9]{2}/;
  var text = data[0].outerText;
  card.order_serial_code = text.substr(text.search(regex), 13);

  //Extracting the 'estimated_arrival_date', Format: 'December 6, 2021':
  text = cur_win.document.getElementsByClassName("pt-promise-main-slot")[0]
    .outerText;
  regex =
    /(January|February|March|April|May|June|July|August|September|October|November|December) [1-9]{1,2}/;
  card.estimated_arrival_date = text.substring(text.search(regex), text.length);
  if (card.estimated_arrival_date.split(",").length === 1) {
    const d = new Date();
    card.estimated_arrival_date += `, ${d.getFullYear()}`;
  }

  card.estimated_arrival_date = new Date(
    card.estimated_arrival_date
  ).toLocaleDateString("en-GB");

  //Fill 'order_name', 'company', 'order_url'
  card.company = "Amazon";
  card.order_name = `${card.company}: ${url_params.orderId}`;
  card.url = `www.amazon.com/progress-tracker/package${window.location.search}`;

  /*VERY PROBLEMATIC AREA! */
  //Extracting the 'currency', 'order_price', 'order_date' fields
  //Therefore I need to open a new tab and close it
  data = temp_win.document.getElementsByTagName("td");
  card.order_date = data[1].outerText.split(":")[1].trim();
  card.order_date = new Date(card.order_date).toLocaleDateString("en-GB");
  text = data[3].outerText.split(":")[1].trim();
  card.order_price = text.substring(1, text.length);
  // eslint-disable-next-line prefer-destructuring
  card.currency = text[0];
  return card;
};

export default Extractor_Amazon;
