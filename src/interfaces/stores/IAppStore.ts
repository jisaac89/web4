export interface IAppStore {
    nightmode: boolean;
    mobile: boolean;
    menu: boolean;
    loading: boolean;
    initializeApp(): void;
    onDevice(device: string): void;
}