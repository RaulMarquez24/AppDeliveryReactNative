import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native';
import useViewModel from './ViewModel';
import { FlatList } from 'react-native-gesture-handler';
import { AdminCategoryListItem } from './Item';

export const AdminCategoryListScreen = () => {

  const { categories, responseMessage, getCategories, deleteCategory } = useViewModel();

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    if (responseMessage !== '') {
      Alert.alert('Borrar categoria', responseMessage);
    }
  }, [responseMessage])


  return (

    <View style={{ backgroundColor: '#fff' }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => <AdminCategoryListItem category={item} remove={deleteCategory} />}
      />
    </View>
  )
}
