import React, { Component } from 'react';
import colors from './../colors';
import { StyleSheet, Text, View, Image } from 'react-native';

import RoundedButton from './../components/buttons/RoundedButton';

interface Props {
  text: string;
  color: string;
  backgroundColor: string;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
});

export default class LoggedOut extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../img/airbnb-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
          <RoundedButton
            text="Continue With FaceBook"
            color={colors.green01}
            backgroundColor={colors.white}
          />
        </View>
      </View>
    );
  }
}
