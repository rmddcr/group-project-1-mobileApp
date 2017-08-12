import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Image,KeyboardAvoidingView} from 'react-native'

class Inputs extends Component {

   state = {
      email: '',
      password: ''
   }

   handleEmail = (text)=> {
      this.setState({ email: text })
   }

   handlePassword = (text) =>{
      this.setState({ password: text })
   }

   login = (email, pass) =>{
      alert('email: ' + email + ' password: ' + pass)
   }

   render(){
      return (
         <KeyboardAvoidingView behavior = "padding" style = {styles.container}>

           <View style = {styles.logoContainer}>
             <Image
               style={styles.logo}
               source = {require('./dining_icon.png')}/>
           </View>


            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               returnKeyType="go"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.inputPassword}
               secureTextEntry
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"

               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.login(this.state.email, this.state.password)}>
               <Text style = {styles.submitButtonText}>
                  LOGIN
               </Text>
            </TouchableOpacity>

         </KeyboardAvoidingView>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
     paddingTop: 80,
     //paddingBottom:30,
     flexDirection:'column',
     justifyContent:'center'

  },
  logo:{
    width:170,
    height:170
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },

   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign:'center',

   },

   inputPassword: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign:'center'
   },

   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white',
      textAlign:'center'
   }
})
