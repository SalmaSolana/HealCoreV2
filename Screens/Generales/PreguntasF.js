import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { VStack, FormControl, Select, CheckIcon, HStack, Input, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Image, Stack, Button } from "native-base";
import { StyleSheet, TextInput } from "react-native";

function IconPreguntar () {
  return <>
<IconButton icon={<Icon as={MaterialIcons} name="expand-more"  size="15" color="black" />} />
  </>
}

function AppBar() {
  return <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold" style={{ marginLeft: 10 }}>
          Preguntas Frecuentes
            </Text>
      </HStack>

    </HStack>
  </>;
}

function Form() {
  return <>
           <Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"5px"} title='Avisos' onPress={() => navigation.navigate(<Preguntar/>)} style={{ width: "95%" }}><Text fontSize="11.70" fontStyle="italic" fontWeight="bold">¿Cómo usar la app en SITUACIÓN DE EMERGENCIA?<IconPreguntar/></Text> </Button>

<Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"5px"} title='Avisos' onPress={() => navigation.navigate(<Preguntar/>)} style={{ width: "95%" }}><Text fontSize="12" fontStyle="italic" fontWeight="bold">¿Para qué funciona el código QR?                        <IconPreguntar/></Text> </Button>

<Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"5px"} title='Avisos' onPress={() => navigation.navigate(<Preguntar/>)} style={{ width: "95%" }}><Text fontSize="12" fontStyle="italic" fontWeight="bold">¿Cómo realizo mi expediente médico?                <IconPreguntar/></Text> </Button>
<Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"5px"} title='Avisos' onPress={() => navigation.navigate(<Preguntar/>)} style={{ width: "95%" }}><Text fontSize="12" fontStyle="italic" fontWeight="bold">¿Cómo se relaciona la app con mi centro de salud?<IconPreguntar/></Text> </Button>  
<Button borderWidth={1} borderRadius="xl" borderColor="light.400" colorScheme="light.400" bg="white" marginTop={"5px"} title='Avisos' onPress={() => navigation.navigate(<Preguntar/>)} style={{ width: "95%" }}><Text fontSize="12" fontStyle="italic" fontWeight="bold">¿Puedo consultar información con algún médico?<IconPreguntar/></Text> </Button>          
  </>;
}

function Preguntar() {
  return <>
    <VStack space={4} alignItems="center" marginY={4}>
      <Input borderRadius="xl" borderColor="muted.500" placeholder={"Realiza una pregunta..."} w="85%" h="100" multiline bg={"#d8b4fe"} placeholderTextColor="grey" fontStyle={"italic"} fontSize={"1xl"} />

    </VStack>
  </>
}

function Boton() {
  return <>
    <Center>

      <HStack alignItems="center">
        <Button backgroundColor='muted.600' title='GUARDAR' onPress={() => navigation.navigate('')} style={{ width: "130%" }}><Text bold color="white"> ENVIAR </Text></Button>
      </HStack>
    </Center>
  </>;
}

export default function PreguntasF({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Text bold fontSize="19" Line color="black">
        Generales
      </Text>
      <Image marginTop={4} source={require('../../src/images/preguntas-frecuentes.png')} alt="PreguntasFrecuentes" resizeMode={"contain"} size={"lg"} alignSelf={"center"} />
      <Box>

        <Form />
        <Preguntar />
        <Boton />
      </Box>
    </NativeBaseProvider>
  );
}
