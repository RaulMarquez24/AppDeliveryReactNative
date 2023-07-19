import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';
import { version } from 'react';

const ClientProductDetailStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    productImage: {
        width: '100%',
        height: '45%',
    },
    productDetail:{
        position: 'absolute',
        width: '100%',
        height: '57%',
        backgroundColor: '#fff',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    productInfo: {
        padding: 30,
        flex: 1,
    },
    divider:{
        height: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 15,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionTitle:{
        marginTop: 10,
        fontWeight:'bold',
    },
    descriptionContent:{
        fontSize: 13,
        marginTop: 5,
    },
    productActions:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
    },
    actionLess: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    actionText:{
        color: '#fff',
        fontSize: 15,
    },
    quantity:{
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
    actionAdd: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonAdd: {
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back:{
        position: 'absolute',
        top: 30,
        left: 15,
    },
    backImage:{
        width: 40,
        height: 40,
    },
});

export default ClientProductDetailStyles;