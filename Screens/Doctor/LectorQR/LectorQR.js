import React from 'react';
import useSyncExternalStore from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { HStack, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Image, StatusBar, Button } from "native-base";

function AppBar() {
  return(<>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop>
      <HStack bg="info.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Text color="white" fontSize="45"  fontWeight="bold" style={{marginLeft:10}}>Contactos de Emergencias</Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="2xl" color="white" />} />
        </HStack>
      </HStack>
    </Box>
  </>);
  }

function Form() {
  return (<>

    <Center >
      <Image source={require('../../../src/images/qrscanner.png')} style={{ width: 300, height: 300 }} />

    </Center>
  </>)
};

export default function LectorQR({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Center>
        <Text mt="5" color="grey" fontSize="30.88" fontWeight="bold" style={{ marginLeft: 10 }}>
          LECTOR CÓDIGO QR
      </Text >
       <Text mt="5" color="grey" fontSize="0.50" fontWeight="bold" style={{ marginLeft: 10 }}>  </Text >
      <Box borderWidth={1} borderColor="light.400" alignSelf="center" bg="white" marginTop={"5px"} paddingBottom={"5px"} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "85%" }}>
        <Form />
      </Box>
      <Button paddingBottom={"5px"}  mt="10" colorScheme="muted" title='ESCANEAR' onPress={() => navigation.navigate('')} style={{ width: 300 }}><Text color="white" fontSize="25.88"  >  ESCANEAR</Text ></Button>
          </Center>
      </NativeBaseProvider >
      );
}