import React, { useState } from 'react'
import { View, Text, FlatList, Dimensions, Button } from 'react-native'
import useViewModel from './ViewModel'
import { RolesItem } from './Item';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator'
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'> { };

export const RolesScreen = ({ navigation, route }: Props) => {

  const { user } = useViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('horizontal-stack');
  const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');

  const { removeSession } = useViewModel();

  return (
    <GestureHandlerRootView style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
      <View>
        {/* <FlatList
          data={ user?.roles }
          renderItem= { ({item}) => <RolesItem rol={ item } height={420} width={width - 100}/>}
          keyExtractor={ (item) => item.id}
          /> */}

        <Carousel
          loop={false}
          width={width}
          height={height/1.5}
          autoPlay={false}
          data={ user?.roles! }
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={ ({item}) => <RolesItem rol={ item } height={420} width={width - 100} navigation={ navigation }/>}
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
