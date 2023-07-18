import React from 'react'
import { Product } from '../../../../../Domain/entities/Product';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import { Category } from '../../../../../Domain/entities/Category';

interface Props {
    category: Category,
    product: Product,
    remove: (product: Product) => void;
}

export const AdminProductListItem = ({ product, category, remove }: Props) => {

    const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();

    return (
        <TouchableOpacity
        // onPress={() => navigation.navigate('AdminProductNavigator', { product: product})}>
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image1 }}
                />

                <View style={styles.info}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>{product.price}€</Text>
                </View>

                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProductUpdateScreen', {category: category, product: product })}>
                        <Image
                            style={styles.actionImage}
                            source={require('../../../../../../assets/edit.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => remove(product)}>
                    
                        <Image
                            style={styles.actionImage}
                            source={require('../../../../../../assets/trash.png')}
                        />

                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.divider}></View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 90,
        marginHorizontal: 20,
        marginTop: 10,
        paddingTop: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
    },
    info: {
        marginLeft: 15,
        flex: 1,
    },
    title: {
        color: '#000',
        fontSize: 15,
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3,
    },
    price: {
        color: 'green',
        fontSize: 12,
        marginTop: 3,
        fontWeight: 'bold'
    },
    actionContainer: {
        marginRight: 40,
    },
    actionImage: {
        width: 25,
        height: 25,
        marginVertical: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginHorizontal: 30
    },
})