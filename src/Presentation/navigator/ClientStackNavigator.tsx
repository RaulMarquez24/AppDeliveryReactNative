import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";
import { ShoppingBagProvider } from '../context/ShoppingBagContext';
import { TouchableOpacity, Image } from "react-native";
import { ClientShoppingBagScreen } from "../views/client/shopping_bag/ShoppingBag";
import { ClientAddressListScreen } from "../views/client/address/list/AddressList";
import { ClientAddressCreateScreen } from "../views/client/address/create/AddressCreate";
import { ClientAddressMapScreen } from "../views/client/address/map/AddressMap";
import { ClientPaymentFormScreen } from "../views/client/payment/form/PaymentFrom";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
    ClientProductListScreen: { idCategory: string },
    ClientProductDetailScreen: { product: Product },
    ClientShoppingBagScreen: undefined,
    ClientAddressListScreen: undefined,
    ClientAddressCreateScreen: { refPoint: string, latitude: number, longitude: number } | undefined,
    ClientAddressMapScreen: undefined,
    ClientPaymentFormScreen: undefined,
}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
    return (
        <ShoppingBagState>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='ClientCategoryListScreen'
                    component={ClientCategoryListScreen}
                    options={({ navigation, route }) => (
                        {
                            headerShown: true,
                            title: 'Categorias',
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require('../../../assets/shopping_cart.png')}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductListScreen'
                    component={ClientProductListScreen}
                    options={({ navigation, route }) => (
                        {
                            headerShown: true,
                            title: 'Productos',
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require('../../../assets/shopping_cart.png')}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductDetailScreen'
                    component={ClientProductDetailScreen}
                />

                <Stack.Screen
                    name='ClientShoppingBagScreen'
                    component={ClientShoppingBagScreen}
                    options={{
                        title: 'Mi orden',
                        headerShown: true,
                    }}
                />

                <Stack.Screen
                    name='ClientAddressListScreen'
                    component={ClientAddressListScreen}
                    options={({ navigation, route }) => (
                        {
                            headerShown: true,
                            title: 'Mis direcciones',
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('ClientAddressCreateScreen')}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../../../assets/add.png')}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientAddressCreateScreen'
                    component={ClientAddressCreateScreen}
                    options={{
                        title: 'Nueva dirección',
                        headerShown: true,
                    }}
                />

                <Stack.Screen
                    name='ClientAddressMapScreen'
                    component={ClientAddressMapScreen}
                    options={{
                        title: 'Ubica tu dirección en el mapa',
                        headerShown: true,
                    }}
                />

                <Stack.Screen
                    name='ClientPaymentFormScreen'
                    component={ClientPaymentFormScreen}
                    options={{
                        title: 'Formulario de pago',
                        headerShown: true,
                    }}
                />

            </Stack.Navigator>
        </ShoppingBagState>
    )
}

const ShoppingBagState = ({ children }: any) => {
    return (
        <ShoppingBagProvider>
            {children}
        </ShoppingBagProvider>
    )
}