import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../../styles';

const styles = StyleSheet.create({
  imageContainer: {
    ...gs.center,
    marginTop: 16,
    shadowColor: colors.darkBg,
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.5,
  },
  check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    shadowColor: colors.darkBg,
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.3,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
});

export default class Header extends PureComponent {
  render() {
    const { user } = this.props;
    const name = `${user.name.first} ${user.name.last}`;
    return (
      <LinearGradient
        colors={[colors.orange, colors.pink]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={{ marginHorizontal: 32, paddingVertical: 64 }}>
          <View style={gs.rowBetween}>
            <Ionicons name="md-arrow-back" color={colors.text} size={1} />
            <Entypo name="dots-three-vertical" color={colors.text} size={24} />
          </View>

          <View style={styles.imageContainer}>
            <View>
              <View style={styles.check} width={0}>
                <Ionicons name="md-checkmark" size={20} color={colors.pink} />
              </View>

              <Image style={{ width: 100, height: 100, borderRadius: 32 }} />
            </View>
          </View>

          <View style={[gs.center, { marginVertical: 12 }]}>
            <Text style={gs.title}>David Müller</Text>
            <Text style={gs.subTitle}>Consultant</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
