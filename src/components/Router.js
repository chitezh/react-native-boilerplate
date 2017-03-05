import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';

import Example from './scenes/example/Example';

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="example" component={Example} title="Example" type={ActionConst.REPLACE} />
  </Scene>,
);

export default () => <Router scenes={Scenes} />;
