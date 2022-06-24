import { createApp } from 'vue'
import ant from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ant).mount('#app')
