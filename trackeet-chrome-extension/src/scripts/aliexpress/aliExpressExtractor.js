/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import tabGetDocument from "../chrome_api/tabGetDocument";
import aliExpressRecieptGetDocument from "./aliExpressRecieptGetDocument";
import getCurrentTabID from "../chrome_api/getCurrentTabID";

const aliExpressExtractor = async () => {
  const card = {};
  const tabID = await getCurrentTabID();
  const mainDoc = await tabGetDocument(tabID);
  //*************estimated_arrival_date*************
  console.log("estimated_arrival_date");
  try {
    card.estimated_arrival_date = mainDoc
      .getElementsByClassName("title")[0]
      .textContent.split(":")[1]
      .trim();
    let d = new Date();
    card.estimated_arrival_date += `, ${d.getFullYear()}`;
    card.estimated_arrival_date = new Date(
      new Date(card.estimated_arrival_date).toLocaleDateString("en-US")
    );
  } catch (error) {
    /*Do nothing*/
  }

  //*************order_serial_code*************
  console.log("order_serial_code");
  try {
    card.order_serial_code =
      mainDoc.getElementsByClassName("tracking-no")[0].textContent;
  } catch (error) {
    /*Do nothing*/
  }

  //*************order_name,order_url,company,*************
  console.log("order_name,order_url,company");
  const order_number = mainDoc.getElementsByClassName("value")[0].textContent;
  card.order_name = `AliExpress: ${order_number}`;
  card.url = `https://track.aliexpress.com/logisticsdetail.htm?tradeId=${order_number}`;
  card.company = "AliExpress";

  //*************order_date,order_price,currency*************
  console.log("order_date,order_price,currency");
  try {
    const receiptURL = `https://trade.aliexpress.com/order_detail.htm?orderId=${order_number}`;
    const receiptDoc = await aliExpressRecieptGetDocument(receiptURL);
    // eslint-disable-next-line prefer-destructuring
    let priceArray = receiptDoc
      .getElementsByClassName("fund-bd")[1]
      .innerText.trim()
      .split("\t")[0]
      .trim()
      .split(" ");

    // eslint-disable-next-line prefer-destructuring
    card.currency = priceArray[priceArray.length - 2];
    // eslint-disable-next-line prefer-destructuring
    card.order_price = priceArray[priceArray.length - 1];
    let dataArray = receiptDoc
      .getElementsByClassName("fund-bd")[1]
      .innerText.trim()
      .split("\t");
    card.order_date = new Date(dataArray[dataArray.length - 1]);
  } catch (error) {
    /*do nothing*/
  }

  return card;
};

export default aliExpressExtractor;
