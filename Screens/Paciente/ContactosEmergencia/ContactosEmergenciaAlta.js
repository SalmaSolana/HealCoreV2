import React, { Component } from 'react';
import { Image, Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class ContactosEmergenciaAlta extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      parentesco: '',
      tel1: '',
      tel2: '',
    };
  }
  
  onLogin() {
    const {nombre, apellidoM,apellidoP,parentesco,tel1,tel2 } = this.state;

    Alert.alert('Credentials', `${nombre} + ${apellidoP}+ ${apellidoM}+ ${parentesco}+ 
    ${tel1}+ ${tel2}`);
  }

  render() {
    return (
      <View style={styles.container}>
       <Image source="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"//la imagen la cambias
        style={{ width: 100, height: 100}} /> 
    
    <TextInput    
          value={this.state.nombre}
          onChangeText={(nombre) => this.setState({nombre})}
          placeholder={'Nombre'}
          style={styles.input}
        />
        <TextInput
          value={this.state.nombre}
          onChangeText={(apellidoP) => this.setState({apellidoP})}
          placeholder={'Apellido Paterno'}
          style={styles.input}
        />
        
         <TextInput
          value={this.state.apellidoM}
          onChangeText={(apellidoM) => this.setState({ apellidoM})}
          placeholder={'Apellido Materno'}
          style={styles.input}
        />
        <TextInput
          value={this.state.tel1}
          onChangeText={(tel1) => this.setState({ tel1})}
          placeholder={'Teléfono'}          
          style={styles.input}
        />  
        <TextInput
          value={this.state.tel2}
          onChangeText={(tel2) => this.setState({ tel2})}
          placeholder={'Teléfono Alt'}          
          style={styles.input}
        />
        
        <Button
          title={'Guardar'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}//le cambias el formato aqui
        />      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
