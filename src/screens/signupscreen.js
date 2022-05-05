import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity ,ScrollView,Label} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { RadioButton } from 'react-native-paper';
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
  const [value, setValue] = React.useState('Female');
  const [valueact, setValueact] = React.useState('1');
  return (
    <Background>
       
      <BackButton goBack={navigation.goBack} />
    
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        keyboardType="email-address"
      />
       <TextInput
        label="Age"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        keyboardType="numeric"
      />
          <Text style={{color:"white",flexDirection:"row",paddingRight:"82%"}} >Gender</Text>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{color:"white", flexDirection:"row", width: '100%', marginVertical: 6, paddingRight:"45%"}}>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Female</Text>
        <RadioButton  value="Female" color="red" uncheckedColor="white" />
      </View>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Male</Text>
        <RadioButton  value="Male" uncheckedColor="white" color="red"  />
      </View>
      </View >
      
    </RadioButton.Group>
      
       <TextInput
        label="Height in cm"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        keyboardType="numeric"
      />
       <TextInput
        label="weight in kg"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <Text style={{color:"white",flexDirection:"row",paddingRight:"81%"}} >Activity</Text>
      <RadioButton.Group onValueChange={newValue => setValueact(newValue)} value={valueact}>
        
        <View style={{color:"white", flexDirection:"column", width: '100%', marginVertical: 6, paddingRight:"45%"}}>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Sedentary</Text>
        <RadioButton  value="1" color="red" uncheckedColor="white" />
      </View>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Lightly active</Text>
        <RadioButton  value="2" uncheckedColor="white" color="red"  />
      </View>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Moderately active
</Text>
        <RadioButton  value="3" uncheckedColor="white" color="red"  />
      </View>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Active</Text>
        <RadioButton  value="4" uncheckedColor="white" color="red"  />
      </View>
      <View style={{color:"white", flexDirection:"row"}}>
        <Text style={{color:"white",flexDirection:"row"}}>Very active</Text>
        <RadioButton  value="5" uncheckedColor="white" color="red"  />
      </View>
      </View >
    </RadioButton.Group>
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
     
   
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: "white",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 1,
  },
})