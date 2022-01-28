import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import auth from "@react-native-firebase/auth";

export default function RegistrationScreen({ navigation }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const onFooterLinkPress = () => {
        navigation.navigate("Login");
    };

    const onRegisterPress = () => {
        let fullNameValid = false;
        if (fullName.length <= 3) {
            setFullNameError("Full Name must be greater than 3 characters");
        } else {
            setFullNameError("");
            fullNameValid = true;
        }
        
        let emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        } else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        } else if (email.indexOf(" ") >= 0) {
            setEmailError("Email cannot contain spaces");
        } else {
            setEmailError("");
            emailValid = true;
        }

        let passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        } else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        } else if (password.indexOf(" ") >= 0) {
            setPasswordError("Password cannot contain spaces");
        } else {
            setPasswordError("");
            passwordValid = true;
        }        

        let passwordConfirmValid = false;
        if (confirmPassword != password){
            setConfirmPasswordError("Passwords don't match");
        } else {
            setConfirmPasswordError("");
            passwordConfirmValid = true;
        }      

        if (emailValid && passwordValid && passwordConfirmValid){
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("User account created & signed in!");
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        setEmailError("That email address is already in use!");
                    }

                    if (error.code === "auth/invalid-email") {
                        setEmailError("That email address is invalid!");
                    }

                    console.error(error);
                });
        }
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
                    placeholder="Full Name (display name)"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {fullNameError.length > 0 && <Text>{fullNameError}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {emailError.length > 0 && <Text>{emailError}</Text>}
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
                {passwordError.length > 0 && <Text>{passwordError}</Text>}
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {confirmPasswordError.length > 0 && (
                    <Text>{confirmPasswordError}</Text>
                )}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}
                >
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Already have an account?{" "}
                        <Text
                            onPress={onFooterLinkPress}
                            style={styles.footerLink}
                        >
                            Log in
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {},
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: "#788eec",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: "#2e2e2d",
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16,
    },
});
