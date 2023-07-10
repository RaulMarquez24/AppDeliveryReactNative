import React from 'react'
import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

const ProfileUpdateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        bottom: '30%',
    },

    form: {
        width: '100%',
        height: '50%',
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

    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
    },

    formRegisterTextLink: {
        fontStyle: 'italic',
        color: MyColors.primary,
        textDecorationLine: "underline",
        fontWeight: 'bold',
        marginLeft: 10,
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '8%',
        alignItems: 'center',
    },

    logoImg: {
        width: 100,
        height: 100,
    },

    logoTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    loading:{
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        top:0,
    }
});

export default ProfileUpdateStyles;
