import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, VStack, Input, Menu, Pressable, HamburgerIcon, HStack, Text, Radio, NativeBaseProvider, Center, Box, StatusBar, Heading, Button, ScrollView } from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{ marginLeft: 10, marginRight: 10 }} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45" fontWeight="bold">Peso y Estatura</Text>
        <Opciones />
      </Box>
    </Box>
  </>);
}

function Opciones() {
  const navigation = useNavigation();
  return <Box>
    <Menu w="250" defaultIsOpen={false} trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
        <HamburgerIcon marginTop={2} color={"white"} size={"xl"} />
      </Pressable>;
    }}>
      <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"} onPress={() => navigation.navigate('Configuracion')}>Configuración</Text></Menu.Item>
      <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Preguntas Frecuentes</Text></Menu.Item>
      <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"} onPress={() => navigation.navigate('Contacto')}>Contactanos</Text></Menu.Item>
      <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Calificanos</Text></Menu.Item>
      <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Compártenos</Text></Menu.Item>
    </Menu>
  </Box>;
}

function Form() {
  return (<>
    <VStack space={7}>
      <Center w="95%">
        <HStack space="2" alignItems="center">
          <Text fontWeight={"bold"} fontSize="lg">Peso:</Text>
          <Input multiline fontWeight={"bold"} w={"60%"} h="50" isDisabled fontSize="xl">Exprese en Kg</Input>
        </HStack>
      </Center>
      <Center w="95%">
        <HStack space="2" alignItems="center">
          <Text fontWeight={"bold"} fontSize="lg">Estatura:</Text>
          <Input multiline fontWeight={"bold"} w={"60%"} h="50" isDisabled fontSize="xl">Exprese en Cm</Input>
        </HStack>
      </Center>
      <Button alignSelf={"center"} backgroundColor="info.600" width="85%" h="50" title='MODIFICAR' onPress={() => navigation.navigate('IncidentesRecientesModificar')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
    </VStack>
  </>);
}

function FormPesoIdeal() {
  const [value, setValue] = React.useState("one");
  return (<>
    <Heading fontSize={"2xl"} marginBottom={4} textAlign="center" fontStyle="italic" marginTop={3}>Peso Ideal</Heading>
    <Center>
        <HStack display="flex" flexDirection="row" alignItems={"center"} marginBottom={3} space={1}>
          <Text fontWeight={"bold"} fontSize={"xl"} marginRight={3} marginTop={4}>Sexo:</Text>
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => { setValue(nextValue); }}>
            <HStack marginTop={4} alignItems={"center"}>
              <Radio value="one" my={1} size={"lg"}><Text fontSize={"2xl"} marginRight={5}>Femenino</Text></Radio>
              <Radio value="two" my={1} size={"lg"}><Text fontSize={"2xl"}>Masculino</Text></Radio>
            </HStack>
          </Radio.Group>
        </HStack>
      </Center>
    <Button marginTop={5} alignSelf={"center"} backgroundColor="info.600" width="85%" h="50" title='MODIFICAR' onPress={() => navigation.navigate('IncidentesRecientesModificar')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
  </>);
}


export default function PesoEstatura({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <ScrollView>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} paddingBottom={4} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "95%" }}>
            <Image source={require('../../../../src/images/PesoyEstatura.png')} size="2xl" resizeMode='contain' alignSelf={"center"} alt="PesoEstatura" />
            <Heading fontSize={"2xl"} fontStyle="italic" marginBottom={4} textAlign="center">Registro Estatura y Peso</Heading>
            <Form />
          </Box>
        </Box>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} paddingBottom={4} _text={{ fontWeight: "medium", color: "warmGray.50", letterSpacing: "lg" }} style={{ width: "95%" }}>
            <FormPesoIdeal />
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}