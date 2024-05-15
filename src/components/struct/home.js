'use strict';

const internalStore = {};

const getJSON = async () => {
    const requestJson = await fetch("./assets/home/struct.json", {
        method: "GET",
        headers: {
            Accept: "text/plain",
            "Cache-Control": "no-cache",
        },
    });
    if(requestJson?.ok) {
        const text = await requestJson.text();
        if(text) {
            internalStore['struct'] = JSON.parse(text);
        }
    }
};
const getCSS = async () => {
    const requestJson = await fetch("./assets/home/styles.css", {
        method: "GET",
        headers: {
            Accept: "text/plain",
            "Cache-Control": "no-cache",
        },
    });
    if(requestJson?.ok) {
        const text = await requestJson.text();
        if(text) {
            internalStore['styles'] = text.toString().trim().replace(/\n|\r/g, "");
        }
    }
};
const getStruct = async () => {
    if(typeof internalStore.struct === "undefined") await getJSON();
    if(typeof internalStore.styles === "undefined") await getCSS();
    const {styles, struct} = internalStore;

    if(styles && struct) return {
        element: "section",
        attr: {
            class: "home-container"
        },
        dataset: {
            state: "simply-builder-example.main",
        },
        shadow: {
            mode: "closed",
            styles
        },
        children: [struct]
    };
};

export const homeStruct = Object.freeze(getStruct);