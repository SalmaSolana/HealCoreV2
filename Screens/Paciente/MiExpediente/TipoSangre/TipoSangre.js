import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, ScrollView, Menu, Pressable, HamburgerIcon, Image, Text, FormControl, Radio, CheckIcon, NativeBaseProvider, Center, Box, StatusBar, Heading, Select, Button } from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{ marginLeft: 10, marginRight: 10 }} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45" fontWeight="bold">Tipo de Sangre</Text>
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

function Cir() {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");
  return (<>
    <ScrollView>
      <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" paddingTop={4} bg="white" marginTop={4} width="95%" paddingBottom={10}>
        <Image source={require('../../../../src/images/TipoDeSangre.png')} size="2xl" resizeMode='contain' alignSelf={"center"} alt={"Cirugias"} />
        <Heading fontSize={"3xl"} textAlign="center" marginBottom={"30%"}>Tipo de Sangre del Paciente</Heading>
        <Heading fontSize={"2xl"} fontStyle="italic" textAlign="center">Registra el tipo de sangre según corresponda</Heading>

        <VStack marginX={30} space={4} marginTop={4} alignItems="center">
          <FormControl w="80%">
            <Select size={"xl"} textAlign="center" accessibilityLabel="Choose Service" placeholder='Selecciona tu tipo de sangre' placeholderTextColor={"black"} fontWeight={"bold"} fontSize={"2xl"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
              <Select.Item label="A" value="A" />
              <Select.Item label="B" value="B" />
              <Select.Item label="O" value="O" />
              <Select.Item label="AB" value="AB" />
            </Select>
          </FormControl>
          {/*Fecha*/}
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => { setValue(nextValue); }}>
            <Radio value="Positivo" my={1} size={"lg"}><Text fontSize={"4xl"}>+ Positivo</Text></Radio>
            <Radio value="Negativo" my={1} size={"lg"}><Text fontSize={"4xl"}>- Negativo</Text></Radio>
          </Radio.Group>
        </VStack>
        <Center>
          <Button backgroundColor="info.600" width="90%" h="20" marginTop={5} onPress={() => navigation.navigate('PacienteMiExpedienteDir')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
        </Center>
      </Box>
    </ScrollView>
  </>);
}

export default function TipoSangre({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Cir />
    </NativeBaseProvider>
  );
}