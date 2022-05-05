
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,Image} from 'react-native';

export default function startscreen({ navigation }){
  return (
    <ImageBackground source={require('../../assets/4901583.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.viewContainer}>
       <Text  style={styles. LogoText} >CalorieMeter</Text>
          </View>
         
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.loginBtnView} onPress={() => navigation.navigate('LoginScreen')} >
                <Image style={styles.img} source={require('../../assets/btnBackgroundImage.png')} />
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signUpBtnView} onPress={() => navigation.navigate('signupscreen')} >
                <Image style={styles.img} source={require('../../assets/btnBackgroundImage.png')} />
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
         

        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    opacity: 0.7
  },
  logo: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  },
  btnContainer: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
    bottom: 0
  },
  loginBtnView: {
    width: '90%',
    bottom: 40,
    borderRadius: 10,
    aspectRatio: 3 / 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ff8c00"
  },
  signUpBtnView: {
    width: '90%',
    bottom: 20,
    borderRadius: 10,
    aspectRatio: 3 / 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ff8c00"
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  loginText: {
    position: 'absolute',
    fontSize: 20,
    textAlign: "center",
    fontFamily: "NEXTART-Regular",
    color:"black"
  },
  LogoText: {
    position: 'absolute',
    fontSize: 50,
    textAlign: "center",
    fontFamily: "NEXTART-Regular",
    color:"black"
  }

});