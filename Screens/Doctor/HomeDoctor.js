import { Box, Button, NativeBaseProvider, VStack,Center,Text,Icon,StatusBar,HStack,Image,IconButton } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 

  function AppBar() {
    return(<>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop>
        <HStack bg="info.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center">
            <Text color="white" fontSize="45"  fontWeight="bold" style={{marginLeft:10}}>HealthCore / Doctor</Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="2xl" color="white" />} />
          </HStack>
        </HStack>
      </Box>
    </>);
  }

export default function HomeDoctor({navigation}){
    return(
      <NativeBaseProvider>
            <AppBar />
            <Box>
                <VStack space={"xs"} alignItems="center"marginTop={5}>
                    {/*Perfil*/}
                    <Center w="90%" h="23%">
                        <Button w="100%" h="100%" background="pink.500" borderColor="info.300" borderWidth={5} borderRadius={20}>
                            <HStack justifyContent={"center"} alignContent="center">
                                {/*Icono */}
                                <Center w={"30%"} h="100%" marginLeft={4}>
                                    <Image source={require('../../src/images/perfil.png')}  resizeMode={"contain"} size="xl" alignSelf={"center"} alt="Perfil"/>
                                </Center>
                                {/*Texto */}
                                <Center w="60%" h="100%">
                                    <Box>
                                    <Text bold color={"white"} fontSize="5xl" font>PERFIL</Text>
                                    </Box>
                                </Center>
                            </HStack>
                        </Button>
                    </Center>

                    {/*Citas*/}
                    <Center w="90%" h="23%">
                        <Button w="100%" h="100%" background="purple.900" borderColor="info.300" borderWidth={5} borderRadius={20}>
                            <HStack justifyContent={"center"} alignContent="center">
                                {/*Icono */}
                                <Center w={"30%"} h="100%" marginLeft={4}>
                                    <Image source={require('../../src/images/Expediente.png')}  resizeMode={"contain"} size="xl" alignSelf={"center"} alt="Perfil"/>
                                </Center>
                                {/*Texto */}
                                <Center w="60%" h="100%">
                                    <Box>
                                    <Text bold color={"white"} fontSize="5xl" font>CITAS</Text>
                                    </Box>
                                </Center>
                            </HStack>
                        </Button>
                    </Center>

                    {/*Lector QR*/}
                    <Center w="90%" h="23%">
                        <Button w="100%" h="100%" background="orange.500" borderColor="info.300" borderWidth={5} borderRadius={20}>
                            <HStack justifyContent={"center"} alignContent="center">
                                {/*Icono */}
                                <Center w={"30%"} h="100%" marginLeft={1}>
                                    <Image source={require('../../src/images/qrscanner.png')}  resizeMode={"contain"} size="xl" alignSelf={"center"} alt="Perfil"/>
                                </Center>
                                {/*Texto */}
                                <Center w="65%" h="100%">
                                    <Box>
                                    <Text bold color={"white"} fontSize="5xl" font>LECTOR QR</Text>
                                    </Box>
                                </Center>
                            </HStack>
                        </Button>
                    </Center>

                    {/*Notas*/}
                     <Center w="90%" h="23%">
                        <Button w="100%" h="100%" background="lime.600" borderColor="info.300" borderWidth={5} borderRadius={20}>
                            <HStack justifyContent={"center"} alignContent="center">
                                {/*Icono */}
                                <Center w={"30%"} h="100%" marginLeft={1}>
                                    <Image source={require('../../src/images/notas.png')}  resizeMode={"contain"} size="xl" alignSelf={"center"} alt="Perfil"/>
                                </Center>
                                {/*Texto */}
                                <Center w="65%" h="100%">
                                    <Box>
                                    <Text bold color={"white"} fontSize="5xl" font>NOTAS</Text>
                                    </Box>
                                </Center>
                            </HStack>
                        </Button>
                    </Center>
                </VStack>
            </Box>  
      </NativeBaseProvider>
    );
}