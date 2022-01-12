import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXNsYXRvciIsImEiOiJja3k4eGNsN3MwMHg3Mm9wY3VnbHQzY3MyIn0.Nik9wQYFSgawMsdJEfZ4Kw';

if(!navigator.geolocation) {
  alert('Browser doesn\'t has enabled geolocation');
  throw new Error('Browser doesn\'t has enabled geolocation');
}

createApp(App)
.use(store)
.use(router)
.mount('#app')
