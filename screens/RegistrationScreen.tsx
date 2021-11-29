import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RegistrationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Registration Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
