"use strict";

import { CoreModule } from '@jamilservices/sb-core-module';
import { NotifyModule } from '@jamilservices/sb-module-notify';

import { canvasStruct } from "@components/struct/canvas.js";
import {gmailStruct} from "@components/struct/gmail.js";
import {linkedinStruct} from "@components/struct/linkedin.js";
import {homeStruct} from "@components/struct/home.js";

const menuActionEvent = NotifyModule.instance("menu-events");

const store = {
    page: undefined,
    render: 'main',
    router: {
        "linkedin-example": (parent) => {
            linkedinStruct().then(struct => {
                CoreModule.createFromStruct({
                    parent, struct
                });
            })
        },
        "gmail-example": (parent) => {
            gmailStruct().then(struct => {
                CoreModule.createFromStruct({
                    parent, struct
                });
            });
        }
    }
};

const mountSection = (parent) => {
    if(store.page && typeof store.router[store.page] === "function") {
        store.router[store.page](parent);
    } else {
        homeStruct().then(struct => {
            CoreModule.createFromStruct({
                parent, struct
            });
        });
    }
}

const mainStruct = () => {
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: canvasStruct
    });
};
const sectionStruct = () => {
    const parent = CoreModule.getElementFromStore("canvas.main");
    const exampleMain = CoreModule.getElementFromStore("simply-builder-example.main");
    if(exampleMain) CoreModule.removeElement(exampleMain);
    mountSection(parent);
};
const menuNavigate = (e) => {
    if(e?.target?.dataset?.link) {
        const {link} = e.target.dataset;
        menuActionEvent.emit({
            link
        })
    }
}
const renderPage = () => {
    if(store.render === 'main') {
        store.render = "section";
        mainStruct();
    }
    sectionStruct();
};
const routerEvents = (data = {}) => {
    try {
        const {event, target} = data;
        if (event === "router-update" && target) {
            store.page = target;
        }
        renderPage();
    } catch (e) {
        console.error(e);
    }
}

CoreModule.eventRegister("menu-action", menuNavigate);
export const startBootstrap = Object.freeze(routerEvents);