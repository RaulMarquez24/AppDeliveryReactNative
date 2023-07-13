import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native';
// import useViewModel from './ViewModel';
import { FlatList } from 'react-native-gesture-handler';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
// import { AdminProductListItem } from './Item';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'>{};
export const AdminProductListScreen = ({navigation, route}: Props) => {

    const { category } = route.params;
    // console.log('CATEGORY: ',JSON.stringify(category));
    

    //   const { categories, responseMessage, deleteCategory } = useViewModel();

    //   useEffect(() => {
    //     if (responseMessage !== '') {
    //       Alert.alert('Borrar categoria', responseMessage);
    //     }
    //   }, [responseMessage])

    return (

        <View style={{ backgroundColor: '#fff' }}>
            <Text>AdminProductListScreen</Text>
            {/* <FlatList
                data={categories}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => <AdminProductListItem category={item} remove={deleteCategory} />}
            /> */}
        </View>
    )
}