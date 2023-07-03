import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/chef.jpg')} style={styles.imageBackground}/>
      
      <View style={styles.form}>

      </View>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  imageBackground:{
    width:'100%',
    height:'100%',
    opacity: 0.7,
    bottom: '30%',
  },

  form:{
    width: '100%',
    height: '40%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom:0,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  }
});
