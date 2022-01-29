/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image, TouchableOpacity, Button, View, Text, } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/defaults/ModalScreen';
import NotFoundScreen from "../screens/defaults/NotFoundScreen";
// import TabOneScreen from '../screens/defaults/TabOneScreen';
// import TabTwoScreen from '../screens/defaults/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, DrawerParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import auth from "@react-native-firebase/auth";

import LoginScreen from '../screens/LoginScreen';
import PhoneCodeConfirmationScreen from "../screens/PhoneConfirm";
import RegistrationScreen from '../screens/RegistrationScreen';

import HomeScreen from "../screens/HomeScreen";
import EventsPage from "../screens/pages/Events";
import ReservationsPage from '../screens/pages/Reservations';
import PhotosPage from '../screens/pages/Photos';
import ProfilePage from '../screens/pages/Profile';

// import { decode, encode } from "base-64";
// if (!global.btoa) {
//     global.btoa = encode;
// }
// if (!global.atob) {
//     global.atob = decode;
// }

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function Home() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                options={{ drawerLabel: "Home" }}
                component={firstScreenStack}
            />
            <Drawer.Screen
                name="Events"
                options={{ drawerLabel: "Events" }}
                component={secondScreenStack}
            />
            <Drawer.Screen
                name="Reservations"
                options={{ drawerLabel: "Reservations" }}
                component={thirdScreenStack}
            />
            <Drawer.Screen
                name="Photos"
                options={{ drawerLabel: "Photos" }}
                component={fourthScreenStack}
            />
            <Drawer.Screen
                name="Profile"
                options={{ drawerLabel: "Profile" }}
                component={fifthScreenStack}
            />
        </Drawer.Navigator>
    );
}

function RootNavigator() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState(null);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Screen name="Home"
                component={Home}>
                </Stack.Screen>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen
                        name="Registration"
                        component={RegistrationScreen}
                    />
                    <Stack.Screen
                        name="PhoneCodeConfirmation"
                        component={PhoneCodeConfirmationScreen}
                    />
                </>
            )}
        </Stack.Navigator>
    );
}
const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{
                        uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
                    }}
                    style={{
                        width: 25,
                        height: 25,
                        marginLeft: 5,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

function secondScreenStack ({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Events"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Events" component={EventsPage}></Stack.Screen>
        </Stack.Navigator>
    );
}

function thirdScreenStack ({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Reservations"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Reservations"
                component={ReservationsPage}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

function fourthScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Photos"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Photos" component={PhotosPage}></Stack.Screen>
        </Stack.Navigator>
    );
}

function fifthScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profile" component={ProfilePage}></Stack.Screen>
        </Stack.Navigator>
    );
}

{
    /* { <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
