import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onFooterLinkPress = () => {
        navigation.navigate("Registration");
    };

    const onLoginPress = () => {
        
        
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%" }}
                keyboardShouldPersistTaps="always"
            >
                <Image
                    style={styles.logo}
                    source={require("../assets/images/icon.png")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}
                >
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Don't have an account?{" "}
                        <Text
                            onPress={onFooterLinkPress}
                            style={styles.footerLink}
                        >
                            Sign up
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default class LoginScreen extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Login Screen</Text>
//             </View>
//         );
//     }
// }


// import React from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
});

// export default class LoginScreen extends React.Component {
//     state = {
//         email: "",
//         password: "",
//         errorMessage: null
//     }

//     handleLogin = () => {
//         const {email, password} = this.state

//         firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }));
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.greeting}>{'Hello again.\nWelcome back.'}</Text>

//                 <View style={styles.errorMessage}>
//                     {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
//                 </View>

//                 <View style={styles.form}>
//                     <View>
//                         <Text style={styles.inputTitle}>Email Address</Text>
//                         <TextInput
//                         style={styles.input}
//                         autoCapitalize="none"
//                         onChangeText={email => this.setState({email})}
//                         value={this.state.email}
//                         ></TextInput>
//                     </View>
//                 </View>

//                 <View style={styles.form}>
//                     <View>
//                         <Text style={styles.inputTitle}>Password</Text>
//                         <TextInput
//                         style={styles.input}
//                         secureTextEntry
//                         autoCapitalize="none"
//                         onChangetext={password => this.setState({password})}
//                         value={this.state.password}
//                         ></TextInput>
//                     </View>
//                 </View>

//                 <TouchableOpacity style={styles.button} onpress={this.handleLogin}>
//                     <Text style={{color: "white", fontWeight: "500" }}>Login</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}>
//                     <Text style={{color: "#414959", fontSize: 13}}>
//                         New to PromoterManager for Guests?
//                         <Text style={{fontWeight: "500", color: "#E9446A"}}>Sign Up</Text>
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         );

//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     greeting: {
//         marginTop: 32,
//         fontSize: 18,
//         fontweight: "400",
//         textalign: "center",
//     },
//     errorMessage: {
//         height: 72,
//         alignItems: "center",
//         justifyContent: "center",
//         marginHorizontal: 30,
//     },
//     error: {
//         color: "#E9446A",
//         fontSize: 13,
//         fontweight: "600",
//         textAlign: "center",
//     },
//     form: {
//         maginBottom: 48,
//         marginHorizontal: 30,
//     },
//     inputTitle: {
//         color: "8A8F9E",
//         fontSize: 10,
//         textTransform: "uppercase",
//     },
//     input: {
//         borderBottomColor: "8A8F9E",
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         height: 40,
//         fontSize: 15,
//         color: "#161F3d",
//     },
//     button: {
//         marginHorizontal: 30,
//         backgroundColor: "#E94496A",
//         borderRadius: 4,
//         height: 52,
//         alignItems: "center",
//         justifyContent: "center",
//     }
// });
