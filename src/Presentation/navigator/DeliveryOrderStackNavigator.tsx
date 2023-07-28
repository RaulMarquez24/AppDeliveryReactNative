import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Order } from '../../Domain/entities/Order';
import { TouchableOpacity, Image } from 'react-native';
import { DeliveryOrderListScreen } from '../views/delivery/order/list/OrderList';
import { DeliveryOrderDetailScreen } from '../views/delivery/order/detail/OrderDetail';
import { OrderProvider } from '../context/OrderContext';

export type DeliveryOrderStackParamList = {
    DeliveryOrderListScreen: undefined,
    DeliveryOrderDetailScreen: { order: Order },
}

const Stack = createNativeStackNavigator<DeliveryOrderStackParamList>();

export const DeliveryOrderStackNavigator = () => {
    return (
        <OrderStatus>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen
                    name="DeliveryOrderListScreen"
                    component={DeliveryOrderListScreen}
                />

                <Stack.Screen
                    name="DeliveryOrderDetailScreen"
                    component={DeliveryOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalles de la orden',
                    }}
                />
            </Stack.Navigator>
        </OrderStatus>
    )
}

const OrderStatus = ({ children }: any) => {
    return (
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}