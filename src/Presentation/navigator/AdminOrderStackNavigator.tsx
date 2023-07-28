import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Order } from '../../Domain/entities/Order';
import { TouchableOpacity, Image } from 'react-native';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { AdminOrderDetailScreen } from '../views/admin/order/detail/OrderDetail';
import { OrderProvider } from '../context/OrderContext';

export type AdminOrderStackParamList = {
    AdminOrderListScreen: undefined,
    AdminOrderDetailScreen: { order: Order },
}

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();

export const AdminOrderStackNavigator = () => {
    return (
        <OrderProvider>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen
                    name="AdminOrderListScreen"
                    component={AdminOrderListScreen}
                />

                <Stack.Screen
                    name="AdminOrderDetailScreen"
                    component={AdminOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalles de la orden',
                    }}
                />
            </Stack.Navigator>
        </OrderProvider>
    )
}

const OrderStatus = ({ children }: any) => {
    return (
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}