import React from 'react'
import { View, Text, FlatList } from 'react-native';
import useViewModel from './ViewModel'
import styles from './Styles'
import { ShoppingBagItem } from './Item';
import { RoundedButton } from '../../../components/RoundedButton';

export const ClientShoppingBagScreen = () => {

    const { shoppingBag } = useViewModel();

    return (
        <View style={styles.container}>
            <FlatList
                data={shoppingBag}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => 
                    <ShoppingBagItem 
                        product={item}
                        addItem={() => {}}
                        subtractItem={() => {}}
                        deleteItem={() => {}}
                    />}
            />

            <View style={styles.totalToPay}>
                <View style={styles.totalInfo}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text>0€</Text>
                </View>
                <View style={styles.buttonAdd}>
                    <RoundedButton text='CONFIRMAR ORDEN' onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}
