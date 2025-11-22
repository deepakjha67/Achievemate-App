import { registerRootComponent } from 'expo';

// This explicitly imports your App.js file
import App from './App';

// This registers the app so the Android system can find it
registerRootComponent(App);