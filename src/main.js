'use strict';

import {CoreModule} from "@jamilservices/sb-core-module";
import "@styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
    if(CoreModule && CoreModule.version.split(".")[0] >= 1) {
        const SimplyBuilderContainerStruct = {
            "element": "section",
            "attr": {
                "class": "view-container"
            },
            "dataset": {
                "state": "simply-builder.main"
            },
            "children": [
                {

                    "element": "h2",
                    "text": "Come soon"
                }
            ]
        };
        CoreModule.createFromStruct({
            struct: SimplyBuilderContainerStruct
        });
    }
});
