import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';

const AdminOrderDetailStyles = StyleSheet.create({

    container:{
        flex: 1,
    },
    products:{
        width: '100%',
        height: '40%',
    },
    info:{
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    infoRow:{
        flexDirection:'row',
        marginTop: 15,
        alignItems: 'center',
    },
    infoImage:{
        width: 25,
        height: 25,
    },
    infoText:{
        flex:1,
    },
    infoTitle:{
        color: '#000'
    },
    infoDescription:{
        color: 'gray',
        fontSize: 13,
        marginTop: 3,
    },
    deliveries:{
        fontWeight: 'bold',
        marginTop: 15,
        color: MyColors.primary,
        fontStyle:'italic',
    },
    totalInfo:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    button:{
        width: '50%',
    },
});

export default AdminOrderDetailStyles;