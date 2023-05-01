import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import AuthenticationNavigator from './AuthenticationNavigator';
import { ROUTE_AUTHENTICATION_NAVIGATOR } from './routes';

export type ModalNavigatorParamList = {
  [ROUTE_AUTHENTICATION_NAVIGATOR]: undefined;
};

const ModalStack = createStackNavigator<ModalNavigatorParamList>();

const ModalNavigator: FC = () => {
  return (
    <NavigationContainer>
      <ModalStack.Navigator>
        <ModalStack.Screen
          name={ROUTE_AUTHENTICATION_NAVIGATOR}
          component={AuthenticationNavigator}
          options={{
            headerShown: false,
          }}
        />
      </ModalStack.Navigator>
    </NavigationContainer>
  );
};

export default ModalNavigator;
