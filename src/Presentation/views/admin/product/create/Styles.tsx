import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';

const AdminProductCreateStyles = StyleSheet.create({

    container:{
        flex:1,
    },
    imageContainer:{
        flexDirection: 'row',
        paddingTop: 50,
        justifyContent: 'space-around'
    },
    image: {
        width: 110,
        height: 110,
        resizeMode:'contain'
    },
    form:{
        marginTop: 50,
        backgroundColor: '#fff',
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    buttonContainer: {
        // position: 'absolute',
        // bottom: 20,
        // left: 20,
        // right: 20
        marginTop: 80,
    },
    categoryInfo:{
        // flexDirection:'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCategory:{
        width: 50,
        height: 50
    },
    categoryText:{
        // marginLeft: 10,
        color: 'gray',
        fontSize: 17,
        fontWeight: "bold"
    },
    
});

export default AdminProductCreateStyles;