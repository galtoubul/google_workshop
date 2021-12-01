import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import MockAdapter from "axios-mock-adpter";

describe("api", () => {
  window.axiosMock = new MockAdapter(axios);
});
