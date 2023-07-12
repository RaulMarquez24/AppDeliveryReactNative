import React from 'react'
import { Category } from '../../../../../Domain/entities/Category';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface Props {
    category: Category,

}

export const AdminCategoryListItem = ({ category }: Props) => {
    return (
        <TouchableOpacity>

            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: category.image }}
                />

                <View style={styles.info}>
                    <Text style={styles.title}>{category.name}</Text>
                    <Text style={styles.description}>{category.description}</Text>
                </View>

                <View style={styles.actionContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.actionImage}
                            source={require('../../../../../../assets/edit.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
        height: 70,
        marginHorizontal: 20,
        marginTop: 10,
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