import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { VStack, FormControl, Select, CheckIcon, HStack, Input, IconButton, Icon, Text, NativeBaseProvider, Center, View, Box, StatusBar, Image, Stack, Button, ScrollView } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';

function AppBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee"  px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold" style={{ marginLeft: 10 }}>
            Avisos Legales
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

function PoliticasSeguridad() {
  return (
    <>
    <Text bold fontSize="13" color = "muted.400" marginLeft="2%" marginTop="1%" marginBottom="0%">hola 
   </Text>
      <Text fontSize="13" color = "muted.400" marginLeft="2%" marginTop="0%" marginBottom="1%" >
        Healtcore, es el responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, publicada en el Diario Oficial de la Federación el 26 de enero de 2017, y demás normatividad que resulte aplicable, en cumplimiento de su artículo 27 se da a conocer el presente AVISO DE PRIVACIDAD SIMPLIFICADO PARA EL SITIO WEB DEL INSTITUTO MEXICANO DEL SEGURO SOCIAL Y TODA LA INFORMACIÓN PUBLICADA BAJO EL NOMBRE, en los términos siguientes:
     </Text>
    </>

  );
}

function Form() {
  return (
    <>
      <ScrollView style={[styles.container]}>
        <PoliticasSeguridad />


      </ScrollView>
    </>
  );
}

function Boton() {
  return (
    <>
      <Center>
        <HStack space="4" alignItems="center">
          <Button marginTop="5%" marginBottom="4%" backgroundColor='muted.600' title='ACEPTAR' onPress={() => navigation.navigate('')} style={{ width: "30%" }}><Text bold color="white">Aceptar</Text>
          </Button>
          <Button marginTop="5%" marginBottom="4%" backgroundColor='muted.600' title='Rechazar' onPress={() => navigation.navigate('')} style={{ width: "30%" }}><Text bold color="white">Rechazar</Text>
          </Button>
        </HStack>
      </Center>
    </>
  );
}

export default function AvisosLegales({ navigation }) {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Text italic fontSize="10" marginLeft="2%" color="black" marginTop="3%" marginBottom="4%">
        Declaro bajo protesta de decir verdad que la información y documentación
        proporcionada es verídica, por lo que en caso de existir falsedad en
        ella, tengo pleno conocimiento que se aplicarán las sanciones
        administrativas y penas establecidas en los ordenamientos respectivos
        para quienes se conducen con falsedad ante la autoridad competente
      </Text>
      <Form />
      <Boton />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
  },
});
