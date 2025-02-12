import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { openAuthSession } from 'azure-ad-graph-expo';
import getEnvVars from '../../enviroment';

const {azureAdAppProps} = getEnvVars();

console.log(azureAdAppProps);
export default class Login extends React.Component {
  state = {
    result: null,
  };

  _handlePressAsync = async () => {
    const result = await openAuthSession(azureAdAppProps);
    this.setState({ result });
    this.props.navigation.navigate('OverView');
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../images/image.jpg')}
          style={{ width: '100%', height: '43%', marginBottom: 60 }}
        />
        <Text
          style={{
            fontSize: 30,
            alignSelf: 'center',
          }}
        >
          Hey there!
        </Text>

        <Text
          style={{
            marginHorizontal: 35,
            textAlign: 'center',
            marginTop: 15,
            opacity: 0.55,
            fontSize: 15,
          }}
        >
          In order for this app to work correctly, we need your permissions to
          access your M365 account. Please authenticate using the button below.
        </Text>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 55,
            backgroundColor: '#00716F',
            paddingVertical: 15,
            borderRadius: 23,
          }}
        >
          <Text
            onPress={this._handlePressAsync}
            style={{
              fontSize: 20,
              color: 'white',
            }}
          >
            Grant Permissions
          </Text>
        </View>
      </View>
    );
  }
}
