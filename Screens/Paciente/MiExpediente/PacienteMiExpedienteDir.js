import React, { useState } from 'react';
import { Box, Button, Text, NativeBaseProvider, Radio, StatusBar, HStack, Center, Image, VStack, Input, Pressable, Menu, HamburgerIcon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

function AppBar() {
  return (<>
    <StatusBar bg="#3700B3" barStyle="light-content" alignItems={"center"} />
    <Box h="8%" bg={"info.600"}>
      <Box paddingTop={2} style={{ marginLeft: 10, marginRight: 10 }} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
        <Text color="white" fontSize="45" fontWeight="bold">Mi Expediente</Text>
        <Opciones />
      </Box>
    </Box>
    <Box h="5%" bg={"info.500"}>
      <Box paddingTop={2} paddingX={3} display="flex" flexDirection="row" justifyContent="space-between">
        <Text style={{ color: "white" }} fontWeight={"bold"} fontSize={"2xl"}>Frcas69</Text>
        <Text style={{ color: "white" }} fontWeight={"bold"} fontSize={"2xl"}>Frcasgod69@gmail.com</Text>
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

function Personales() {
  const [value, setValue] = React.useState("one");
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
    <ScrollView h="100%">
      <Center w="100%" h="99.5%" paddingTop={4}>
        <Box w="95%" h="100%" borderWidth={4} borderColor={"blue.900"} alignItems="center" borderRadius={12}>
          <Box w="90%" borderBottomWidth={2} borderBottomColor={"lightBlue.300"} alignItems="center">
            <Text letterSpacing={"2xl"} alignSelf={"center"} fontSize={"5xl"}>Datos Personales</Text>
          </Box>
          <Box alignItems={"center"} marginTop={4}>
            <Image size={150} resizeMode={"contain"} borderRadius={100} source={require("../../../src/images/perfil.png")} alt={"Perfil"} />
          </Box>
          <Box w={"100%"} marginTop={4} borderColor="blue.800" h={"1"} borderWidth={3}></Box>
          <Box name="formulario" marginTop={3} paddingBottom={3} h="54%">
            <VStack w="100%" h="100%" space={2}>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Nombre:</Text>
                <Input size={"2xl"} w={"76%"} borderWidth={2} variant="round" placeholder="Nombre" />
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Apellido Paterno:</Text>
                <Input size={"2xl"} w={"61%"} borderWidth={2} variant="round" placeholder="Apellido Paterno" />
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Apellido Materno:</Text>
                <Input size={"2xl"} w={"60%"} borderWidth={2} variant="round" placeholder="Apellido Materno" />
              </HStack>
              <HStack display="flex" flexDirection="row" alignItems={"center"} marginBottom={3} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"} marginRight={3} marginTop={4}>Sexo:</Text>
                <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => { setValue(nextValue); }}>
                  <HStack marginTop={4} alignItems={"center"}>
                    <Radio value="one" my={1} size={"lg"}><Text fontSize={"2xl"} marginRight={5}>Femenino</Text></Radio>
                    <Radio value="two" my={1} size={"lg"}><Text fontSize={"2xl"}>Masculino</Text></Radio>
                  </HStack>
                </Radio.Group>
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>NSS:</Text>
                <Input size={"2xl"} w={"83%"} borderWidth={2} variant="round" placeholder="Numero de seguro social" />
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Fecha de Nacimineto:</Text>
                <Button variant="outline" background={'white'} title="DatePicker" w={"35%"} h="10" onPress={() => showMode('date')}><Text fontWeight={"bold"} fontSize="lg">{fecha}</Text></Button>
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>CURP:</Text>
                <Input size={"2xl"} w={"80%"} borderWidth={2} variant="round" placeholder="CURP" />
              </HStack>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Teléfono:</Text>
                <Input size={"2xl"} w={"75%"} borderWidth={2} variant="round" placeholder="Numero de teléfono" />
              </HStack>
            </VStack>
            <Button marginTop={6} backgroundColor="info.600" h="20"><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
          </Box>
        </Box>
      </Center>
    </ScrollView>
    {show && (<DateTimePicker testID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
  </>);
}

function Direccion() {
  return (<>
    <ScrollView h="100%">
      <Center w="100%" h="100%" paddingTop={5}>
        <Box w="95%" h="100%" borderWidth={4} borderColor={"blue.900"} alignItems="center" paddingBottom={4} borderRadius={12}>
          <Box w="90%" borderBottomWidth={2} borderBottomColor={"lightBlue.300"} alignItems="center">
            <Text letterSpacing={"2xl"} alignSelf={"center"} fontSize={"5xl"}>Dirección</Text>
          </Box>
          <Box alignItems={"center"} marginTop={4}>
            <Image size={150} resizeMode={"contain"} borderRadius={100} source={require("../../../src/images/perfil.png")} alt={"Perfil"} />
          </Box>

          <Box w={"100%"} marginTop={8} borderColor="blue.800" h={"1"} borderWidth={3}></Box>

          <Box name="formulario" h="80%" marginTop={3}>
            <VStack w="100%" space={4} marginTop={1}>
              <HStack w={"95%"} alignItems={"center"} space={1}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Calle:</Text>
                <Input w={"80%"} borderWidth={2} variant="round" size={"2xl"} placeholder="Calle" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontSize={"xl"} fontWeight={"bold"}>Fraccionamiento:</Text>
                <Input w={"60%"} size={"2xl"} fontWeight={"bold"} borderWidth={2} variant="round" placeholder="Fraccionamiento" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Número Exterior:</Text>
                <Input w={"30%"} size={"2xl"} borderWidth={2} variant="round" placeholder="N. Exterior" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Número Interior:</Text>
                <Input w={"31%"} size={"2xl"} borderWidth={2} variant="round" placeholder="N. Interior" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Código Postal:</Text>
                <Input w={"34%"} size={"2xl"} borderWidth={2} variant="round" placeholder="Código Postal" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Estado:</Text>
                <Input w={"46%"} size={"2xl"} borderWidth={2} variant="round" placeholder="Estado" />
              </HStack>
              <HStack space={1} w={"95%"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>Municipio:</Text>
                <Input w={"41%"} size={"2xl"} borderWidth={2} variant="round" placeholder="Municipio" />
              </HStack>
            </VStack>
            <Button marginTop={3} backgroundColor="info.600" h="20"><Text fontSize={"3xl"} fontWeight="bold" color="white">GUARDAR</Text></Button>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  </>);
}

function Medicos() {
  const navigation = useNavigation();
  return (<>
    <Center>
      <Box w="90%" borderBottomWidth={2} borderBottomColor={"lightBlue.300"} alignItems="center" marginBottom={2}>
        <Text letterSpacing={"2xl"} alignSelf={"center"} fontSize={"4xl"}>Datos Medicos</Text>
      </Box>
    </Center>
    <Box>
      <HStack space={2} justifyContent={"center"} >
        <VStack space={3} w={"40%"}>
          <Button h={"15%"} w={"100%"} bg="#CF807C" onPress={() => navigation.navigate('TipoSangre')}>
            <HStack space={1} w="100%">
              <Image size={"lg"} resizeMode={"contain"} source={require("../../../src/images/TipoDeSangre.png")} alt={"TipoSangre_Button"} />
              <VStack justifyContent={"center"}>
                <Text fontWeight={"extrabold"} fontSize={"3xl"}>Tipo De</Text>
                <Text fontWeight={"extrabold"} fontSize={"3xl"}>Sangre</Text>
              </VStack>
            </HStack>
          </Button>
          <Button h={"30%"} bg="#5EA869" onPress={() => navigation.navigate('Alergias')}>
            <VStack space={1} alignItems={"center"}>
              <Text fontWeight={"extrabold"} fontSize={"4xl"}>Alergias</Text>
              <Image size={"40"} resizeMode={"contain"} alignSelf={"center"} source={require("../../../src/images/alergia.png")} alt={"Alergia_Button"} />
            </VStack>
          </Button>
          <Button h={"16%"} bg="#9E65BF" justifyContent={"center"} onPress={() => navigation.navigate('Cirugias')}>
            <HStack space={1} justifyContent={"center"} alignItems={"center"}>
              <Text fontWeight={"extrabold"} fontSize={"3xl"}>Cirugias</Text>
              <Image size={"lg"} resizeMode={"contain"} source={require("../../../src/images/Cirugias.png")} alt={"Cirugia_Button"} />
            </HStack>
          </Button>
          <Button h={"28%"} bg="#AE1010" onPress={() => navigation.navigate('IncidentesRecientes')}>
            <VStack alignItems={"center"}>
              <Image size={"xl"} resizeMode={"contain"} source={require("../../../src/images/IncidentesRecientes.png")} alt={"TipoSangre_Button"} />
              <VStack alignItems={"center"}>
                <Text fontSize={"4xl"}>Incidentes</Text>
                <Text fontSize={"4xl"}>Recientes</Text>
              </VStack>
            </VStack>
          </Button>
        </VStack>
        <VStack w={"55%"} space={3}>
          <Button h={"15%"} w={"100%"} bg="#D6B11B" onPress={() => navigation.navigate('PesoEstatura')}>
            <HStack space={1} justifyContent="center">
              <Image size={"xl"} resizeMode={"contain"} source={require("../../../src/images/PesoyEstatura.png")} alt={"PesoyEstatura_Button"} />
              <VStack alignItems={"center"} justifyContent="center" >
                <Text fontSize={"3xl"}>Peso</Text>
                <Text fontSize={"3xl"}>Y</Text>
                <Text fontSize={"3xl"}>Estatura</Text>
              </VStack>
            </HStack>
          </Button>
          <Button h={"18%"} w={"100%"} bg="#41C6AE" onPress={() => navigation.navigate('EnfermedadesCronicas')}>
            <HStack space={1}>
              <VStack alignItems={"center"} justifyContent="center">
                <Text fontSize={"2xl"}>Enfermedades</Text>
                <Text fontSize={"2xl"}>Cronicas</Text>
              </VStack>
              <Image size={"xl"} resizeMode={"contain"} source={require("../../../src/images/EnfermedadesCronicas.png")} alt={"EnfermedadresCronicas_Button"} />
            </HStack>
          </Button>
          <Button h={"18%"} w={"100%"} bg="#2491C8" onPress={() => navigation.navigate('MedicacionActiva')}>
            <HStack>
              <VStack alignItems={"center"} justifyContent="center">
                <Text fontSize={"3xl"}>Medicación</Text>
                <Text fontSize={"3xl"}>Activa</Text>
              </VStack>
              <Image size={"xl"} resizeMode={"contain"} source={require("../../../src/images/MedicacionActiva.png")} alt={"MedicacionActiva_Button"} />
            </HStack>
          </Button>
          <Button h={"38%"} w={"100%"} bg="#99B94D" onPress={() => navigation.navigate('ActividadFisica')}>
            <VStack alignItems={"center"} justifyContent="center">
              <Text fontSize={"5xl"}>Actividad</Text>
              <Text fontSize={"5xl"}>Fisica</Text>
              <Image size={"xl"} resizeMode={"contain"} source={require("../../../src/images/ActividadFisica.png")} alt={"ActividadFisica_Button"} />
            </VStack>
          </Button>
        </VStack>
      </HStack>
    </Box>
  </>);
}

function DatosPersonales() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Personales />
    </NativeBaseProvider>
  );
}

function Dirección() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Direccion />
    </NativeBaseProvider>
  );
}

function DatosMedicos(navigation) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Medicos />
    </NativeBaseProvider>
  );
}

const Tab = createBottomTabNavigator();

export default function PacienteMiExpedienteDir({ navigation }) {
  return (
    <Tab.Navigator initialRouteName="Datos Personales" screenOptions={{ tabBarInactiveTintColor: '', headerShown: false, tabBarStyle: { height: 70 } }}>
      <Tab.Screen name="Datos Personales" component={DatosPersonales}
        options={{
          headerShown: false,
          tabBarLabel: "Datos Personales",
          tabBarLabelStyle: {
            fontSize: 23,
          },
          tabStyle: { height: 100 },
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-outline" size={50} color={color} />),
          tabBarActiveTintColor: "white", tabBarActiveBackgroundColor: "#1F2AB0", tabBarInactiveTintColor: "black",
        }} />
      <Tab.Screen name="Dirección" component={Dirección}
        options={{
          headerShown: false,
          tabBarLabel: "Dirección",
          tabBarLabelStyle: {
            fontSize: 23,
          },
          tabStyle: { height: 100, fontSize: 24 },
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" size={50} color={color} />),
          tabBarActiveTintColor: "white", tabBarActiveBackgroundColor: "#8023A0", tabBarInactiveTintColor: "black",
        }} />
      <Tab.Screen name="Datos Médicos" component={DatosMedicos}
        options={{
          headerShown: false,
          tabBarLabel: "Datos Medicos",
          tabBarLabelStyle: {
            fontSize: 23,
          },
          tabStyle: { height: 100 },
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="hospital" size={55} color={color} />),
          tabBarActiveTintColor: "white", tabBarActiveBackgroundColor: "#5C6C1D", tabBarInactiveTintColor: "black",
        }}></Tab.Screen>

    </Tab.Navigator>
  );
}