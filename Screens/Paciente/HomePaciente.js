import { Center, HStack, VStack, NativeBaseProvider, Box, Icon, Text, StatusBar, IconButton, Button, Image, Fab } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop>
      <HStack bg="info.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Text color="white" fontSize="45" fontWeight="bold" style={{ marginLeft: 10 }}>HealthCore / Paciente</Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="2xl" color="white" />} />
        </HStack>
      </HStack>
    </Box>
  </>);
}

export default function HomePaciente({navigation}) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Box w="100%" h="100%">
        <VStack space={"xs"} alignItems="center">
          {/*Primer Fila */}
          <Center w="100%" h="30%" >
            {/*Perfil*/}
            <Button w={"90%"} background="pink.500" borderColor="info.300" borderWidth={5} borderRadius={20} onPress={()=>navigation.navigate('PacienteMiExpedienteDir')}>
              <HStack justifyContent={"center"} alignContent="center">
                {/*Icono */}
                <Center w={"30%"} h="100%">
                  <Image source={require('../../src/images/Expediente.png')} resizeMode={"contain"} size="xl" alignSelf={"center"} alt="Perfil" />
                </Center>
                {/*Texto */}
                <Center w="70%" h="100%">
                  <Box>
                    <Text bold color={"white"} fontSize="5xl" font>MI       EXPEDIENTE</Text>
                  </Box>
                </Center>
              </HStack></Button>
          </Center>
          {/*Segunda Fila */}
          <Center w="100%" h="30%">
            <HStack>
              {/*Perfil*/}
              <Center w="50%" paddingLeft={4}>
                <Button w={"90%"} h={"100%"} background={"purple.900"} borderColor="info.300" borderWidth={5} borderRadius={20} onPress={()=>navigation.navigate('PerfilPaciente')}>
                  <VStack alignItems="center" alignSelf={"center"}>
                    <Image source={require('../../src/images/perfil.png')} size="xl" resizeMode={"contain"} alignSelf={"center"} alt="Perfil" />
                    <Text bold color={"white"} fontSize={"5xl"}> Perfil</Text>
                  </VStack>
                </Button>
              </Center>

              {/*Contactos*/}
              <Center w="50%" paddingRight={4}>
                <Button w={"90%"} h={"100%"} background={"info.500"} borderColor="info.300" borderWidth={5} borderRadius={20}>
                  <VStack alignItems="center" alignSelf={"center"}>
                    <Image source={require('../../src/images/contactos.png')} size="xl" resizeMode={"contain"} alignSelf={"center"} alt="Contactos" />
                    <Text textAlign={"center"} bold color={"white"} fontSize={"3xl"}>Contactos de Emergencia</Text>
                  </VStack>
                </Button>
              </Center>
            </HStack>
          </Center>

          {/*Tercer Fila */}
          <Center w="100%" h="30%">
            <HStack>
              {/*QR*/}
              <Center w="50%" paddingLeft={4}>
                <Button w={"90%"} h={"100%"} borderColor="info.300" background={"orange.500"} borderRadius={20} borderWidth={5} onPress={()=>navigation.navigate('QR')}>
                  <VStack alignItems="center" alignSelf={"center"}>
                    <Image source={require('../../src/images/qr.png')} size="xl" resizeMode={"contain"} alignSelf={"center"} alt="Perfil" />
                    <Text bold color={"white"} fontSize={"5xl"}> Mi QR</Text>
                  </VStack>
                </Button>
              </Center>

              {/*Hospitales*/}
              <Center w="50%" paddingRight={4}>
                <Button w={"90%"} h={"100%"} background={"lime.600"} borderColor="info.300" borderRadius={20} borderWidth={5}>
                  <VStack alignItems="center" alignSelf={"center"}>
                    <Image source={require('../../src/images/hospital.png')} size="xl" resizeMode={"contain"} alignSelf={"center"} alt="Contactos" />
                    <Text bold color={"white"} fontSize={"4xl"}>Hospitales</Text>
                  </VStack>
                </Button>
              </Center>
            </HStack>
          </Center>
        </VStack>
        <Fab
          active={true}
          direction="up"
          position={"absolute"}
          size={"lg"}
          backgroundColor={"red.600"}
          onPress={() => navigation.navigate('')}
          icon={<Icon as={MaterialCommunityIcons} name="alarm-light-outline" size={20} color="white" />}>
        </Fab>
      </Box>
    </NativeBaseProvider>
  );
}