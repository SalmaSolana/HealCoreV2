import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { VStack, HStack, Input, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Image, Stack, Button } from "native-base";
import { StyleSheet, TextInput } from "react-native";

function AppBar() {
  return <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold" style={{ marginLeft: 10 }}>
          Notas
            </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>;
}

function Form() {
  return <>
    <VStack space={"2xs"} alignItems="center">
      <Stack space="1" alignItems="center">
        <HStack alignItems="center">
          <Box borderRadius={9}>
            <Text fontWeight={"bold"} fontSize="lg" style={{ padding: 6 }}>
              Asunto:
                  </Text>
          </Box>
          <Input w={"75%"} h="80%" bg={"#d8b4fe"} placeholderTextColor="black" />

        </HStack>
      </Stack>
      <Stack >
        <HStack alignItems="center">
          <Box borderRadius={9}>
            <Text fontWeight={"bold"} fontSize="lg" style={{ padding: 6 }}>
              Cuerpo:
                  </Text>
          </Box>
        </HStack>
        <Input w={"100%"} h="55%" multiline bg={"#d8b4fe"} placeholderTextColor="black" numberOfLines={15} fontSize={"2xl"} />
      </Stack>
    </VStack>
  </>;
}

function Boton() {
  return <>
    <Center>

      <HStack alignItems="center">
        <Button backgroundColor='muted.600' title='GUARDAR' onPress={() => navigation.navigate('')} style={{ width: "120%" }}>GUARDAR</Button>
      </HStack>
    </Center>
  </>;
}

export default function NotasAlta({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Image source={require('../../../src/images/notas-anadir.png')} size="2xl" alignSelf={"center"} />
      <Box>
        <Box borderWidth={3} borderRadius="xl" borderColor="muted.500" alignSelf="center" bg="info" marginTop={"10px"} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "95%" }}>
          <Form />
          <Boton />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
