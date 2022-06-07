import { View, Text, Linking } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Box,
  StatusBar,
  Center,
  Image,
  ScrollView,
  VStack,
  Heading,
  Stack,
  Divider,
  Input,
  Avatar,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const Contact = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" />
      <Box bg="#3f888f" width="100%" height={50}>
        <Box padding={2}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Contáctanos
          </Text>
        </Box>
      </Box>
      <Center>
        <Box padding={10}>
          <Image
            source={require("../../src/images/mail_icon.png")}
            alt={"_profileImg"}
            style={{ width: 125, height: 125 }}
          />
        </Box>
      </Center>
      <ScrollView>
        <VStack space="2.5" px="8">
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box width="15%">
              <Avatar bg="green.500" mr="1">
                JR
              </Avatar>
            </Box>

            <Box width="70%">
              <Center>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Jesus Rangel Diaz
                </Text>
              </Center>
              <Input
                width="100%"
                variant="underlined"
                placeholder="Correo: jesusrangeldiaz155@gmail.com"
                fontSize={12}
                isDisabled={true}
                color={"gray.400"}
              />
            </Box>
            <Box width="15%">
              <Image
                source={require("../../src/images/gmail_image.png")}
                alt={"_profileImg"}
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
        </VStack>
        <VStack space="2.5" px="8">
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box width="15%">
              <Avatar bg="amber.500" mr="1">
                XV
              </Avatar>
            </Box>

            <Box width="70%">
              <Center>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Ximena Velasco Vazquez
                </Text>
              </Center>
              <Input
                width="100%"
                variant="underlined"
                placeholder="Correo: adm15velascoximena54@gmail.com"
                fontSize={12}
                isDisabled={true}
                color={"gray.400"}
              />
            </Box>
            <Box width="15%">
              <Image
                source={require("../../src/images/gmail_image.png")}
                alt={"_profileImg"}
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
        </VStack>
        <VStack space="2.5" px="8">
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box width="15%">
              <Avatar bg="blue.500" mr="1">
                SS
              </Avatar>
            </Box>

            <Box width="70%">
              <Center>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Salma Odalys Solana Velasco
                </Text>
              </Center>
              <Input
                width="100%"
                variant="underlined"
                placeholder="Correo: salmasolano54@gmail.com"
                fontSize={12}
                isDisabled={true}
                color={"gray.400"}
              />
            </Box>
            <Box width="15%">
              <Image
                source={require("../../src/images/gmail_image.png")}
                alt={"_profileImg"}
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
        </VStack>
        <VStack space="2.5" px="8">
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box width="15%">
              <Avatar bg="red.500" mr="1">
                SA
              </Avatar>
            </Box>

            <Box width="70%">
              <Center>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Sergio Alan Salinas Rodriguez
                </Text>
              </Center>
              <Input
                width="100%"
                variant="underlined"
                placeholder="Correo: alansalinas25@gmail.com"
                fontSize={12}
                isDisabled={true}
                color={"gray.400"}
              />
            </Box>
            <Box width="15%">
              <Image
                source={require("../../src/images/gmail_image.png")}
                alt={"_profileImg"}
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box width="15%">
              <Avatar bg="purple.500" mr="1">
                OM
              </Avatar>
            </Box>

            <Box width="70%">
              <Center>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Omar Macias Delgado
                </Text>
              </Center>
              <Input
                width="100%"
                variant="underlined"
                placeholder="Correo: macias.omar5h@gmail.com"
                fontSize={12}
                isDisabled={true}
                color={"gray.400"}
              />
            </Box>
            <Box width="15%">
              <Image
                source={require("../../src/images/gmail_image.png")}
                alt={"_profileImg"}
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
          <Center>
            <Heading size="xs">Visita Nuestras Redes Sociales</Heading>
          </Center>
          <VStack space="2.5" px="8">
            <Center>
              <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                <Stack direction="column" mb="2.5" mt="1.5" space={3}>
                  <Center>
                    <Box>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            "https://www.facebook.com/HealthCore-101091559105887"
                          )
                        }
                      >
                        <Image
                          source={require("../../src/images/fb_icon.png")}
                          alt={"_profileImg"}
                          style={{ width: 40, height: 40 }}
                        />
                      </TouchableOpacity>
                      <Box padding={1}></Box>
                    </Box>
                    <Text
                      style={{
                        fontSize: 12,
                      }}
                    >
                      HealthCore
                    </Text>
                  </Center>
                </Stack>
                <Stack direction="column" mb="2.5" mt="1.5" space={3}>
                  <Center>
                    <Box>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            "https://www.instagram.com/oficialhealthcore/"
                          )
                        }
                      >
                        <Image
                          source={require("../../src/images/ig_icon.png")}
                          alt={"_profileImg"}
                          style={{ width: 40, height: 40 }}
                        />
                      </TouchableOpacity>
                      <Box padding={1}></Box>
                    </Box>
                    <Text
                      style={{
                        fontSize: 12,
                      }}
                    >
                      OficialHealthCore
                    </Text>
                  </Center>
                </Stack>
              </Stack>
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Contact;
