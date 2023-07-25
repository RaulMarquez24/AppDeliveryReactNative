import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';
import { version } from 'react';

const ClientShoppingBagStyles = StyleSheet.create({

    container:{
        flex:1, 
        backgroundColor: '#fff'
    },
    totalToPay: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    totalText:{
        fontWeight:'bold',
        fontSize: 17,
    },
    totalInfo:{
        alignItems: 'center',
    },
    buttonAdd:{
        width: '50%',
    },

});

export default ClientShoppingBagStyles;