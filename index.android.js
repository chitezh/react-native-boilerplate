import { AppRegistry, StatusBar } from 'react-native';
import setup from './src/setup';
import colors from './src/components/global/colors';

StatusBar.setBackgroundColor(colors.primary);

AppRegistry.registerComponent('ReactNativeBoilerplate', setup);
