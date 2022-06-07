import React from 'react';
import {NativeBaseProvider, Box, Button, HStack, VStack, ScrollView} from "native-base"; 


export default function Prueba({navigation}){
    return(
      <NativeBaseProvider>
        <Box marginTop={"100px"} alignItems="center">
          <ScrollView>
            <VStack space={3}>
              <HStack space={3}>
                <Button size={"150"} backgroundColor="tertiary.600" title='MODIFICAR' onPress={()=>navigation.navigate('Alergias')}>Alergias</Button>
                <Button size={"150"} backgroundColor="tertiary.600" title='MODIFICAR' onPress={()=>navigation.navigate('AlergiasAlta')} >Alergias Alta</Button>
                <Button size={"150"} backgroundColor="tertiary.600" title='MODIFICAR' onPress={()=>navigation.navigate('AlergiasModificar')}>Alergias Modificar</Button>
              </HStack>
              <HStack  space={3}>
                <Button  backgroundColor="warning.500" title='MODIFICAR' onPress={()=>navigation.navigate('EnfermedadesCronicas')} size={"150"}>EnfermedadesCronicas</Button>
                <Button  backgroundColor="warning.500" title='MODIFICAR' onPress={()=>navigation.navigate('EnfermedadesCronicasAlta')} size={"150"}>EnfermedadesCronicas Alta</Button>
                <Button  backgroundColor="warning.500" title='MODIFICAR' onPress={()=>navigation.navigate('EnfermedadesCronicasModificar')} size={"150"}>EnfermedadesCronicas Modificar</Button>
              </HStack> 
              <HStack space={3}>
                <Button  backgroundColor="info.400" title='MODIFICAR' onPress={()=>navigation.navigate('HomeDoctor')} size={"150"}>HomeDoctor</Button>
                <Button  backgroundColor="info.400" title='MODIFICAR' onPress={()=>navigation.navigate('HomePaciente')} size={"150"}>HomePaciente</Button>
                <Button  backgroundColor="info.400" title='MODIFICAR' onPress={()=>navigation.navigate('PacienteMiExpedienteDir')} size={"150"}>PacienteMiExpedienteDir</Button>
              </HStack>
              <HStack space={3}>
                <Button  backgroundColor="fuchsia.700" title='MODIFICAR' onPress={()=>navigation.navigate('QR')} size={"150"}>Mi QR</Button>
                <Button  backgroundColor="fuchsia.700" title='MODIFICAR' onPress={()=>navigation.navigate('LectorQR')} size={"150"}>LectorQR</Button>
                <Button  backgroundColor="fuchsia.700" title='MODIFICAR' onPress={()=>navigation.navigate('TipoSangre')} size={"150"}>Tipo de Sangre</Button>
              </HStack>
              <HStack space={3}>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('ActividadFisica')} size={"150"}>Actividad Fisica</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('ActividadFisicaAlta')} size={"150"}>Actividad Fisica Alta</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('ActividadFisicaModificar')} size={"150"}>Actividad Fisica Modificar</Button>
              </HStack>
              <HStack space={3}>
                <Button  backgroundColor="secondary.600" title='MODIFICAR' onPress={()=>navigation.navigate('HomeDoctor')} size={"150"}>HomeDoctor</Button>
                <Button  backgroundColor="secondary.600" title='MODIFICAR' onPress={()=>navigation.navigate('HomePaciente')} size={"150"}>HomePaciente</Button>
                <Button  backgroundColor="secondary.600" title='MODIFICAR' onPress={()=>navigation.navigate('PacienteMiExpedienteDM')} size={"150"}>PacienteMiExpedienteDM</Button>
              </HStack>
              <HStack space={3}>
                <Button  backgroundColor="yellow.500" title='MODIFICAR' onPress={()=>navigation.navigate('PerfilPaciente')} size={"150"}>PerfilPaciente</Button>
                <Button  backgroundColor="yellow.500" title='MODIFICAR' onPress={()=>navigation.navigate('HomePaciente')} size={"150"}>HomePaciente</Button>
                <Button  backgroundColor="yellow.500" title='MODIFICAR' onPress={()=>navigation.navigate('PacienteMiExpedienteDir')} size={"150"}>PacienteMiExpedienteDir</Button>
              </HStack>
              <HStack space={3}>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('NotasAlta')} size={"150"}>NotasAlta</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('Configuracion')} size={"150"}>Configuracion</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('IncidentesRecientes')} size={"150"}>IncidentesRecientes-</Button>
              </HStack>
              <HStack space={3}>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('Contacto')} size={"150"}>Contacto</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('ContactosEmergenciaAlta')} size={"150"}>Contactos Emergencia Alta</Button>
                <Button  colorScheme="indigo" title='MODIFICAR' onPress={()=>navigation.navigate('')} size={"150"}></Button>
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </NativeBaseProvider>
    );
}