import { createApp } from 'vue'
import App from './App.vue'
import RollbarPlugin from './rollbar'; // Path to your rollbar.js file
import RollbarTest from './components/RollbarTest.vue'; // Path to your RollbarTest.vue file

const app = createApp(App);

// Registering the Rollbar Error handler
app.use(RollbarPlugin);

// Registering the Rollbar tester component
app.component('RollbarTest', RollbarTest); 

createApp(App).mount('#app')
