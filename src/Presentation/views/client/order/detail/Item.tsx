import React from 'react'
import { Product } from '../../../../../Domain/entities/Product';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';

interface Props {
    product: Product,
}

export const OrderDetailItem = ({ product }: Props) => {

    const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image1 }}
            />

            <View style={styles.productInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.quantity}>Cantidad: {product.quantity}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
    },
    productInfo: {
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    quantity: {
        color: 'gray',
        fontSize: 13,
        marginTop: 3,
    },
})