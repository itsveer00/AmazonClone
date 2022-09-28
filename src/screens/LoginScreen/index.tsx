import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const LoginScreen = () => {
    const [agree, setAgree] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.warn(userName, password)
    const submit = () => {
        if (userName === 'veer' && password === '123') {
            console.warn('Logged in');
        }
        else if (userName === '' || password === '') {
            console.warn('Please input id and password');
        }
        else {
            console.warn('incorrect id or password');
        }
        return Alert.alert(userName, password);
    }

    return (
        // <View>
        //     <Text>Hello</Text>
        //     <TextInput style={{backgroundColor:'red'}}
        //         // label="Email"
        //         // returnKeyType="next"
        //         // value={email.value}
        //         // onChangeText={text => setEmail({ value: text, error: '' })}
        //         // error={!!email.error}
        //         // errorText={email.error}
        //         // autoCapitalize="none"
        //         // autoCompleteType="email"
        //         // textContentType="emailAddress"
        //         // keyboardType="email-address"
        //     />

        //     <TextInput style={{backgroundColor:'red'}}
        //         // label="Password"
        //         // returnKeyType="done"
        //         // value={password.value}
        //         // onChangeText={text => setPassword({ value: text, error: '' })}
        //         // error={!!password.error}
        //         // errorText={password.error}
        //         // secureTextEntry
        //     />
        // </View>
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Page</Text>
            <Text style={styles.description}>Sign in</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your E-Mail</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Email or Phone" placeholderTextColor='grey' value={userName}
                    onChangeText={(acctualData) => setUserName(acctualData)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Password</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none'
                    autoCorrect={false} placeholder="Password" placeholderTextColor='grey' secureTextEntry={true}
                    value={password} onChangeText={(acctualData) => setPassword(acctualData)} />
            </View>
            <View style={styles.wrapper}>
                <Checkbox style={[styles.wrapperBox, { backgroundColor: agree ? '#4630EB' : 'grey', }]} value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? '#4630EB' : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agree with TC</Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor: agree ? '#e47911' : '#ffbd7d',
                    },
                ]}
                disabled={!agree}
                onPress={() => submit()}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.signupContainerLabel} >New user</Text>
                <TouchableOpacity
                style={ styles.signupButtonStyle }>
                <Text style={styles.buttonText}>Signup here</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: '#F5F5F5',
    },
    mainHeader: {
        fontSize: 25,
        color: '#344055',
        fontWeight: '500',
        paddingTop: 20,
        textTransform: 'capitalize',
        fontFamily: 'bold',

    },
    description: {
        fontSize: 40,
        color: '#344055',
        fontWeight: '500',
        // color: '#7d7d7d',
        marginBottom: 20,
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
    wrapper: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    wrapperBox: {
        marginVertical: 'auto',
    },
    wrapperText: {
        fontSize: 18,
        color: '#7d7d7d',
        marginLeft: 15,
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
       margin: 25,
    //    backgroundColor: 'red'
    },
    signupContainerLabel:{
        textAlign: 'center',
        fontSize: 20,
        color: '#7d7d7d',
        marginLeft: 15,
    },
    signupButtonStyle:{
        marginTop: 30,
        width: 200,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 'auto',
        backgroundColor: '#e47911',
    }
})

// import React, { memo, useState } from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
// import Button from '../components/Button';
// import TextInput from '../components/TextInput';
// import BackButton from '../components/BackButton';
// import { theme } from '../core/theme';
// import { emailValidator, passwordValidator } from '../core/utils';
// import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };

// const LoginScreen = ({ navigation }: Props) => {
//   const [email, setEmail] = useState({ value: '', error: '' });
//   const [password, setPassword] = useState({ value: '', error: '' });

//   const _onLoginPressed = () => {
//     const emailError = emailValidator(email.value);
//     const passwordError = passwordValidator(password.value);

//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError });
//       setPassword({ ...password, error: passwordError });
//       return;
//     }

//     navigation.navigate('Dashboard');
//   };

//   return (
//     <Background>
//       <BackButton goBack={() => navigation.navigate('HomeScreen')} />

//       <Logo />

//       <Header>Welcome back.</Header>

//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={text => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />

//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={text => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />

//       <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ForgotPasswordScreen')}
//         >
//           <Text style={styles.label}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>

//       <Button mode="contained" onPress={_onLoginPressed}>
//         Login
//       </Button>

//       <View style={styles.row}>
//         <Text style={styles.label}>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   forgotPassword: {
//     width: '100%',
//     alignItems: 'flex-end',
//     marginBottom: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   label: {
//     color: theme.colors.secondary,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// });

// export default memo(LoginScreen);