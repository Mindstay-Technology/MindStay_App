import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
