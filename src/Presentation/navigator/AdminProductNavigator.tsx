import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
// import { Product } from '../../Domain/entities/Product';
// import { ProductProvider } from '../context/ProductContext';
import { AdminProductCreateScreen } from '../views/admin/product/create/ProductCreate';
// import { AdminProductUpdateScreen } from '../views/admin/product/update/ProductUpdate';
import { AdminProductListScreen } from '../views/admin/product/list/ProductList';
import { TouchableOpacity, Image } from 'react-native';
import { Category } from '../../Domain/entities/Category';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryStackParamList } from './AdminCategoryNavigator';
import { ProductProvider } from '../context/ProductContext';
import { AdminProductUpdateScreen } from '../views/admin/product/update/ProductUpdate';
import { Product } from '../../Domain/entities/Product';

export type ProductStackParamList = {
    AdminProductListScreen: { category: Category},
    AdminProductCreateScreen: { category: Category},
    AdminProductUpdateScreen: { category: Category, product: Product },
}

const Stack = createNativeStackNavigator<ProductStackParamList>();
interface Props extends StackScreenProps<CategoryStackParamList, 'AdminProductNavigator'>{};

export const AdminProductNavigator = ({navigation, route}: Props) => {
    return (
        <ProductState>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen
                    name="AdminProductListScreen"
                    component={AdminProductListScreen}
                    initialParams={{ category: route.params.category }}
                    options={({ navigation, route }) => (
                        {
                            headerShown: true,
                            title: `${route.params.category.name}`,
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('AdminProductCreateScreen')}>
                                    <Image
                                        style={{ width: 35, height: 35}}
                                        source={require('../../../assets/add.png')}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name="AdminProductCreateScreen"
                    component={AdminProductCreateScreen}
                    initialParams={{ category: route.params.category }}
                    options={{
                        headerShown: true,
                        title: 'Nuevo producto',
                    }}
                />

                <Stack.Screen
                    name="AdminProductUpdateScreen"
                    component={AdminProductUpdateScreen}
                    options={{
                        headerShown: true,
                        title: 'Editar producto',
                    }}
                />
            </Stack.Navigator>
        </ProductState>
    )
}

const ProductState = ({ children }: any) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}