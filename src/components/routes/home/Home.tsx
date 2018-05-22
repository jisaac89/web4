import * as React from 'react';
import Default from '../../layouts/Default';
import { Toolbar, Button } from '../../../../recoil/src/index';
import { observer, inject } from 'mobx-react';
import { appStore } from '../../../stores/AppStore';

@inject('appStore')
@observer
export default class Home extends React.Component<any, any> {

    render() {
        return (
            <Default centerContent>
                <Toolbar className="w500px center-width">
                    <Button block theme="primary">Home</Button>
                </Toolbar>
            </Default>
        );
    }
}