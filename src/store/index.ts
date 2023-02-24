import { App } from 'vue';
import { createPinia } from 'pinia';
export { useCounter } from './modules/count';
export { useSystem } from './modules/system';
export { useTabbar } from './modules/tabbar';
// export * from './modules';

export const store = createPinia();
// export default store;
export function setupStore(app: App) {
  app.use(store);
}
