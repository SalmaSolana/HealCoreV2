import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import { VStack, Menu, Pressable, HamburgerIcon, Fab, HStack, IconButton, Icon, Text, FormControl, CheckIcon, NativeBaseProvider, Input, Center, Box, StatusBar, Heading, Select, Button, Image} from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{marginLeft:10, marginRight:10}} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45"  fontWeight="bold">Actividad Física</Text>
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

  function Form(){
    const navigation = useNavigation();
    return(<>
      <VStack space={10} alignItems="center">
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text  fontWeight={"bold"} fontSize="lg">Actividad:</Text>
            <Input fontWeight={"bold"} w={"70%"}  h="100" isDisabled fontSize="xl">Natación</Input>
          </HStack>
        </Center>
        {/*NUMERO 2*/}
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Duración:</Text>
            <Input w="60%" size="xl" fontWeight={"bold"} isDisabled fontSize="xl">1 hora</Input>
            <Icono />
          </HStack>
        </Center>
        {/*NUMERO 3 */}
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Frecuencia:</Text>
            <FormControl w="60%">
              <Select accessibilityLabel="Frecuencia" size="xl" isDisabled placeholder="Dos veces por semana" fontWeight={"bold"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Dos veces por semana" value="ux" />
                <Select.Item label="Tres o cuatro veces por semana" value="web" />
                <Select.Item label="Cinco o más veces por semana" value="cross" />
              </Select>
            </FormControl>
          </HStack>
        </Center>
        <Button backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={()=>navigation.navigate('ActividadFisicaModificar')}><Text fontSize={"3xl"} fontWeight="bold" color="white">MODIFICAR</Text></Button>
      </VStack>
    </>);}
  
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
    return <Center marginTop={2} >
        <Box width={"100%"} height={"90"} justifyContent={"flex-end"} _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} size="70" backgroundColor={"info.600"} onPress={()=>navigation.navigate('ActividadFisicaAlta')} icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
        </Box>
      </Center>;
  };

export default function ActividadFisica({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} width="95%" h="94%">
            <Image marginTop={4} marginBottom={4} source={require('../../../../src/images/ActividadFisica.png')} size="2xl" resizeMode='contain' alignSelf={"center"} alt={"Actividad Fisica"}/>
            <Heading fontSize={"3xl"} marginBottom={"20%"} textAlign="center">Actividad Física Registrada</Heading>
            <Heading fontSize={"2xl"} fontStyle="italic" marginBottom={4} textAlign="center">Actividad Física que realiza el paciente.</Heading>
            <Form/>
            <Agregar />
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}