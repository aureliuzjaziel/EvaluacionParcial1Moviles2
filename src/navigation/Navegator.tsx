import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreeen from "../screens/LoginScreeen";
import OperacionesScreen from "../screens/OperacionesScreen";
import HistorialScreen from "../screens/HistorialScreen";
import PerfilScreen from "../screens/PerfilScreen";
import RegisterScreen from "../screens/RegisterScreen";




const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
            <Stack.Screen name= 'Welcome' component={WelcomeScreen} />
            <Stack.Screen name = 'Login' component={LoginScreeen}/>
            <Stack.Screen name = 'Registrer' component={RegisterScreen} />
            <Stack.Screen name = 'Operaciones' component={BottomTabNavigator} />
        </Stack.Navigator>

        
    )
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator >
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Operaciones" component={OperacionesScreen} />
       < Tab.Screen name="Historial" component={HistorialScreen} />
      
      
    </Tab.Navigator>
  );    
}



export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}