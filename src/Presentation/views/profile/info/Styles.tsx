import React from 'react'
import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000'
        // justifyContent: 'center', 
        // alignItems: 'center'
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '11%',
    },

    logoImg: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
    },

    // logoTxt: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontSize: 20,
    //     marginTop: 10,
    //     fontWeight: 'bold',
    // },

    form: {
        width: '100%',
        height: '45%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        // justifyContent: 'center',
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    formInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    formContent:{
        marginLeft: 15,
    },

    formImg:{
        height: 30,
        width: 30
    },

    formTextDescription:{
        fontSize: 12,
        color: 'gray'
    },

    logout:{
        position: 'absolute',
        top: 30,
        right: 15,
    },

    logoutImg:{
        width: 40,
        height: 40,
    },
})

export default ProfileInfoStyles;