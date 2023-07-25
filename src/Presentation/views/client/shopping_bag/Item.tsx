import React from 'react'
import { Product } from '../../../../Domain/entities/Product';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../navigator/ClientStackNavigator';

interface Props {
    product: Product,
    addItem: (product: Product) => void,
    subtractItem: (product: Product) => void,
    deleteItem: (product: Product) => void,
}

export const ShoppingBagItem = ({ product, addItem, subtractItem, deleteItem }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image1 }}
                />
            </View>
            <View style={styles.productInfo}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{product.name}</Text>
                    {/* <Text style={styles.description}>{product.description}</Text> */}
                    <Text style={styles.price}>{product.quantity! * product.price}€</Text>
                </View>

                <View style={styles.productAction}>

                    <View style={styles.action}>
                        <TouchableOpacity onPress={() => subtractItem(product)} style={styles.actionLess}>
                            <Text style={styles.actionText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.quantity}>
                            <Text style={styles.actionText}>{product.quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => addItem(product)} style={styles.actionAdd}>
                            <Text style={styles.actionText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Image
                            style={styles.deleteItem}
                            source={require('../../../../../assets/trash.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>


        </View>
        //  <View style={styles.divider}></View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 70,
        marginHorizontal: 20,
        // paddingHorizontal: 20,
        marginTop: 10,
        // paddingTop: 10,
        // justifyContent: 'space-between'
    },
    imageContainer: {

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
    },
    productInfo: {
        // marginLeft: 15,
        flex: 1,
    },
    title: {
        color: '#000',
        fontSize: 14,
        marginLeft: 15,
        flex: 1,
    },
    price: {
        // color: '#000',
        // fontSize: 12,
        // marginTop: 3,
        marginRight: 40,
        fontWeight: 'bold',
    },
    productAction: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5,
        marginRight: 45,
    },
    action:{
        flexDirection: 'row',
        flex: 1,
    },
    actionLess: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    actionText: {
        color: '#000',
        fontSize: 15,
    },
    quantity: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
    actionAdd: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    deleteItem:{
        width: 25,
        height: 25,
    },
})