import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from './src/screens/Home';
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'salmon',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{ title: 'Reciped' }} />
                <Stack.Screen
                    name="RecipeDetails"
                    component={RecipeDetails}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
