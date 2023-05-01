import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { AuthenticationNavigatorParamList } from '../../../navigators/AuthenticationNavigator';
import { ROUTE_AUTHENTICATION_OPTIONS } from '../../../navigators/routes';

type AuthenticationOptionsRouteProp = RouteProp<AuthenticationNavigatorParamList, typeof ROUTE_AUTHENTICATION_OPTIONS>;
type AuthenticationOptionsNavigationProp = StackNavigationProp<
  AuthenticationNavigatorParamList,
  typeof ROUTE_AUTHENTICATION_OPTIONS
>;

interface Props {
  navigation: AuthenticationOptionsNavigationProp;
  route: AuthenticationOptionsRouteProp;
}

const AuthenticationOptions: FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AuthenticationOptions</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthenticationOptions;
