"use strict";

import "@app-styles/main.scss";

import {UtilsApp} from "@core-components/utils/main.js";
import {EventApp} from "@core-components/eventApp/main.js";
import {DomStore} from "@core-stores/domStore/main.js";
import {EventStore} from "@core-stores/eventStore/main.js";

const core = {UtilsApp, EventApp, DomStore, EventStore};
Object.freeze(core);

document.addEventListener("DOMContentLoaded",  () => {
    if(UtilsApp && EventApp && DomStore && EventStore) {
        console.log("DOMContentLoaded");
    }
});