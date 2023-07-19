import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetailScreen'> { };

export const ClientProductDetailScreen = ({ navigation, route }: Props) => {

    const { product } = route.params;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    // const [mode, setMode] = useState<any>('horizontal-stack');
    // const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');
    const { productImageList, quantity, price, addItem, removeItem } = useViewModel(product);

    return (
        <View style={styles.container}>
            <GestureHandlerRootView>
                <Carousel
                    loop={true}
                    width={width}
                    height={height}
                    autoPlay={true}
                    data={productImageList}
                    autoPlayInterval={5000}
                    scrollAnimationDuration={1000}
                    // onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item }) =>
                        <Image
                            source={{ uri: item }}
                            style={styles.productImage}
                        />
                    }
                // modeConfig={{
                //     snapDirection,
                //     stackInterval: 30,
                // }}
                // mode={mode}
                />
            </GestureHandlerRootView>
            <View style={styles.productDetail}>
                <View style={styles.productInfo}>
                    {/* NOMBRE */}
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.divider}></View>

                    {/* DESCRIPCION */}
                    <Text style={styles.descriptionTitle}>Descripción</Text>
                    <Text style={styles.descriptionContent}>{product.description}</Text>
                    <View style={styles.divider}></View>

                    {/* PRECIO */}
                    <Text style={styles.descriptionTitle}>Precio</Text>
                    <Text style={styles.descriptionContent}>{product.price}€</Text>
                    <View style={styles.divider}></View>

                    {/* ORDEN */}
                    <Text style={styles.descriptionTitle}>Tu orden</Text>
                    <Text style={styles.descriptionContent}>Cantidad: {quantity}</Text>
                    <Text style={styles.descriptionContent}>Precio total: {price}</Text>
                    <View style={styles.divider}></View>
                </View>

                <View style={styles.productActions}>
                    <TouchableOpacity onPress={() => removeItem()} style={styles.actionLess}>
                        <Text style={styles.actionText}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                        <Text style={styles.actionText}>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => addItem()} style={styles.actionAdd}>
                        <Text style={styles.actionText}>+</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonAdd}>
                        <RoundedButton text='AGREGAR' onPress={() => { }} />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.back}>
                <Image
                    style={styles.backImage}
                    source={require('../../../../../../assets/back.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
