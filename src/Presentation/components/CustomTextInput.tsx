import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void,
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry=false,
    property,
    onChangeText

}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image source = {image} style={styles.formImgInput} />
            <TextInput style = {styles.formTextInput}
                placeholder = {placeholder}
                keyboardType = {keyboardType}
                secureTextEntry = {secureTextEntry} 
                value = {value}
                onChangeText = {text => onChangeText(property, text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        marginTop: '7%',
    },

    formImgInput: {
        width: 25,
        height: 25,
        marginTop: '1%',
    },

    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft: 15,
    },
});