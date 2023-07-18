import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native';
import useViewModel from './ViewModel';
import { FlatList } from 'react-native-gesture-handler';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import { AdminProductListItem } from './Item';
// import { AdminProductListItem } from './Item';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'> { };
export const AdminProductListScreen = ({ navigation, route }: Props) => {

    const { category } = route.params;
    // console.log('CATEGORY: ',JSON.stringify(category));


    const { products, responseMessage, deleteProduct, getProducts} = useViewModel();

    useEffect(() => {
        // if (products.length === 0) {
        getProducts(category.id!);
        // }
    }, []);


    useEffect(() => {
        if (responseMessage !== '') {
            Alert.alert('Borrar categoria', responseMessage);
        }
    }, [responseMessage])

    return (

        <View style={{ backgroundColor: '#fff' }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => <AdminProductListItem product={item} remove={ deleteProduct } category={category} />}
            />
        </View>
    )
}