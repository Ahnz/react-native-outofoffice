import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from './styles';
import OverView from './src/screens/OverView';
import ConnectionView from './src/screens/ConnectionView';
import AppNavigator from './src/navigations/Navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return <AppNavigator />;
}
