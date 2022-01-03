import axios from "axios";

const MockAdapter = require("axios-mock-adapter");

export const initMock = () => {
  window.axiosMock = new MockAdapter(axios);
  // eslint-disable-next-line no-undef
  axiosMock.onPost("https://trackeet.co/api/getCards").reply((request) => {
    switch (request.params.timeline_position) {
      case "Wishlist":
        return [
          200,
          {
            cards: [
              {
                order_name: "New shoes",
                order_url:
                  "https://shoesonline.co.il/product/unisex-converse-all-s",
                currency: "ILS",
                company: "Amazon",
                order_date: "11/10/2020",
                estimated_arrival_date: "11/11/2020",
                order_serial_code: "3444234",
                notes: "",
                card_id: "1",
                timeline_position: "Wishlist",
                currency_amount: 120,
              },
            ],
          },
        ];
      case "OnTheWay":
        return [
          200,
          {
            cards: [
              {
                order_name: "New shoes",
                order_url:
                  "https://shoesonline.co.il/product/unisex-converse-all-s",
                currency: "ILS",
                company: "Amazon",
                order_date: "11/10/2020",
                estimated_arrival_date: "11/11/2020",
                order_serial_code: "3444234",
                notes: "",
                card_id: "1",
                timeline_position: "Paid",
                currency_amount: 120,
              },
              {
                order_name: "New shoes",
                order_url:
                  "https://shoesonline.co.il/product/unisex-converse-all-s",
                currency: "ILS",
                company: "Amazon",
                order_date: "11/10/2020",
                estimated_arrival_date: "11/11/2020",
                order_serial_code: "3444234",
                notes: "",
                card_id: "13424",
                timeline_position: "Pick Up",
                currency_amount: 120,
              },
              {
                order_name: "New shoes",
                order_url:
                  "https://shoesonline.co.il/product/unisex-converse-all-s",
                currency: "ILS",
                company: "Amazon",
                order_date: "11/10/2020",
                estimated_arrival_date: "11/11/2020",
                order_serial_code: "3444234",
                notes: "",
                card_id: "13332",
                timeline_position: "Transit",
                currency_amount: 120,
              },
            ],
          },
        ];
      default:
        return [
          200,
          {
            cards: [
              {
                order_name: "New shirt",
                order_url: "",
                currency: "ILS",
                company: "Asos",
                order_date: "12/10/2020",
                estimated_arrival_date: "01/01/2022",
                order_serial_code: "13123",
                notes: "",
                card_id: "3",
                timeline_position: "Arrived",
                currencyAmount: 120,
              },
              {
                order_name: "Refrigerator",
                url: "",
                currency: "ILS",
                company: "AliExpress",
                order_date: "12/10/2020",
                estimated_arrival_date: "03/12/2020",
                order_serial_code: "",
                notes: "",
                card_id: "4",
                timeline_position: "Arrived",
                currency_amount: 120,
              },
            ],
          },
        ];
    }
  });
  // eslint-disable-next-line no-undef
  axiosMock.onPost("http://trackeet.co/apiaddCard").reply((e) => {
    return [200, {}];
  });
  // eslint-disable-next-line no-undef
  axiosMock.onPost("http://trackeet.co/api/deleteCard").reply((e) => {
    return [200, {}];
  });
  // eslint-disable-next-line no-undef
  axiosMock.onPost("http://trackeet.co/api/updateCard").reply((e) => {
    return [200, {}];
  });
};
