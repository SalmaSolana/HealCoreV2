import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from "@expo/vector-icons";
import { VStack, Fab, HStack, IconButton, Icon, Text, FormControl, CheckIcon, NativeBaseProvider, Input, Center, Box, StatusBar, Heading, Select,Stack, Button, Image} from "native-base";

function AppBar() {
    return(<>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop>
        <HStack bg="info.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center">
            <Text color="white" fontSize="45"  fontWeight="bold" style={{marginLeft:10}}>Perfil Paciente</Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="2xl" color="white" />} />
          </HStack>
        </HStack>
      </Box>
    </>);
}

export default function PerfilPaciente({navigation}){
    return(
        <NativeBaseProvider>
            <AppBar/>
        </NativeBaseProvider>
    );
}