"use strict";

import "@styles/main.scss";
import {startBootstrap} from "@components/bootstrap/main.js";
import { NotifyModule } from '@jamilservices/sb-module-notify';
import { RouterModule } from '@jamilservices/sb-module-router';

const router = RouterModule.instance({subpath: true});
const menuActionEvent = NotifyModule.instance("menu-events");


router.register({
    id: "home",
    title: "SimplyBuilder Struct Examples"
});
router.register({
    id: "gmail-example",
    title: "SimplyBuilder Struct Examples - Gmail"
});
router.register({
    id: "linkedin-example",
    title: "SimplyBuilder Struct Examples - Linkedin"
});
menuActionEvent.subscribe({
    id: "menu-item-navigate",
    fn: data => {
        const {link} = data;
        if(link) router.navigate(link);
    }
});
router.events.subscribe({
    id: "router-events",
    fn: data => startBootstrap(data)
});
/*
document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOMContentLoaded");
});*/