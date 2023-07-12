import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import useViewModel from './ViewModel';
import { FlatList } from 'react-native-gesture-handler';
import { AdminCategoryListItem } from './Item';

export const AdminCategoryListScreen = () => {

  const { categories, getCategories } = useViewModel();

  useEffect(() => {
    getCategories();
  }, [])

  return (

    <View style={{backgroundColor: '#fff'}}>
      <FlatList
        data={ categories }
        keyExtractor={ (item) => item.id! }
        renderItem={ ({ item }) => <AdminCategoryListItem category={item}/>}
      />
    </View>
  )
}
