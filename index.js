/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

const ProvidedApp = () => <App />;

AppRegistry.registerComponent(appName, () => ProvidedApp);
