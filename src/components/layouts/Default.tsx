import * as React from 'react';
import Header from '../navigation/Header';
import { Layer, Toolbar, Button, SlideIn } from '../../../recoil/src/index';
import { observer, inject } from 'mobx-react';
import { IHeaderProps } from '../../interfaces/components/navigation/IHeaderProps';

@inject('appStore')
@observer
class Default extends React.Component<any, any>{
    public render() {
        let { appStore, centerContent } = this.props;

        return (
            <Layer fill flex>
                <SlideIn fill from="bottom" className='z9' if={this.props.appStore.menu}>
                    <Layer fill theme="light" flexCenter >
                        Menu
                    </Layer>
                </SlideIn>
                <Header />
                <Layer fill flexCenter={centerContent}>
                    {this.props.children}
                </Layer>
            </Layer>
        );
    }
}

export default Default;