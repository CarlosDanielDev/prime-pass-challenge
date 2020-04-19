import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Theaters from './pages/Theaters';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

const {Navigator, Screen} = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Theaters" component={Theaters} />
        <Screen name="Movies" component={Movies} />
        <Screen name="MovieDetails" component={MovieDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
