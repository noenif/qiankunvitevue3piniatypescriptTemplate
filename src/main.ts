import Vue,{ createApp } from 'vue'
import App from './App.vue'
import './scss/index.scss'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

import router, { setupRouter } from './router'
import { setupStore } from './store'

let   instance :Vue.App<Element>
const render  =  async (props: { container?: HTMLElement } = {}) => {
  const  {container} =  props;
  instance = createApp(App)
  setupStore(instance)
  setupRouter(instance)

  await router.isReady()
  instance.mount('#app')
}

renderWithQiankun({
  mount(props) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount() {
    instance.unmount();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

