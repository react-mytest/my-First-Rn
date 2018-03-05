import React, { Component } from 'react';
import {
    StackNavigator,
  } from 'react-navigation';

import { AppRegistry
} from 'react-native';


import home from './components/home/index.js'


AppRegistry.registerComponent('tta', () => home);