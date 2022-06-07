import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { VStack, Menu, Input, Pressable, HamburgerIcon, ScrollView, HStack, Heading, FormControl, Select, CheckIcon, Button, Text, NativeBaseProvider, Center, Box, StatusBar, Image } from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{ marginLeft: 10, marginRight: 10 }} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45" fontWeight="bold">Cirugias</Text>
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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [fecha, setFecha] = useState('Seleccionar');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setFecha(fDate);
  }


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  return (<>
    <ScrollView>
      <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" paddingTop={4} bg="white" marginTop={4} width="95%" paddingBottom={10}>
        <Image source={require('../../../../src/images/Cirugias.png')} size="2xl" resizeMode='contain' alignSelf={"center"} alt={"Cirugias"} />
        <Heading fontSize={"3xl"} textAlign="center" marginBottom={"30%"}>Registro de Cirugías</Heading>
        <Heading fontSize={"2xl"} fontStyle="italic" textAlign="center">Registra aquellas cirugias por las que hayas sido intervenido</Heading>

        <VStack marginX={30} space={4}>
          {/*Cirugia*/}
          <HStack space={2} alignItems="center" marginTop={10}>
            <Text fontWeight={"bold"} fontSize="xl">Cirugía:</Text>
            <Input w="80%" h="100" multiline numberOfLines={3} fontStyle={"italic"} bg={"lightBlue.200"} fontWeight={"bold"} color="black" fontSize={"2xl"} placeholder="Describe aquí..."></Input>
          </HStack>
          {/*Tipo */}
          <HStack space={2} alignItems={"center"}>
            <Text fontWeight={"bold"} fontSize="xl">Tipo:</Text>
            <FormControl w="55%">
              <Select accessibilityLabel="Choose Service" placeholder='Selecciona una opción' fontWeight={"bold"} fontSize={"lg"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Programada" value="ux" />
                <Select.Item label="Urgente" value="web" />
                <Select.Item label="Ambulatoria" value="cross" />
              </Select>
            </FormControl>
          </HStack>
          {/*Fecha*/}
          <HStack alignItems={"center"}>
            <Text fontWeight={"bold"} w="30%" fontSize="xl">Fecha en que se realizó la cirugía:</Text>
            <Button variant="outline" background={'white'} title="DatePicker" w={"35%"} h="10" onPress={() => showMode('date')}><Text fontWeight={"bold"} fontSize="lg">{fecha}</Text></Button>
          </HStack>
          <Center>
            <Button backgroundColor="info.600" width="100%" h="20" marginTop={5} onPress={() => navigation.navigate('Cirugias')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
          </Center>
        </VStack>
      </Box>
    </ScrollView>

    {show && (<DateTimePicker testID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
  </>);
}

export default function CirugiasAlta({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Cir />
    </NativeBaseProvider>
  );
}