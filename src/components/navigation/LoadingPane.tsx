import * as React from 'react';

import { Recoil, Table, Button, Toolbar, Input, Emerge, Layer, SlideIn, Loading, Open, Checkbox } from '../../../recoil/src/index';

import { observer, inject } from 'mobx-react';

import { ILoadingPaneProps } from '../../interfaces/components/navigation/ILoadingPaneProps';

@inject('appStore')
@observer
export default class LoadingPane extends React.Component<ILoadingPaneProps, any> {
    render() {

        let { appStore } = this.props;

        return (
            <SlideIn className="z5" if={appStore.loading} from="bottom" fill>
                <Layer fill flexCenter theme="dark">
                    <Loading theme="primary" icon="lock" tabIndex={0} size="xlarge" if={appStore.loading} />
                </Layer>
            </SlideIn>
        )
    }
} 