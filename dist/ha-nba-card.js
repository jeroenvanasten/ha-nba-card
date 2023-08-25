import { VERSION } from "./const.js";
import { MyCustomCardEditor } from "./card_editor.js";
import { NBACard } from "./nba_card.js";


customElements.define("nba-card", NBACard);
customElements.define("my-custom-card-editor", MyCustomCardEditor);

console.info("%c NBA-CARD %s IS INSTALLED",
    "color: blue; font-weight: bold",
    VERSION);

//
//  Add card to list of Custom Cards in the Card Picker
//
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "nba-card",
    name: "NBA Card",
    preview: false,
    description: "Card to display NBA games from the ha-teamtracker sensor",
});