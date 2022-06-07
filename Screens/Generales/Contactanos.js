import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity
} from "react-native";
export default class Contactanos extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1, borderColor: 'black', borderWidth: 5}}>
        <Text style={styles.titulo}>Contactos</Text>

        <Image style={{    position: "absolute",
      width: "23%",
      height: "10%",
      top: 100,
      }} source ={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/768px-Circle-icons-mail.svg.png'}}/>
        <View style={{top: 200, borderWidth: 3,borderColor: 'purple',margin: 20,textAlign: 'center'}}>
          <Image style={{    position: "absolute",
            width: 50,
            height: 50,
            left: -70}}source ={{uri: 'https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'}}/>
          <Text>Jesús Rangel Díaz</Text>
          <Text>jesusrangeldía155@gmail.com</Text>
          <TouchableOpacity>
            <Image style={{    position: "absolute",
              width: 50,
              height: 50,
              top: -40,
              right: -80}}source ={{uri: 'http://pngimg.com/uploads/email/email_PNG11.png'}}/>
          </TouchableOpacity>
        </View>
        
        <View style={{top: 200, borderWidth: 3,borderColor: 'yellow',margin: 20,textAlign: 'center'}}>
          <Image style={{    position: "absolute",
            width: 50,
            height: 50,
            left: -70}}source ={{uri: 'https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'}}/>
          <Text>Ximena Velasco Vázquez</Text>
          <Text>adm15velascoximena@gmail.com</Text>
          <TouchableOpacity>
            <Image style={{    position: "absolute",
              width: 50,
              height: 50,
              top: -40,
              right: -80}}source ={{uri: 'http://pngimg.com/uploads/email/email_PNG11.png'}}/>
          </TouchableOpacity>
        </View>

        <View style={{top: 200, borderWidth: 3,borderColor: 'blue',margin: 20,textAlign: 'center'}}>
          <Image style={{    position: "absolute",
            width: 50,
            height: 50,
            left: -70}}source ={{uri: 'https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'}}/>
          <Text>Salma Odalys Solana Velasco</Text>
          <Text>salmasolana545@gmail.com</Text>
          <TouchableOpacity>
            <Image style={{    position: "absolute",
              width: 50,
              height: 50,
              top: -40,
              right: -80}}source ={{uri: 'http://pngimg.com/uploads/email/email_PNG11.png'}}/>
          </TouchableOpacity>
        </View>

        <View style={{top: 200, borderWidth: 3,borderColor: 'green',margin: 20,textAlign: 'center'}}>
          <Image style={{    position: "absolute",
            width: 50,
            height: 50,
            left: -70}}source ={{uri: 'https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'}}/>
          <Text>Sergio Alan Salinas Rodríguez</Text>
          <Text>alansalinas25@gmail.com</Text>
          <TouchableOpacity>
            <Image style={{    position: "absolute",
              width: 50,
              height: 50,
              top: -40,
              right: -80}}source ={{uri: 'http://pngimg.com/uploads/email/email_PNG11.png'}}/>
          </TouchableOpacity>
        </View>

        <View style={{top: 200, borderWidth: 3,borderColor: 'black',margin: 20,textAlign: 'center'}}>
          <Image style={{    position: "absolute",
            width: 50,
            height: 50,
            left: -70}}source ={{uri: 'https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'}}/>
          <Text>Omar Macías Delgado</Text>
          <Text>macias.omar5h@gmail.com</Text>
          <TouchableOpacity>
            <Image style={{    position: "absolute",
              width: 50,
              height: 50,
              top: -40,
              right: -80}}source ={{uri: 'http://pngimg.com/uploads/email/email_PNG11.png'}}/>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'rgb(0,0,255)', top: 200}}>Visita nuestras redes sociales</Text>
        <View style={{top: 200,flexDirection: 'row',
      flexWrap: 'wrap', borderWidth: 3,display: 'flex',borderColor: 'black', borderRadius: 10,margin: 20,textAlign: 'center'}}>
          
          <TouchableOpacity
          onPress={()=>Linking.openURL('https://www.facebook.com/HealthCore-101091559105887')}>
            <Image 
             style={{height: 70, width: 70}}
              source ={{uri: 'https://w7.pngwing.com/pngs/295/957/png-transparent-facebook-logo-social-media-facebook-like-button-youtube-computer-icons-facebook-blue-logo-linkedin.png'}}/>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>Linking.openURL('https://www.instagram.com/oficialhealthcore/')}>
          
            <Image 
             style={{height: 70, width: 70}}
              source ={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png'}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  titulo: {
    position: "absolute",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 50,
    top: 50,
    zIndex: 1,
    fontFamily: "sans-serif-thin",
  },
});
