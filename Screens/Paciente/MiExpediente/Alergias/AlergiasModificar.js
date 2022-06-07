import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Menu, Pressable, HamburgerIcon, VStack,HStack, Text, FormControl, CheckIcon, NativeBaseProvider, Center, Box, StatusBar, Heading, Select, Button, Input} from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{marginLeft:10, marginRight:10}} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45"  fontWeight="bold">Alergías</Text>
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
    <VStack space={4} alignItems="center" marginY={4}>
      <Center w="95%" h="100">
        <HStack space="2" alignItems="center">
          <Center width={"70%"} height={"100%"} rounded="md">
            <Input multiline bg={"lightBlue.200"} placeholderTextColor="black" fontSize={"2xl"}>Paracetamol. No puedo consumir ningún medicamento con este compuesto.</Input>
          </Center>
          <Center width={"30%"} height={"100%"} rounded="md">
            <FormControl>
              <Select accessibilityLabel="Choose Service" placeholder="Alto" fontWeight={"bold"} fontSize={"lg"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }} mt="1">
                <Select.Item label="Alto" value="ux" />
                <Select.Item label="Moderado" value="web" />
                <Select.Item label="Leve" value="cross" />
              </Select>
            </FormControl>
          </Center>
        </HStack>
      </Center>
      {/*NUMERO 2*/}
      <Center w="95%" h="100">
        <HStack space="2" alignItems="center">
          <Center width={"70%"} height={"100%"} rounded="md">
            <Input multiline bg={"lightBlue.200"} placeholderTextColor="black" fontSize={"2xl"}>Paracetamol. No puedo consumir ningún medicamento con este compuesto.</Input>
          </Center>
          <Center width={"30%"} height={"100%"} rounded="md">
            <FormControl>
              <Select accessibilityLabel="Choose Service" placeholder="Alto" fontWeight={"bold"} fontSize={"lg"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }} mt="1">
                <Select.Item label="Alto" value="ux" />
                <Select.Item label="Moderado" value="web" />
                <Select.Item label="Leve" value="cross" />
              </Select>
            </FormControl>
          </Center>
        </HStack>
      </Center>
      {/*NUMERO 3 */}
      <Center w="95%" h="100">
        <HStack space="2" alignItems="center">
          <Center width={"70%"} height={"100%"} rounded="md">
            <Input multiline bg={"lightBlue.200"} placeholderTextColor="black" fontSize={"2xl"}>Paracetamol. No puedo consumir ningún medicamento con este compuesto.</Input>
          </Center>
          <Center width={"30%"} height={"100%"} rounded="md">
            <FormControl>
              <Select accessibilityLabel="Choose Service" placeholder="Alto" fontWeight={"bold"} fontSize={"lg"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }} mt="1">
                <Select.Item label="Alto" value="ux" />
                <Select.Item label="Moderado" value="web" />
                <Select.Item label="Leve" value="cross" />
              </Select>
            </FormControl>
          </Center>
        </HStack>
      </Center>
      <Button backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={() => navigation.navigate('Alergias')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
    </VStack>
    </>);}

export default function AlergiasModificar({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4}   _text={{fontWeight: "medium",color: "warmGray.50",letterSpacing: "lg"}} style={{width:"95%"}}>
            <Image marginTop={4} source={require('../../../../src/images/alergia.png')} resizeMode={"contain"} size={"2xl"} alignSelf={"center"} alt="Alergia"/>
            <Heading marginTop={4} textAlign="center" fontSize={"3xl"} >Alergias registradas del usuario</Heading>
            <Form/>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}