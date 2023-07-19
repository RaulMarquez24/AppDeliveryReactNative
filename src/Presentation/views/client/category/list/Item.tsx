import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Category } from '../../../../../Domain/entities/Category'
import { MyColors } from '../../../../theme/AppTheme'
import { StackNavigationProp } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'

interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClientStackParamList, "ClientCategoryListScreen", undefined>
}

export const ClientCategoryListItem = ({ category, height, width, navigation }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => {
                // if (category.name == 'ADMIN') {
                //     navigation.replace('AdminTabsNavigator');
                // }else if (category.name == 'CLIENTE') {
                //     navigation.replace('ClientTabsNavigator');
                // }
            }}
            style={{ ...styles.container, width: width, height: height }}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: category.image }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.name}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 18,
    },
    image: {
        flex: 1,
        // resizeMode: 'contain',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    titleContainer: {
        height: 70,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    title: {
        color: '#000',
        fontSize: 25
    },
});
