import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, HStack, Menu, Pressable, HamburgerIcon, Text, FormControl, CheckIcon, NativeBaseProvider, Input, Center, Box, StatusBar, Heading, Select, Button, Image} from "native-base";

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{marginLeft:10, marginRight:10}} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45"  fontWeight="bold">Medicación Activa</Text>
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
          <VStack alignItems="center">
            <Text  fontWeight={"bold"} fontSize="lg">Nombre del</Text>            
            <Text  fontWeight={"bold"} fontSize="lg">medicamento:</Text>
          </VStack>  
            <Input multiline fontWeight={"bold"} w={"60%"} h="60" fontSize="xl">Ej. Paracetamol</Input>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">            
            <Text  fontWeight={"bold"} fontSize="lg">Motivo:</Text>  
            <Input fontWeight={"bold"} w={"70%"}  h="70" multiline fontSize="xl">Ej. Medicamento Pos Cirugia</Input>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Vía de administración:</Text>
            <FormControl w="50%">
              <Select accessibilityLabel="Frecuencia" size="xl" placeholder="Seleccionar" fontWeight={"bold"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Oral" value="1" />
                <Select.Item label="Intramuscular" value="2" />
                <Select.Item label="Intravenosa" value="3" />
                <Select.Item label="Subcutanea" value="4" />
                <Select.Item label="Inhalatoria" value="5" />
                <Select.Item label="Trandermica" value="6" />
                <Select.Item label="Nasal" value="7" />
                <Select.Item label="Oftalmica" value="8" />
                <Select.Item label="Ótica" value="9" />
                <Select.Item label="Tópica" value="10" />
                <Select.Item label="Rectal" value="11" />
                <Select.Item label="Vaginal" value="12" />
              </Select>
            </FormControl>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">
            <Text fontWeight={"bold"} fontSize="lg">Tipo de medicamento:</Text>
            <FormControl w="50%">
              <Select accessibilityLabel="Frecuencia" size="xl" placeholder="Seleccionar" fontWeight={"bold"} _selectedItem={{ bg: "black", endIcon: <CheckIcon size={3} /> }}>
                <Select.Item label="Capsula" value="1" />
                <Select.Item label="Jarabe" value="2" />
                <Select.Item label="Grajea" value="3" />
                <Select.Item label="Suspención" value="4" />
                <Select.Item label="Aerosol o Nebulizador" value="5" />
                <Select.Item label="Polvo en seco" value="6" />
                <Select.Item label="Parches" value="7" />
                <Select.Item label="Gotas" value="8" />
                <Select.Item label="Pomada" value="9" />
                <Select.Item label="Supositorio" value="10" />
                <Select.Item label="Inyección" value="11" />
                <Select.Item label="Óvulos" value="12" />
              </Select>
            </FormControl>
          </HStack>
        </Center>
        <Center w="95%">
          <HStack space="2" alignItems="center">            
            <Text  fontWeight={"bold"} fontSize="lg">Dosis:</Text>  
            <Input fontWeight={"bold"} w={"70%"}  h="60" multiline fontSize="xl">Ej. 20ml al día</Input>
          </HStack>
        </Center>
        <Button backgroundColor="info.600" width="85%" h="20" title='MODIFICAR' onPress={()=>navigation.navigate('MedicacionActiva')}><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
      </VStack>
       </>);}

export default function MedicacionActiva({navigation}){
    return(
      <NativeBaseProvider>
        <AppBar/>
        <Box>
          <Box borderWidth={3} borderRadius="xl" borderColor="info.800" alignSelf="center" bg="white" marginTop={4} width="95%" h="94%">
            <Image marginTop={4} marginBottom={4} source={require('../../../../src/images/MedicacionActiva.png')} size="xl" resizeMode='contain' alignSelf={"center"} alt={"Actividad Fisica"}/>
            <Heading fontSize={"4xl"} marginBottom={"5%"} textAlign="center">Medicamentos y tratamientos que lleva el paciente actualmente</Heading>
            <Heading fontSize={"2xl"} fontStyle="italic" marginBottom={4} textAlign="center">Medicina del paciente</Heading>
            <Form/>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}