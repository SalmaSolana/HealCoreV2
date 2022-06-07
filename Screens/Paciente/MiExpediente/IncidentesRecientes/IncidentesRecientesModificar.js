import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, Menu, Pressable, HamburgerIcon, VStack, HStack, Text, Radio, FormControl, CheckIcon, NativeBaseProvider, Input, Center, Box, StatusBar, Heading, Select, Button, Image } from "native-base";
import { Platform } from 'react-native';

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{ marginLeft: 10, marginRight: 10 }} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45" fontWeight="bold">Incidentes Recientes</Text>
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
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");
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
      <VStack space={10} alignItems="center">
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <VStack alignItems="center">
              <Text fontWeight={"bold"} fontSize="lg">Descripción del</Text>
              <Text fontWeight={"bold"} fontSize="lg">Accidente:</Text>
            </VStack>
            <Input fontWeight={"bold"} w={"60%"} h="81" fontSize="xl">Choque en automóvil</Input>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Nivel de gravedad:</Text>
            <FormControl w="50%">
              <Select accessibilityLabel="Frecuencia" size="xl" placeholder="Alto" fontWeight={"bold"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Leve" value="ux" />
                <Select.Item label="Medio" value="web" />
                <Select.Item label="Alto" value="cross" />
              </Select>
            </FormControl>
          </HStack>
        </Center>
        <Center>
        <HStack display="flex" flexDirection="row" alignItems={"center"} marginBottom={3} space={1}>
          <Text fontWeight={"bold"} fontSize={"xl"} marginRight={3} marginTop={4}>¿Se atendio?:</Text>
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => { setValue(nextValue); }}>
            <HStack marginTop={4} alignItems={"center"}>
              <Radio value="one" my={1} size={"lg"}><Text fontSize={"2xl"} marginRight={5}>Si</Text></Radio>
              <Radio value="two" my={1} size={"lg"}><Text fontSize={"2xl"}>No</Text></Radio>
            </HStack>
          </Radio.Group>
        </HStack>
      </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">¿Cómo?:</Text>
            <Input fontWeight={"bold"} w={"70%"} h="90" fontSize="xl">Perforación de torax, rehabilitación completa</Input>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Fecha del Incidente:</Text>
            <Button variant="outline" background={'white'} title="DatePicker" w={"35%"} h="10" onPress={() => showMode('date')}><Text fontWeight={"bold"} fontSize="lg">{fecha}</Text></Button>
          </HStack>
        </Center>
        <Button backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={() => navigation.navigate('IncidentesRecientes')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
      </VStack>

      {show && (<DateTimePicker testID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}

    </ScrollView>
  </>);
}

export default function IncidentesRecientes({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Box>
        <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} width="95%" h="94%">
          <Image marginTop={4} marginBottom={4} source={require('../../../../src/images/IncidentesRecientes.png')} size="xl" resizeMode='contain' alignSelf={"center"} alt={"Actividad Fisica"} />
          <Heading fontSize={"4xl"} marginBottom={"5%"} textAlign="center">Registre aquellos incidentes que ha sufrido</Heading>
          <Heading fontSize={"2xl"} fontStyle="italic" marginBottom={4} textAlign="center">Incidentes del paciente</Heading>
          <Form />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}