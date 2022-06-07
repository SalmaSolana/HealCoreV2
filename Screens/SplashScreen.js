import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ()=>{

    const navigation =useNavigation;

    <View>
        <TouchableOpacity
            onPress={navigation.navigate("SignIn")}
            style={{
                backgroundColor: "purple",
                padding: 10,
                marginTop: "20%",
                alignSelf: "center",
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize:15,
                    textAlign: "center",
                    color: "white",
                }}
            >Inicio de sesión</Text>
        </TouchableOpacity>
    </View>
}
export default SplashScreen;