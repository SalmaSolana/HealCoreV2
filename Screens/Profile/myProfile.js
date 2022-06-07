import { Text } from "react-native";
import {
  Center,
  NativeBaseProvider,
  ScrollView,
  Image,
  Input,
  Box,
  StatusBar,
} from "native-base";
import React from "react";

export default function MyProfile() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" />
      <Box bg="#3f888f" width="100%" height={50}>
        <Box padding={2}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Perfil
          </Text>
        </Box>
      </Box>
      <ScrollView>
        <Center>
          <Box padding={10}>
            <Image
              source={require("../../src/images/perfil.png")}
              alt={"_profileImg"}
              style={{ width: 125, height: 125 }}
            />
          </Box>
        </Center>
        <Center>
          <Box borderWidth={1} borderRadius="xl" width="80%">
            <Box padding={5}>
              <Box padding={2}>
                <Text>Usuario</Text>
                <Input
                  variant="underlined"
                  placeholder=""
                  fontSize={14}
                  color={"gray.400"}
                />
              </Box>
              <Box padding={2}>
                <Text>Correo electrónico</Text>
                <Input
                  variant="underlined"
                  placeholder=""
                  fontSize={14}
                  color={"gray.400"}
                />
              </Box>
            </Box>

            <Box padding={1}>
              <Box
                padding={2}
                width="50%"
                alignSelf="center"
                bg="#5A5A5A"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                  textAlign: "center",
                }}
              >
                Guardar
              </Box>
            </Box>
            <Box padding={1}>
              <Box
                padding={2}
                width="50%"
                alignSelf="center"
                bg="#BFBFBF"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                  textAlign: "center",
                }}
              >
                Cerrar sesión
              </Box>
            </Box>
            <Box padding={2}></Box>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
