import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { openAuthSession } from 'azure-ad-graph-expo';

export default class App extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : (
          <Text>Nothing to see here.</Text>
        )}
      </View>
    );
  }

  _handlePressAsync = async () => {
    const result = await openAuthSession(azureAdAppProps);
    this.setState({ result });
  };
}

const azureAdAppProps = {
  clientId: 'AZURE_CLIENT_ID',
  tenantId: 'XXX',
  scope: 'user.read',
  redirectUrl: AuthSession.makeRedirectUri(),
  clientSecret: 'AZURE_CLIENT_SECRET',
  domainHint: 'AZURE_DOMAIN_HINT',
  prompt: 'login',
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
