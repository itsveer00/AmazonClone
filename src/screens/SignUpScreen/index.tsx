import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import Button from '../../components/Button';

const SignUpScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(userName, email, password)
    const submit = () => {
        if (userName != '' && email === '' && password === '') {
            console.warn('filled');
        }
        else {
            console.warn('not filled');
        }
    }
    const signup = () => {
        console.warn("sign");
    }
    // const [againPassword, setAgainPassword] = useState("");
    // const passwordMatch = () => {
    //     if (password === againPassword) {
    //         console.warn("matched");
    //     }
    // }
  return (
    <ScrollView style={styles.mainContainer}>
            <Text style={styles.mainHeader}>SignUp Page</Text>
            <Text style={styles.description}>Create New Account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Name</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Email or Phone" placeholderTextColor='grey' 
                    value={userName} onChangeText={(acctualData) => setUserName(acctualData)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter E-Mail</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Email or Phone" placeholderTextColor='grey' 
                    value={email} onChangeText={(acctualData) => setEmail(acctualData)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Password</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Password" placeholderTextColor='grey' secureTextEntry={true}
                    value={password} onChangeText={(acctualData) => setPassword(acctualData)}
                />
            </View>
            {/* <View style={styles.inputContainer}>
                <Text style={styles.labels}>Password again</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Password" placeholderTextColor='grey' secureTextEntry={true}
                    value={againPassword} onChangeText={(acctualData) => setAgainPassword(acctualData)}
                />
                <Text style={styles.passwordMatchValidation}>Password matched</Text>
                <Text style={styles.passwordNotMatchValidation}>Password not matched</Text>
            </View> */}
            <View style={styles.signupContainer}>
                <Button text={'Sign Up'} containerStyles={styles.signupButtonStyle} onPress={() => signup()} ></Button>
                {/* <TouchableOpacity
                style={ styles.signupButtonStyle }>
                <Text style={styles.buttonText }>Sign Up</Text>
            </TouchableOpacity> */}
            <View style={styles.wrapper}>
                {/* <Text style={styles.wrapperText}>Already have an account<a style={styles.wrapperLogin}>Click here</a></Text> */}
                <Text style={styles.wrapperText}>Already have an account<TouchableOpacity style={styles.wrapperLogin } >Click here</TouchableOpacity></Text>
            </View>
            </View>
        </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 0,
    backgroundColor: '#F5F5F5',
},
mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 5,
    textTransform: 'capitalize',
    fontFamily: 'bold',
     
},
description: {
    fontSize: 40,
    color: '#344055',
    fontWeight: '500',
    // color: '#7d7d7d',
    marginBottom: 10,
    lineHeight: 25,
    fontFamily: "bold",
    textAlign: 'center',
    marginTop: 100,
},
inputContainer: {
    margin: 20,
},
labels: {
    fontSize: 18,
    // color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
},
inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontFamily: 'regular',
    fontSize: 18,
    backgroundColor: 'white',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',

},
passwordMatchValidation: {
    textAlign: 'right',
    marginRight: 5,
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
},
passwordNotMatchValidation: {
    textAlign: 'right',
    marginRight: 5,
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
},
wrapper: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'orange',
},
wrapperBox: {
    marginVertical: 'auto',
},
wrapperText: {
    fontSize: 18,
    color: '#7d7d7d',
    // marginLeft: 15,
    textAlign: 'center'
},
buttonStyle: {
    marginTop: 50,
    width: 120,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 'auto',
},
buttonText: {
    fontSize: 20,
    marginHorizontal: 'auto',
    marginVertical: 'auto'
},
signupContainer:{
   margin: 0,
//    backgroundColor: 'red'
},
signupContainerLabel:{
    textAlign: 'center',
    fontSize: 20,
    color: '#7d7d7d',
    marginLeft: 15,
},
signupButtonStyle:{
    text: 50,
    marginTop: 30,
    width: 200,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 'auto',
    backgroundColor: '#e47911',
},
wrapperLogin: {
    paddingTop: 4,
    // backgroundColor: 'red',
    fontSize: 18,
    color: 'blue',
    marginLeft: 15,
}
})