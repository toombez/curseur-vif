import { createApp } from 'vue'
import App from './App.vue'
import curseurPlugin from './plugins/curseur'


createApp(App)
    .use(curseurPlugin, {})
    .mount('#app')
