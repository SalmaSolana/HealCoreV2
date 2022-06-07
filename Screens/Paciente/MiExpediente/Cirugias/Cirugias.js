import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { VStack, Menu, Pressable, HamburgerIcon, Fab, HStack, Heading, FormControl, Select, CheckIcon, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Image } from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{marginLeft:10, marginRight:10}} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45"  fontWeight="bold">Cirugias</Text>
        <Opciones/>
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
            </Pressable>;}}>
        <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}onPress={()=>navigation.navigate('Configuracion')}>Configuración</Text></Menu.Item>
        <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Preguntas Frecuentes</Text></Menu.Item>
        <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"} onPress={()=>navigation.navigate('Contacto')}>Contactanos</Text></Menu.Item>
        <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Calificanos</Text></Menu.Item>
        <Menu.Item><Text fontSize={"xl"} fontWeight={"bold"}>Compártenos</Text></Menu.Item>
      </Menu>    
    </Box>;
}

function Cir(){
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [fecha, setFecha] = useState('5/5/2022');

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

  return(<>
    <Box borderWidth={3} borderRadius="xl"  borderColor="info.800" alignSelf="center"paddingTop={4} bg="white" marginTop={4} width="95%" h="90%">
      <Image source={require('../../../../src/images/Cirugias.png')} size="2xl" resizeMode='contain' alignSelf={"center"} alt={"Cirugias"}/>
      <Heading fontSize={"3xl"} textAlign="center" marginBottom={"30%"}>Cirugias Registradas</Heading>
      <Heading fontSize={"2xl"} fontStyle="italic" textAlign="center">Cirugías por las que se ha intervenido al paciente.</Heading>

      <VStack marginX={30} space={4}>
        {/*Cirugia*/}
        <HStack space={2} alignItems="center" marginTop={10}>
          <Text fontWeight={"bold"} fontSize="xl">Cirugía:</Text>
          <Input w="70%" h="100" isDisabled multiline numberOfLines={3} fontStyle={"italic"} bg={"lightBlue.200"}fontWeight={"bold"} color="black" fontSize={"2xl"}>Extracción de Vesicula Biliar</Input>
          <Icono/>
        </HStack>
        {/*Tipo */}
        <HStack space={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize="xl">Tipo:</Text>
          <FormControl w="30%">
            <Select accessibilityLabel="Choose Service" placeholder='Urgente' isDisabled fontWeight={"bold"} fontSize={"lg"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
              <Select.Item label="Programada" value="ux" />
              <Select.Item label="Urgente" value="web" />
              <Select.Item label="Ambulatoria" value="cross" />
            </Select>
          </FormControl>
        </HStack>
        {/*Fecha*/}
        <HStack alignItems={"center"}>
        <Text fontWeight={"bold"} w="65%" fontSize="xl">Fecha en que se realizó la cirugía:</Text>
          <Button isDisabled variant="outline" background={'white'} title="DatePicker" w={"35%"}  h="10" onPress={() => showMode('date')}><Text fontWeight={"bold"} fontSize="lg">{fecha}</Text></Button>
        </HStack>
        <Center>
        <Button backgroundColor="info.600" width="100%" h="20" title='MODIFICAR' onPress={()=>navigation.navigate('CirugiasModificar')}><Text fontSize={"3xl"} fontWeight="bold" color="white">MODIFICAR</Text></Button>
        </Center>
      </VStack>
      <Agregar/>
    </Box>

    {show && (<DateTimePicker testID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
  </>);
}

const Icono = () => {
  return <Box alignItems="center">
      <IconButton icon={<Icon as={FontAwesome} name="trash-o" size={5} color="black"/>} borderRadius="full" _icon={{
      color: "red.400",
      size: "md"
    }} _hover={{
      bg: "red.400"
    }} _pressed={{
      bg: "red.400"
    }} />
    </Box>;
};

const Agregar = () => {
  const navigation = useNavigation();
  return <Center marginTop={3}>
      <Box width={"100%"} height={"90"} justifyContent={"flex-end"} _dark={{
      bg: "coolGray.200:alpha.20"
    }} _light={{
      bg: "coolGray.200:alpha.20"
    }}>
        <Fab renderInPortal={false} shadow={2} size="70" backgroundColor={"info.600"} onPress={()=>navigation.navigate('CirugiasAlta')} icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
      </Box>
    </Center>;
};

export default function Cirugias({navigation}){
  return(
    <NativeBaseProvider>
      <AppBar/>
      <Cir />
    </NativeBaseProvider>
  );
}