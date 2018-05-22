import 'core-js';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'mobx-react';
import Entry from './components/Entry';

import {
    appStore,
    routerStore,
    contactStore
} from './stores/_GlobalStore'

const stores = {
    appStore,
    routerStore,
    contactStore
};

// for debug purposes
window['stores'] = stores;

// promiseFinally.shim();

ReactDOM.render(
    <Provider {...stores}>
        <Entry />
    </Provider>,
    document.getElementById("root")
);