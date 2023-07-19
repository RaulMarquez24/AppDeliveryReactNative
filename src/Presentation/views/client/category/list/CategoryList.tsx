import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Button } from 'react-native'
import useViewModel from './ViewModel'
import { ClientCategoryListItem } from './Item';
import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientCategoryListScreen'> { };

export const ClientCategoryListScreen = ({ navigation, route }: Props) => {

  const { categories, getCategories } = useViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('horizontal-stack');
  const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    getCategories();
  }, [])
  

  return (
    <GestureHandlerRootView style={{ flex:1, justifyContent:'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={{position: 'absolute', alignSelf: 'center', top: height * 0.1}}>

        <Carousel
          loop={false}
          width={width}
          height={height}
          autoPlay={false}
          data={ categories }
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={ ({item}) => <ClientCategoryListItem category={ item } height={ height * 0.62 } width={width - 70} navigation={ navigation }/>}
          modeConfig={{
            snapDirection,
            stackInterval: 30,
          }}
          mode={mode}
        />

        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                onPress={() => {
                    removeSession();
                    navigation.navigate('HomeScreen');
                }}
                title='Cerrar sesion'
            />
        </View> */}
      </View>
    </GestureHandlerRootView>
  )
}
