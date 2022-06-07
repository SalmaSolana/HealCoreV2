import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, Menu, Pressable, HamburgerIcon, Input,Image, Text, NativeBaseProvider, Center, Box, StatusBar, Heading, Button} from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{marginLeft:10, marginRight:10}} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45"  fontWeight="bold">Enfermedades Cronicas</Text>
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
    return(<>
      <VStack space={4} alignItems="center" marginY={4}>
        <Input  placeholder={"Ingresa el Nombre de la enfermedad y una breve descripción"}  w="85%" h="100" multiline bg={"lightBlue.200"} placeholderTextColor="grey" fontStyle={"italic"} fontSize={"2xl"}/>
        <Input  placeholder={"Ingresa el Nombre de la enfermedad y una breve descripción"}  w="85%" h="100" multiline bg={"lightBlue.200"} placeholderTextColor="grey" fontStyle={"italic"}  fontSize={"2xl"}/>
        <Input  placeholder={"Ingresa el Nombre de la enfermedad y una breve descripción"}  w="85%" h="100" multiline bg={"lightBlue.200"} placeholderTextColor="grey" fontStyle={"italic"}  fontSize={"2xl"}/>
        <Input  placeholder={"Ingresa el Nombre de la enfermedad y una breve descripción"}  w="85%" h="100" multiline bg={"lightBlue.200"} placeholderTextColor="grey" fontStyle={"italic"}  fontSize={"2xl"}/>
      </VStack></>
    );
  }

export default function EnfermedadesCronicasAlta({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={"5px"} _text={{fontWeight: "medium",color: "warmGray.50",letterSpacing: "lg"}} style={{width:"95%"}}>
          <Image marginTop={4} source={require('../../../../src/images/EnfermedadesCronicas.png')} resizeMode={"contain"} size={"2xl"} alignSelf={"center"} alt="EnfermedadesCronicas"/>
            <Heading marginTop={4} textAlign="center" fontSize={"3xl"}>Registra todas aquellas enfermedades crónicas que posees.</Heading>
            <Form/>
            <Center>
            <Button marginBottom={4} backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={()=>navigation.navigate('EnfermedadesCronicas')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
            </Center>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}