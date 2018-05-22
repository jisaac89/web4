import * as React from 'react';

import { Toolbar, Button, Layer, Emerge, Open, SlideIn, Transform } from '../../../recoil/src/index';

import { observer, inject } from 'mobx-react';

import { IHeaderProps } from '../../interfaces/components/navigation/IHeaderProps';


@inject('appStore')
@observer
export default class Header extends React.Component<any, any> {

    toggleNightMode() {
        this.props.appStore.nightmode = !this.props.appStore.nightmode;
    }
    render() {

        let { appStore } = this.props;

        return (
            <SlideIn className="z5" from="top" if={!appStore.mobile && this.props.appStore.index === 0}>
                <Toolbar block className="p10">
                    <Button onClick={this.toggleNightMode.bind(this)} simple right icon="moon-o"></Button>
                </Toolbar>
            </SlideIn>
        )
    }
}