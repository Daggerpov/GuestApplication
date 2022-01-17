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

export default function PhoneConfirmationScreen() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            console.log(code);
        } catch (error) {
            console.log("Invalid code.", error);
        }
    }

    if (!confirm) {
        return (
            <>
                <TextInput
                    value={code}
                    onChangeText={(phoneNumber) => setCode(phoneNumber)}
                />
                <Button
                    title="Send Code"
                    onPress={() => signInWithPhoneNumber(phoneNumber)}
                />
            </>
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={(text) => setCode(text)} />
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