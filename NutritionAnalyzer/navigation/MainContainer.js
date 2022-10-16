import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

// Screens
import CameraScreen from './screens/CameraScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const cameraName = 'Camera';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={cameraName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === cameraName) {
                            iconName = focused ? 'camera' : 'camera-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'list' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: "#007ffe",
                    tabBarLabelStyle: {
                        "paddingBottom": 0,
                        "fontSize": 10
                    },
                    tabBarStyle: [
                        {
                          "display": "flex"
                        },
                        null
                    ]
                })}
            >
            <Tab.Screen name={cameraName} component={CameraScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}