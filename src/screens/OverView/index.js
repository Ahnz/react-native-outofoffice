import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  ActivityIndicator,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../styles';
import Header from './components/Header';
import Stats from './components/Stats';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});

export default class index extends PureComponent {
  state = {
    user: {},
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://randomuser.me/api/?inc=name,picture,location&noinfo'
      );
      const users = await res.json();

      this.setState({ user: users.results[0] }, () => {
        this.setState({ isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[gs.center, styles.container]}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={[colors.orange, colors.pink]}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Header user={this.state.user} />
          <Stats />
        </LinearGradient>
      </ScrollView>
    );
  }
}
