import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Comprueba si el navegador soporta service workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Registra el service worker después de que la página se haya cargado completamente
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // El registro fue exitoso
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // El registro falló :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
