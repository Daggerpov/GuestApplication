import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";
import auth from '@react-native-firebase/auth';

import "react-native-gesture-handler";

export default function HomeScreen ({ navigation }){
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button

                title="Logout"
                onPress={() =>
                    auth()
                        .signOut()
                        .then(() => console.log("User signed out!"))
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-end",
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
});
