import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, VStack, HStack, IconButton, Icon, Text, FormControl, CheckIcon, NativeBaseProvider, Center, Switch, Box, StatusBar, Radio, Heading, Select, Stack, Button } from "native-base";
import { TextInput, StyleSheet } from 'react-native';

function AppBar() {
  return <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" px="0" py="1" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold" style={{ marginLeft: 10 }}>General</Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>;
}

function Form() {
  return (<>
    <VStack space={1} alignItems="center">
      <HStack space="1" alignItems="center">
        <Text color="black" fontSize="20" style={{ marginLeft: 10 }}>Idioma:  </Text>
        <RadioButton />
      </HStack>
      <HStack alignItems="center">
        <Switch trackColor={{ false: "black", true: "gray" }} />
        <Text color="black" fontSize="15" style={{ marginLeft: 10 }}>Modo oscuro</Text>
      </HStack>
    </VStack></>

  );
}

function FormCuenta() {
  return (<>
    <VStack space={1} alignItems="center">
      <Button colorScheme="muted" title='CAMBIAR CONTRASEÑA' onPress={() => navigation.navigate('')} style={{ width: "85%" }}>CAMBIAR CONTRASEÑA</Button>
      <Button colorScheme="muted" title='CERRAR SESION' onPress={() => navigation.navigate('')} style={{ width: "85%" }}>CERRAR SESIÓN</Button>
      <Button colorScheme="muted" title='ELIMINAR CUENTA' onPress={() => navigation.navigate('')} style={{ width: "85%" }}>ELIMINAR CUENTA</Button>

    </VStack></>

  );
}

const RadioButton = () => {
  const [value, setValue] = React.useState("one");
  return <Radio.Group name="myRadioGroup" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}>
    <HStack space="8" alignItems="center">
      <Radio value="Español" my={1}>
        Español
        </Radio>
      <Radio value="Ingles" my={1}>
        Inglés
        </Radio>
    </HStack>
  </Radio.Group>;
};


export default function Configuracion({ navigation }) {

  return (
    <NativeBaseProvider>
      <AppBar />
      <Image source={require('../../src/images/configuracion.png')} size="2xl" alignSelf={"center"} />
      <Box>
        <Box borderWidth={1} borderRadius="xl" borderColor="light.400" alignSelf="center" bg="white" marginTop={"5px"} paddingBottom={"5px"} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "95%" }}>
          <Heading color="black" fontSize="25" > General</Heading>
          <Form />
          <Center>
          </Center>
        </Box>
      </Box>
<VStack space={1} alignItems="center">
      <Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"6px"} paddingBottom={"5px"} title='Avisos' onPress={() => navigation.navigate('AvisosLegales')} style={{ width: "95%" }}><Text fontSize="20" fontWeight="bold"> Avisos Legales</Text></Button>
</VStack>
      <Box>
        <Box borderWidth={1} borderRadius="xl" borderColor="light.400" alignSelf="center" bg="white" marginTop={"5px"} paddingBottom={"5px"} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "95%" }}>
          <Heading color="black" fontSize="25" > Cuenta</Heading>
          <FormCuenta />
          <Center>
          </Center>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
