import { observable, computed, action, reaction } from 'mobx';

import { IAppStore } from '../interfaces/stores/IAppStore';

var regexp = new RegExp('#([^\\s]*)', 'g');
export class AppStore implements IAppStore {

    @observable appName = 'FourMindes';
    @observable nightmode = false;
    @observable mobile = false;
    @observable menu = false;
    @observable loading = true;
    @observable contact = false;
    @observable index = 0;
    @observable device = '';

    //

    initializeApp() {
        this.loading = false;
    }

    toggleNightmode() {
        this.nightmode = !this.nightmode;
    }

    toggleMenu() {
        this.menu = !this.menu;
    }

    onDevice(device) {
        if (device === 'mobile') {
            this.mobile = true;
        }
        this.device = device;
    }

    constructor() {
        setTimeout(() => {
            this.loading = false;
        }, 3000)
    }

    gotoHomeSlideIndex(n) {
        this.index = n;
    }

}

export const appStore = new AppStore();