import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import auth from '@react-native-firebase/auth';


export default class HomeScreen extends React.Component {
    render() {
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
