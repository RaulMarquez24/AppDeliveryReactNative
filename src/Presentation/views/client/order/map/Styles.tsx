import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';

const ClientOrderMapStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLocation:{
        height: 65,
        width: 65,
        justifyContent: 'center',
        position: 'absolute'
    },
    refPoint:{
        position: 'absolute',
        backgroundColor: '#d4d4d4',
        width: '70%',
        paddingVertical: 4,
        top: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refPointText: {
        textAlign: 'center',
    },
    buttonRefPoint:{
        width: '100%',
        marginTop: 15,
    },
    info: {
        backgroundColor: '#fff',
        height: '37%',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
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
    divider:{
        backgroundColor: '#e2e2e2',
        height: 1,
        width: '100%',
        marginTop: 15, 
    },
    infoClient:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    imageClient:{
        height: 50,
        width: 50,
        borderRadius: 15,
    },
    imagePhone:{
        height: 35,
        width: 35,
        borderRadius: 15,
    },
    nameClient:{
        fontWeight: 'bold',
        fontSize: 17,
        flex: 1,
        marginLeft: 15,
    },
    markerImage: {
        height: 50,
        width: 50,
    },
    backContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    back:{
        width: 30,
        height: 30,
    },
});

export default ClientOrderMapStyles;