// import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import Home from '../screens/Home'
import FrontEnd from '../screens/FrontEnd'
import BackEnd from '../screens/BackEnd'

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='FrontEnd' component={FrontEnd} />
                <Stack.Screen name='BackEnd' component={BackEnd} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// const styles = StyleSheet.create({
//     headerMenu: {
//         backgroundColor: 'black'
//     }
// });
