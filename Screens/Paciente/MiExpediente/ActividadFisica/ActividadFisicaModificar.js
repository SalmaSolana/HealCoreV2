import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, Menu, Pressable, HamburgerIcon, HStack, Input, Text, FormControl, CheckIcon, NativeBaseProvider, Center, Box, StatusBar, Heading, Select, Button, Image} from "native-base";

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
      <VStack space={5} marginTop={4} marginBottom={4} alignItems="center">
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text  fontWeight={"bold"} fontSize="lg">Actividad:</Text>
            <Input fontWeight={"bold"} w={"75%"} h="100" multiline fontSize="xl" placeholder='Ingresa el tipo de ejercicio que realizas'></Input>
          </HStack>
        </Center>
        {/*NUMERO 2*/}
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Duración:</Text>
            <Input w="75%" size="xl" fontWeight={"bold"} fontSize="xl" placeholder='Ingresa la duración de tu entrenamiento'></Input>
          </HStack>
        </Center>
        {/*NUMERO 3 */}
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Frecuencia:</Text>
            <FormControl w="72%">
              <Select accessibilityLabel="Frecuencia" size="xl" placeholder="Frecuencia de tu entrenamiento" fontWeight={"bold"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Dos veces por semana" value="ux" />
                <Select.Item label="Tres o cuatro veces por semana" value="web" />
                <Select.Item label="Cinco o más veces por semana" value="cross" />
              </Select>
            </FormControl>
          </HStack>
        </Center>
        <Button w="95%" h="20" backgroundColor={"info.600"} marginTop={"10%"} title='GUARDAR' onPress={()=>navigation.navigate('ActividadFisica')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
      </VStack>
    </>);}

export default function ActividadFisicaModificar({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" width={"95%"} h="94%" marginTop={4} _text={{fontWeight: "medium",color: "warmGray.50",letterSpacing: "lg"}} style={{width:"95%"}}>
            <Image source={require('../../../../src/images/ActividadFisica.png')} marginTop={4} size="2xl" alignSelf={"center"} alt={"Actividad Fisica"}/>
            <Heading fontSize={"3xl"} size="2xl" textAlign="center" marginBottom={"35%"}>Modificar Actividad Física.</Heading>
            <Heading fontSize={"2xl"} size="2xl" textAlign="center">Actividad física que realiza el paciente.</Heading>
            <Form/>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}