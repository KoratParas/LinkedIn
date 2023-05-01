import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import AuthenticationOptions from '../features/auth/containers/AuthenticationOptions';
import { ROUTE_AUTHENTICATION_OPTIONS } from './routes';

export type AuthenticationNavigatorParamList = {
  [ROUTE_AUTHENTICATION_OPTIONS]: undefined;
};

const Stack = createStackNavigator<AuthenticationNavigatorParamList>();
const AuthenticationNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_AUTHENTICATION_OPTIONS}
        component={AuthenticationOptions}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
