import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Adm from './pages/Adm';
import Home from './pages/Home';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name='Adm'
                    component={Adm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;