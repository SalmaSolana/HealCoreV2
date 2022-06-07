import React from 'react'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { VStack, Menu, Pressable, HamburgerIcon, Fab, HStack, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading,Stack, Button, Image} from "native-base";

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
    const navigation = useNavigation();
    return(<><VStack space={1} alignItems="center">
        <Center w="100%" h="140">
            <HStack alignItems="center">
              <Center width={"80%"} height={"100%"} rounded="md">
                <Box borderRadius={9} bg="lightBlue.200" w={"90%"} h={"90%"}>
                  <Text fontWeight={"bold"} fontSize="2xl" style={{ padding: 10 }}>
                    Diabetes. Recién detectada hace 2 meses.
                  </Text>
                </Box>
              </Center>
              <Center width={"10%"} height={"100%"} >
                <Icono />
              </Center>
            </HStack>
        </Center>
        {/*NUMERO 2*/}
        <Center w="100%" h="140">
            <HStack alignItems="center">
              <Center width={"80%"} height={"100%"} rounded="md">
                <Box borderRadius={9} bg="lightBlue.200" w={"90%"} h={"90%"}>
                  <Text fontWeight={"bold"} fontSize="2xl" style={{ padding: 10 }}>
                  Cáncer de pulmón. Últimos meses de tratamiento.
                  </Text>
                </Box>
              </Center>
              <Center width={"10%"} height={"100%"} >
                <Icono />
              </Center>
            </HStack>
        </Center>
        {/*NUMERO 3 */}
        <Center w="100%" h="140">
            <HStack alignItems="center">
              <Center width={"80%"} height={"100%"} rounded="md">
                <Box borderRadius={9} bg="lightBlue.200" w={"90%"} h={"90%"}>
                  <Text fontWeight={"bold"} fontSize="2xl" style={{ padding: 10 }}>
                  Alzheimer. Nada grave.
                  </Text>
                </Box>
              </Center>
              <Center width={"10%"} height={"100%"} >
                <Icono />
              </Center>
            </HStack>
        </Center>
        <Button backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={()=>navigation.navigate('EnfermedadesCronicasModificar')}><Text fontSize={"3xl"} fontWeight="bold" color="white">MODIFICAR</Text></Button>
      </VStack>
      </>
    );
  }
  
  const Icono = () => {
    return <Box alignItems="center">
        <IconButton icon={<Icon as={FontAwesome} name="trash-o" size={8} color="black"/>} borderRadius="full" _icon={{
        color: "red.400",
        size: "md"
      }} _hover={{
        bg: "red.400"
      }} _pressed={{
        bg: "red.400"
      }} />
      </Box>;
  };

  const NewButton = () => {
    const navigation = useNavigation();
    return <Center marginTop={2}>
        <Box width={"100%"} height={"90"} justifyContent={"flex-end"} _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} size="70" backgroundColor={"info.600"} onPress={()=>navigation.navigate('EnfermedadesCronicasAlta')} icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
        </Box>
      </Center>;
  };

export default function EnfermedadesCronicas({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} _text={{fontWeight: "medium",color: "warmGray.50",letterSpacing: "lg"}} style={{width:"95%"}}>
            <Image marginTop={4} source={require('../../../../src/images/EnfermedadesCronicas.png')} resizeMode={"contain"} size={"2xl"} alignSelf={"center"} alt="EnfermedadesCronicas"/>
            <Heading marginTop={4} marginBottom={2} textAlign="center" fontSize={"3xl"} >Enfermedades registradas del paciente.</Heading>
            <Form/>
            <NewButton />
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}