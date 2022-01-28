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
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import {
    LoginManager,
    AccessToken,
} from "react-native-fbsdk-next"; //Facebook

import secrets from '../secrets';

GoogleSignin.configure({
    webClientId: secrets.google_client_id,
});

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onFooterLinkPress = () => {
        navigation.navigate("Registration");
    };

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions([
            "public_profile",
            "email",
        ]);

        if (result.isCancelled) {
            throw "User cancelled the login process";
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw "Something went wrong obtaining access token";
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(
            data.accessToken
        );

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    function onLoginPress () {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.error(error); // this doesn't work in catching the errors
            });

    }

    // const FacebookButton = ({ onPress, title }) => (
    //     <TouchableOpacity onPress={onPress} style={styles.FacebookContainer}>
    //         <Text style={styles.appButtonText}>{title}</Text>
    //     </TouchableOpacity>
    // );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonFacebookStyle}
                activeOpacity={0.5}
                onPress={() =>
                    onFacebookButtonPress().then(() =>
                        // console.log("Signed in with Facebook!");
                        navigation.navigate("Home")
                    )
                }
            >
                <Image
                    source={{
                        uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png",
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
            </TouchableOpacity>

            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() =>
                    onGoogleButtonPress().then(() =>
                        // console.log("Signed in with Google!")
                        navigation.navigate("Home")
                    )
                }
            />
            <Button
                title="Phone Number Sign In"
                onPress={() => navigation.navigate("PhoneCodeConfirmation")}
            />

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
    buttonFacebookStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#485a96",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: "stretch",
    },
    buttonTextStyle: {
        color: "#fff",
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: "#fff",
        width: 1,
        height: 40,
    },
});