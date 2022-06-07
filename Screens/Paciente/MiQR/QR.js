import React from 'react';
import useSyncExternalStore from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { HStack, IconButton, Icon, Text, Image, NativeBaseProvider, Center, Box, StatusBar } from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop />
    <HStack bg="info.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <Text color="white" fontSize="40" fontWeight="bold" style={{ marginLeft: 10 }}>Mi código QR</Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="xl" color="white" />} />
      </HStack>
    </HStack>
  </>);
}

function Form() {
  return (<><Box>
    <Center>

      <Image source={require('../../../src/images/qr-paciente.png')} alt = {"Codigo QR Paciente"} style={{ width: 300, height: 300 }} />

    </Center>
  </Box>
  </>);
}

export default function QR({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Center>
        <Text color="grey" fontSize="15" fontWeight="bold" style={{ marginLeft: 10 }}>
        </Text >
        <Text color="grey" fontSize="27.5" fontWeight="bold" style={{ marginLeft: 10 }}>Expediente Digital Generado</Text>
      </Center>
      <Text color="grey" fontSize="15" fontWeight="bold" style={{ marginLeft: 10 }}>
      </Text >
      <Box borderWidth={1} borderColor="light.400" alignSelf="center" bg="white" marginTop={"5px"} paddingBottom={"5px"} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "85%" }}>
        <Form />
      </Box>
      <Text color="grey" fontSize="15" fontWeight="bold" style={{ marginLeft: 10 }}>
      </Text >
      <Text color="grey" style={{ marginLeft: 10 }} fontSize="15"  ></Text>
      <HStack >
      
        <IconButton icon={<Icon as={MaterialIcons} name="report-problem" size="6xl" color="yellow.400" />} />

        <Text color="grey" style={{ marginLeft: 10 }} fontSize="14"  >Tu código QR es personal, no lo compartas con nadie que no sea tu familia, persona cercana a ti, o al personal médico calificado.</Text>


      </HStack>

    </NativeBaseProvider>
  );
}
