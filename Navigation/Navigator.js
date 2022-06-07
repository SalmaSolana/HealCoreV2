import React from "react";
import { useSyncExternalStore } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

{
  /* Formularios SignIn-SignIn */
}
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";

{
  /* Paciente */
}
import HomePaciente from "../Screens/Paciente/HomePaciente";
import PerfilPaciente from "../Screens/Paciente/PerfilPaciente/PerfilPaciente";
import PacienteMiExpedienteDir from "../Screens/Paciente/MiExpediente/PacienteMiExpedienteDir";

{
  /* Generales */
}
import Configuracion from "../Screens/Generales/Configuracion";
import Prueba from "../Screens/Pruebaxd/Prueba";

{
  /* Doctor */
}
import HomeDoctor from "../Screens/Doctor/HomeDoctor";

{
  /* Notas */
}
import NotasAlta from "../Screens/Doctor/Notas/NotasAlta";

{
  /* Alergias */
}
import Alergias from "../Screens/Paciente/MiExpediente/Alergias/Alergias";
import AlergiasModificar from "../Screens/Paciente/MiExpediente/Alergias/AlergiasModificar";
import AlergiasAlta from "../Screens/Paciente/MiExpediente/Alergias/AlergiasAlta";

{
  /* Enfermedades Cronicas */
}
import EnfermedadesCronicas from "../Screens/Paciente/MiExpediente/EnfermedadesCronicas/EnfermedadesCronicas";
import EnfermedadesCronicasModificar from "../Screens/Paciente/MiExpediente/EnfermedadesCronicas/EnfermedadesCronicasModificar";
import EnfermedadesCronicasAlta from "../Screens/Paciente/MiExpediente/EnfermedadesCronicas/EnfermedadesCronicasAlta";

{
  /* Actividad Fisica */
}
import ActividadFisica from "../Screens/Paciente/MiExpediente/ActividadFisica/ActividadFisica";
import ActividadFisicaAlta from "../Screens/Paciente/MiExpediente/ActividadFisica/ActividadFisicaAlta";
import ActividadFisicaModificar from "../Screens/Paciente/MiExpediente/ActividadFisica/ActividadFisicaModificar";

{
  /* QR */
}
import QR from "../Screens/Paciente/MiQR/QR";
import LectorQR from "../Screens/Doctor/LectorQR/LectorQR";

{
  /* Tipo de Sangre */
}
import TipoSangre from "../Screens/Paciente/MiExpediente/TipoSangre/TipoSangre";

{
  /* Peso y Estatura */
}
import PesoEstatura from "../Screens/Paciente/MiExpediente/PesoEstatura/PesoEstatura";

{
  /* Cirugias */
}
import Cirugias from "../Screens/Paciente/MiExpediente/Cirugias/Cirugias";
import CirugiasAlta from "../Screens/Paciente/MiExpediente/Cirugias/CirugiasAlta";
import CirugiasModificar from "../Screens/Paciente/MiExpediente/Cirugias/CirugiasModificar";

{
  /* Incidentes Recientes */
}
import IncidentesRecientes from "../Screens/Paciente/MiExpediente/IncidentesRecientes/IncidentesRecientes";
import IncidentesRecientesModificar from "../Screens/Paciente/MiExpediente/IncidentesRecientes/IncidentesRecientesModificar";
import IncidentesRecientesAlta from "../Screens/Paciente/MiExpediente/IncidentesRecientes/IncidentesRecientesAlta";

{
  /* Medicación Activa */
}
import MedicacionActiva from "../Screens/Paciente/MiExpediente/MedicacionActiva/MedicacionActiva";
import MedicacionActivaModificar from "../Screens/Paciente/MiExpediente/MedicacionActiva/MedicacionActivaModificar";
import MedicacionActivaAlta from "../Screens/Paciente/MiExpediente/MedicacionActiva/MedicacionActivaAlta";
import Contactanos from "../Screens/Generales/Contactanos";
import ContactosEmergenciaAlta from "../Screens/Paciente/ContactosEmergencia/ContactosEmergenciaAlta";

{
  /* Profile */
}
import myProfile from "../Screens/Profile/myProfile";

{
  /* Contact */
}
import Contact from "../Screens/Contact/Contact";
import ContactoDeEmergia from "../Screens/Contact/ContactoDeEmergia";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PerfilPaciente"
        component={PerfilPaciente}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Alergias"
        component={Alergias}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AlergiasModificar"
        component={AlergiasModificar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AlergiasAlta"
        component={AlergiasAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnfermedadesCronicas"
        component={EnfermedadesCronicas}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnfermedadesCronicasModificar"
        component={EnfermedadesCronicasModificar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnfermedadesCronicasAlta"
        component={EnfermedadesCronicasAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PantallaPrueba"
        component={Prueba}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActividadFisica"
        component={ActividadFisica}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActividadFisicaAlta"
        component={ActividadFisicaAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActividadFisicaModificar"
        component={ActividadFisicaModificar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomePaciente"
        component={HomePaciente}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QR"
        component={QR}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDoctor"
        component={HomeDoctor}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PacienteMiExpedienteDir"
        component={PacienteMiExpedienteDir}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LectorQR"
        component={LectorQR}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TipoSangre"
        component={TipoSangre}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotasAlta"
        component={NotasAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Configuracion"
        component={Configuracion}
        options={{
          headerShown: false,
        }}
      />
      {/*Cirugias*/}
      <Stack.Screen
        name="Cirugias"
        component={Cirugias}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CirugiasAlta"
        component={CirugiasAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CirugiasModificar"
        component={CirugiasModificar}
        options={{
          headerShown: false,
        }}
      />
      {/*Peso y Estatura*/}
      <Stack.Screen
        name="PesoEstatura"
        component={PesoEstatura}
        options={{
          headerShown: false,
        }}
      />
      {/*Incidentes Recientes*/}
      <Stack.Screen
        name="IncidentesRecientes"
        component={IncidentesRecientes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IncidentesRecientesModificar"
        component={IncidentesRecientesModificar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IncidentesRecientesAlta"
        component={IncidentesRecientesAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MedicacionActiva"
        component={MedicacionActiva}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MedicacionActivaModificar"
        component={MedicacionActivaModificar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MedicacionActivaAlta"
        component={MedicacionActivaAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contacto"
        component={Contactanos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ContactosEmergenciaAlta"
        component={ContactosEmergenciaAlta}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="myProfile"
        component={myProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ContactoDeEmergia"
        component={ContactoDeEmergia}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
