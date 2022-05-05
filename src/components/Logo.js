import React from 'react'
import { Image, StyleSheet ,View,Text} from 'react-native'

export default function Logo() {
  return <View style={styles.viewContainer}>
  <Text  style={styles. LogoText} >CalorieMeter</Text>
     </View>
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    opacity: 0.7
  },
  LogoText: {
    position: 'absolute',
    fontSize: 50,
    textAlign: "center",
    fontFamily: "NEXTART-Regular",
    color:"red"
  },
})
