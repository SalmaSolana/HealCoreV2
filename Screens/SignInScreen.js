import {
  Box,
  Image,
  Icon,
  IconButton,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  StatusBar,
  
} from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignInForm = () => {
  const navigation = useNavigation();

  return (
    <Center w="100%">
      <Box
        safeArea
        p="2"
        py="8"
        w="100%"
        maxW="400"
        alignContent={"flex-start"}
      >
        <Heading
          size="lg"
          textAlign={"center"}
          fontSize={"30"}
          fontWeight="900"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Inicio de sesión
        </Heading>
        <VStack space={3} mt="2">
          <FormControl>
            <FormControl.Label>Correo Electrónico</FormControl.Label>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  size={6}
                  ml="4"
                  color="deepskyblue"
                />
              }
              placeholder="Correo Electrónico"
              size="xl"
              variant="rounded"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label style={{ fontSize: "40" }}>
              Contraseña
            </FormControl.Label>
            <Input
              InputLeftElement={
                <Icon
                  as={<AntDesign name="lock" />}
                  size={7}
                  ml="4"
                  color="deepskyblue"
                />
              }
              type="password"
              placeholder="Contraseña"
              size="xl"
              variant="rounded"
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Olvidaste tu contraseña?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => navigation.navigate("ContactoDeEmergia")}
          >
            Iniciar Sesión
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
export default function SignInScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center marginTop={100}>
        <Image
          source={require("../src/images/icono_v4.png")}
          size="400"
          alt="HealthCore"
        />
        <SignInForm />
        <Button
          mt="2"
          colorScheme="indigo"
          title="REGISTRARSE"
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{ width: 385 }}
        >
          Registrarme!
        </Button>
        <Button
          mt="2"
          colorScheme="indigo"
          title="REGISTRARSE"
          onPress={() => navigation.navigate("PantallaPrueba")}
          style={{ width: 385 }}
        >
          Prueba
        </Button>
        <Button
          mt="2"
          backgroundColor={"amber.600"}
          onPress={() => navigation.navigate("HomePaciente")}
          style={{ width: 385 }}
        >
          PACIENTE
        </Button>
        <Button
          mt="2"
          backgroundColor={"teal.500"}
          onPress={() => navigation.navigate("HomeDoctor")}
          style={{ width: 385 }}
        >
          DOCTOR
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
