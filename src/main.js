import { createApp } from 'vue';

import PrimeVue from 'primevue/config';

import './style.css';

import 'primevue/resources/themes/aura-light-amber/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from './App.vue';
import NavBar from './components/NavBar.vue';

import Image from 'primevue/image';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';

const app = createApp(App);

app.use(PrimeVue);

app.component('Image', Image);
app.component('Button', Button);
app.component('Sidebar', Sidebar);

app.component('NavBar', NavBar);

app.mount('#app');
