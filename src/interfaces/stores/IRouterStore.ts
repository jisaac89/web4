export interface IRouterStore {
    goBack(): void;
    push(history): void;
    initialLocation?: string;
}