import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import Home from './home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tickets from './tickets';
import Contact from './contact';
import TicketPurchase from './ticket-purchase';
import News from './news';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}>
            {props => <Home {...props} username="Sports Fan" />}
          </Stack.Screen>

          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Contact Us',
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Purchase Tickets',
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Latest News',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home username='Sports Fan'></Home> */}
    </>
  );
};

export default App;
