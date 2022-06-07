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
  Icon,
  HStack,
  Fab,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ContactoDeEmergia = () => {
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
            Contactos de Emergencia
          </Text>
        </Box>
      </Box>
      <Box padding={3} bg="gray.300">
        <Input
          placeholder="Buscar"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </Box>
      <ScrollView>
        <HStack justifyContent="center">
          <Box border="1" borderRadius="md" width="20%">
            <Box px="4" padding={5}>
              <Avatar bg="purple.500" mr="1" height={75} width={75}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  L
                </Text>
              </Avatar>
            </Box>
          </Box>
          <Box border="1" borderRadius="md" width="80%">
            <Box px="4" padding={5}>
              <HStack>
                <Icon
                  size="6"
                  color="purple.500"
                  as={<MaterialIcons name="account-circle" />}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Lourdes Perez
                </Text>
              </HStack>
              <Text>Parentesco: Madre</Text>
              <Text>Telefono: +52 449 962 25 85</Text>
              <Text>Telefono Alt: +52 449 962 25 8</Text>
            </Box>
          </Box>
        </HStack>
        <Divider />
        <HStack justifyContent="center">
          <Box border="1" borderRadius="md" width="20%">
            <Box px="4" padding={5}>
              <Avatar bg="pink.500" mr="1" height={75} width={75}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  C
                </Text>
              </Avatar>
            </Box>
          </Box>
          <Box border="1" borderRadius="md" width="80%">
            <Box px="4" padding={5}>
              <HStack>
                <Icon
                  size="6"
                  color="pink.500"
                  as={<MaterialIcons name="account-circle" />}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Cristina Martinez
                </Text>
              </HStack>
              <Text>Parentesco: Hermana</Text>
              <Text>Telefono: +52 449 365 20 14</Text>
              <Text>Telefono Alt: +52 449 962 20 15</Text>
            </Box>
          </Box>
        </HStack>
        <Divider />
        <HStack justifyContent="center">
          <Box border="1" borderRadius="md" width="20%">
            <Box px="4" padding={5}>
              <Avatar bg="red.500" mr="1" height={75} width={75}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  M
                </Text>
              </Avatar>
            </Box>
          </Box>
          <Box border="1" borderRadius="md" width="80%">
            <Box px="4" padding={5}>
              <HStack>
                <Icon
                  size="6"
                  color="red.500"
                  as={<MaterialIcons name="account-circle" />}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Mario Bros
                </Text>
              </HStack>
              <Text>Parentesco: Primo</Text>
              <Text>Telefono: +52 449 962 19 45</Text>
              <Text>Telefono Alt: +52 449 365 20 15</Text>
            </Box>
          </Box>
        </HStack>
        <Divider />
        <HStack justifyContent="center">
          <Box border="1" borderRadius="md" width="20%">
            <Box px="4" padding={5}>
              <Avatar bg="blue.500" mr="1" height={75} width={75}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  F
                </Text>
              </Avatar>
            </Box>
          </Box>
          <Box border="1" borderRadius="md" width="80%">
            <Box px="4" padding={5}>
              <HStack>
                <Icon
                  size="6"
                  color="blue.500"
                  as={<MaterialIcons name="account-circle" />}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Fernando Robles
                </Text>
              </HStack>
              <Text>Parentesco: GOD</Text>
              <Text>Telefono: +52 449 691 69 14</Text>
              <Text>Telefono Alt: +52 449 691 71 14</Text>
            </Box>
          </Box>
        </HStack>
        <Divider />
      </ScrollView>
      <Box position="relative" h={100} w="100%">
        <Fab
          position="absolute"
          size="sm"
          icon={
            <Icon
              color="white"
              as={<MaterialIcons name="person-add-alt" />}
              size="xl"
            />
          }
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default ContactoDeEmergia;
