import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -48,
  },
  statContainer: {
    ...gs.center,
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  stat: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.lightHl,
    marginTop: 6,
  },
});

export default class Stats extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>12 Tage</Text>
          <Text style={styles.stat}>Resturlaub</Text>
        </View>
      </View>
    );
  }
}
