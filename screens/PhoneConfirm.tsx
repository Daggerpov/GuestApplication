import React, { useState, useRef } from "react";
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

import PhoneInput from "react-native-phone-number-input";

export default function PhoneConfirmationScreen() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneInput = useRef(null); // react tag, using as reference of country code picker

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log("Invalid code.", error);
        }
    }

    if (!confirm) {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.heading}>
                    {" "}
                    Enter Your Phone Number:{" "}
                </Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="CA"
                    layout="first"
                    withShadow
                    autoFocus
                    containerStyle={styles.phoneNumberView}
                    textContainerStyle={{ paddingVertical: 0 }}
                    onChangeFormattedText={(text) => {
                        setPhoneNumber(text);
                    }}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => signInWithPhoneNumber(phoneNumber)}
                >
                    <Text style={styles.buttonText}>Send Code</Text>
                </TouchableOpacity>
            </View>
        );
                {/* <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Phone Number"
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType="numeric"
                /> 
                <Button
                    title="Send Code"
                    onPress={() => signInWithPhoneNumber(phoneNumber)}
                />
            </>*/}
        
    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Enter Confirmation Code"
                onChangeText={(text) => setCode(text)}
                value={code}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="numeric"
            />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
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
    // button: {
    //     backgroundColor: "#788eec",
    //     marginLeft: 30,
    //     marginRight: 30,
    //     marginTop: 20,
    //     height: 48,
    //     borderRadius: 5,
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
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
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    heading: {
        fontSize: 24,
        textAlign: "center",
        paddingBottom: 20,
        color: "black",
    },

    phoneNumberView: {
        width: "80%",
        height: 50,
        backgroundColor: "white",
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        width: "80%",
        padding: 8,
        backgroundColor: "#788eec",
    },

    buttonText: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
    },
});