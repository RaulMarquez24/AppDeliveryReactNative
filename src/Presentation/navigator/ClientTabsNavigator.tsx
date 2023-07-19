import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';
import { ClientStackNavigator } from './ClientStackNavigator';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="ClientStackNavigator"
        component={ClientStackNavigator}
        options={{
          title: 'Categorias',
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/list.png')}
              style={{ width: 25, height: 25, }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ClientOrderListScreen"
        component={ClientOrderListScreen}
        options={{
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25, }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{ width: 25, height: 25, }}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}