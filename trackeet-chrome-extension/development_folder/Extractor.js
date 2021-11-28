/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { Extractor_Amazon } from "./Extractor_Amazon";

var card = {};
const host = window.location.hostname;
switch (host) {
  case "www.amazon.com":
    card = Extractor_Amazon();
    break;
}
