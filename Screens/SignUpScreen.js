import React from "react";
import { Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { Icon,Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider,IconButton,StatusBar,HStack,Text } from "native-base";

const SignUpForm= () => {
  return <Center w="100%">
      <Box safeArea p="2" w="100%" maxW="400" py="8" alignContent={'flex-start'}>
        <Heading size="lg" textAlign={'center'} fontSize={"30"} color="coolGray.800" _dark={{
        color: "warmGray.50" 
      }} fontWeight="bold">
          Registro de Usuario
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input 
            InputLeftElement={<Icon as={<EvilIcons name="user"/>} size={10} ml="4" color="deepskyblue"/>}
            placeholder="Usuario"
            size="xl"
            variant="rounded"
            />
          </FormControl>
          <FormControl>
            <Input
              InputLeftElement={<Icon as={<MaterialIcons name="email"/>} size={8} ml="5" color="deepskyblue"/>}
              placeholder="Correo Electrónico"
              size="xl"
              variant="rounded"
            />
          </FormControl>
          <FormControl>
            <Input 
            InputLeftElement={<Icon as={<AntDesign name="lock"/>} size={9} ml="5" color="deepskyblue"/>}
            type="password" placeholder="Contraseña" size="xl"variant="rounded" />
          </FormControl>
          <FormControl>
          <Input 
            InputLeftElement={<Icon as={<AntDesign name="lock"/>} size={9} ml="5" color="deepskyblue"/>}
            type="password" placeholder=" Verificar Contraseña" size="xl"variant="rounded" />
          </FormControl>
        </VStack>
      </Box>
    </Center>;
};

function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold" style={{marginLeft:10}}>
            Cirugias xd
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>;
}


export default function SignUpScreen({navigation}){
  return(
    <NativeBaseProvider>
      <AppBar />
      <Center>
      <Image source={require('../src/images/icono_v4.png')}style={{ width: 300, height: 300, marginTop:100}}  />
      <SignUpForm />
      <Button mt="2" colorScheme="indigo" title='REGISTRARSE' onPress={()=>navigation.navigate('SignInScreen')} style={{width:385}}>Registrarse!</Button>
      </Center>
    </NativeBaseProvider>
  );
}