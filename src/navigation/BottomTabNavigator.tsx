import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistroRecordatorio from "../screens/RegistroRecordatorio";
import EditarRecordatorios from "../screens/EditarRecordatorios";
import ListaRecordatorios from "../screens/ListaRecordatorios";
import ListaApi from "../screens/ListaApi";
import Bienvenida from "../screens/Bienvenida";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Registro" component={RegistroRecordatorio} />
      <Tab.Screen name="Editar" component={EditarRecordatorios} />
      <Tab.Screen name="Lista" component={ListaRecordatorios} />
      <Tab.Screen name="ListaApi" component={ListaApi} />
      <Tab.Screen name="Bienvenida" component={Bienvenida} />
    </Tab.Navigator>
  );    
}


