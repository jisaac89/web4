import * as React from 'react';

import { Recoil, Layer, Notifications, SlideIn } from '../../recoil/src/index';
import { observer, inject } from 'mobx-react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './navigation/Header';
import LoadingPane from './navigation/LoadingPane';
import Home from './routes/home/Home';
import { routerStore } from '../stores/RouterStore';
import { syncHistoryWithStore } from '../sync';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

import { IEntryProps } from '../interfaces/components/routes/IEntryProps';

@inject('appStore')
@observer
export default class Entry extends React.Component<IEntryProps, any> {

    onDevice(device) {
        this.props.appStore.onDevice(device);
    }

    render() {

        let { appStore } = this.props;

        let styles = {
            overflow: true,
            fill: true
        }

        return (
            <Router history={history}>
                <Recoil onDevice={this.onDevice.bind(this)} nightmode={appStore.nightmode} {...styles}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Recoil>
            </Router>
        )
    }
}