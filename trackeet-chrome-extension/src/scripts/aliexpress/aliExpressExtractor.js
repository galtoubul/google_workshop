/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import tabGetDocument from "../chrome_api/tabGetDocument";
import getCurrentTabID from "../chrome_api/getCurrentTabID";
import getDocOfURL from "../chrome_api/getDocOfURL";

const aliExpressExtractor = async () => {
  const card = {};
  const tabID = await getCurrentTabID();
  const mainDoc = await tabGetDocument(tabID);
  //*************estimated_arrival_date*************
  console.log("estimated_arrival_date");
  card.estimated_arrival_date = mainDoc
    .getElementsByClassName("title")[0]
    .textContent.split(":")[1]
    .trim();
  let d = new Date();
  card.estimated_arrival_date += `, ${d.getFullYear()}`;
  card.estimated_arrival_date = new Date(
    new Date(card.estimated_arrival_date).toLocaleDateString("en-US")
  );
  //*************order_serial_code*************
  console.log("order_serial_code");
  card.order_serial_code =
    mainDoc.getElementsByClassName("tracking-no")[0].textContent;
  //*************order_name,order_url,company,*************
  console.log("order_name,order_url,company");
  const order_number = mainDoc.getElementsByClassName("value")[0].textContent;
  card.order_name = `AliExpress: ${order_number}`;
  card.url = `https://track.aliexpress.com/logisticsdetail.htm?tradeId=${order_number}`;
  card.company = "AliExpress";

  //*************order_date,order_price,currency*************
  console.log("order_date,order_price,currency");
  const receiptURL = `https://trade.aliexpress.com/order_detail.htm?orderId=${order_number}`;
  const receiptDoc = await getDocOfURL(receiptURL);
  // eslint-disable-next-line prefer-destructuring
  let priceString = receiptDoc
    .getElementsByClassName("price")[2]
    .outerText.trim();
  // eslint-disable-next-line prefer-destructuring
  card.currency = priceString.split(" ")[0];
  // eslint-disable-next-line prefer-destructuring
  card.order_price = priceString.split(" ")[1];
  card.order_date = null;
  return card;
};

export default aliExpressExtractor;
