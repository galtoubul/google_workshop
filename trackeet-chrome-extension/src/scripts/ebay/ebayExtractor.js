/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import getCurrentTabID from "../chrome_api/getCurrentTabID";
import tabGetDocument from "../chrome_api/tabGetDocument";
import tabGetURL from "../chrome_api/tabGetURL";

const ebayExtractor = async () => {
  const card = {};
  const tabID = await getCurrentTabID();
  const doc = await tabGetDocument(tabID);
  //*************order_url*************
  card.url = await tabGetURL();
  //*************estimated_arrival_date*************
  try {
    let text = doc.getElementsByClassName("shipment-card-sub-title")[0]
      .innerText;
    let regex = /[A-Za-z]+ [1-9]{1,2}[,] [0-9]{4}/;
    if (text.search(regex) !== -1) {
      card.estimated_arrival_date = text
        .substring(text.search(regex), text.length)
        .trim();
      if (card.estimated_arrival_date.split(",").length == 1)
        card.estimated_arrival_date += `, ${new Date().getFullYear()}`;
      card.estimated_arrival_date = new Date(
        new Date(card.estimated_arrival_date).toLocaleDateString("en-US")
      );
    } else card.estimated_arrival_date = null;
  } catch (e) {
    card.estimated_arrival_date = null;
  }

  //*************order_serial_code*************
  let arr;
  try {
    arr = doc
      .getElementsByClassName("tracking-box")[0]
      .getElementsByClassName("eui-text-span ");
    card.order_serial_code = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      console.log("Hi1");
      console.log(arr[i].innerText);
      if (arr[i].innerText === "Number" && i + 1 < arr.length) {
        card.order_serial_code = arr[i + 1].innerText;
        break;
      }
    }
  } catch (error) {
    card.order_serial_code = "";
  }

  //*************order_name,company,*************
  arr = doc
    .getElementsByClassName("section-module order-info")[0]
    .getElementsByClassName("eui-text-span");
  let order_number = "";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].innerText);
    if (arr[i].innerText === "Order number" && i + 1 < arr.length) {
      // eslint-disable-next-line prefer-destructuring
      order_number = arr[i + 1].innerText;
      break;
    }
  }

  card.order_name = `Ebay: ${order_number}`;
  card.company = "Ebay";
  //*************order_date*************
  card.order_date = null;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    console.log("Hi3");
    console.log(arr[i].innerText);
    if (arr[i].innerText === "Time placed" && i + 1 < arr.length) {
      // eslint-disable-next-line prefer-destructuring
      let dateString = arr[i + 1].innerText;
      let regex = /[A-Za-z]+ [1-9]{1,2}[,] [0-9]{4}/;
      if (regex.exec(dateString) !== null) {
        // eslint-disable-next-line prefer-destructuring
        card.order_date = new Date(
          new Date(regex.exec(dateString)[0]).toLocaleDateString()
        );
        break;
      }
    }
  }

  //*************order_price,currency*************
  card.order_price = "";
  card.currency = "";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    console.log("Hi4");
    console.log(arr[i].innerText);
    if (arr[i].innerText === "Total" && i + 1 < arr.length) {
      // eslint-disable-next-line prefer-destructuring
      let priceString = arr[i + 1].innerText;
      let regex = /\d+(\.\d+)?/;
      if (regex.exec(priceString) !== null) {
        // eslint-disable-next-line prefer-destructuring
        card.order_price = regex.exec(priceString)[0];
        card.currency = priceString.substring(0, priceString.search(regex));
        console.log("currency");
        console.log(card.currency);
        break;
      }
    }
  }

  console.log("Printing card");
  console.log(card);
  return card;
};

export default ebayExtractor;
