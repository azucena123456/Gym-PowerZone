import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const RegisterScreen: React.FC = () => {

  const [name, setName] = useState('');
  const [lastNamePaternal, setLastNamePaternal] = useState('');
  const [lastNameMaternal, setLastNameMaternal] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressType, setAddressType] = useState('');
  const [street, setStreet] = useState('');

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [references, setReferences] = useState('');

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); 

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhoneNumber = (phone: string) => /^\+?[0-9\s-]{7,15}$/.test(phone);

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!name || !lastNamePaternal || !lastNameMaternal || !email || !password) {
        Alert.alert('Campos incompletos', 'Por favor, completa todos los campos de información personal.');
        return;
      }
      if (!validateEmail(email)) {
        Alert.alert('Email inválido', 'Por favor, introduce un correo electrónico válido.');
        return;
      }
      if (password.length < 6 || password.length > 8) {
        Alert.alert('Contraseña inválida', 'La contraseña debe tener entre 6 y 8 caracteres.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!phoneNumber || !addressType || !street) {
        Alert.alert('Campos incompletos', 'Por favor, completa todos los campos de contacto y dirección básica.');
        return;
      }
      if (!validatePhoneNumber(phoneNumber)) {
        Alert.alert('Número de teléfono inválido', 'Introduce un número válido (7 a 15 dígitos).');
        return;
      }
      setCurrentStep(3); 
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleRegister = async () => {
    if (!city || !state || !zipCode || !references) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos de detalles de dirección y referencias.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      Alert.alert('Registro Exitoso', '¡Tu cuenta ha sido creada con éxito!');
      router.replace('/Store');
    } catch (error) {
      console.error('Error durante el registro:', error);
      Alert.alert('Error', 'Ocurrió un error inesperado durante el registro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#330000', '#1a0000']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.registerCard}>
        <View style={styles.imageSection}>
          <Image source={require('../../assets/images/login.png')} style={styles.gymImage} resizeMode="cover" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Bienvenido a Gym-powerZone, ingresa tus datos por favor</Text>

          {currentStep === 1 && (
            <View style={styles.staticFormContent}>
              <Text style={[styles.sectionTitle]}>Información Personal</Text>
              <Text style={styles.label}>Nombre(s)</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Tu nombre(s)"
                placeholderTextColor="#aaa"
              />

              <Text style={styles.label}>Apellido Paterno</Text>
              <TextInput
                style={styles.input}
                value={lastNamePaternal}
                onChangeText={setLastNamePaternal}
                placeholder="Tu apellido paterno"
                placeholderTextColor="#aaa"
              />

              <Text style={styles.label}>Apellido Materno</Text>
              <TextInput
                style={styles.input}
                value={lastNameMaternal}
                onChangeText={setLastNameMaternal}
                placeholder="Tu apellido materno"
                placeholderTextColor="#aaa"
              />

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="tu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
              />

              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="********"
                  placeholderTextColor="#aaa"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                    ) : (
                      <>
                        <Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <Path d="M1 1l22 22" />
                      </>
                    )}
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {currentStep !== 1 && (
            <ScrollView
              style={styles.formScrollView}
              contentContainerStyle={styles.scrollViewContent}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.form}>
                {currentStep === 2 && (
                  <>
                    <Text style={[styles.subtitle]}>Información de Contacto y Dirección Básica</Text>

                    <Text style={styles.label}>Teléfono</Text>
                    <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={(text) => {
                      const cleaned = text.replace(/[^0-9+\s-]/g, '');
                      setPhoneNumber(cleaned);
                    }}
                    keyboardType="phone-pad"
                    placeholder="Ej. +52 123 456 7890"
                    placeholderTextColor="#aaa"
                    />

                    <Text style={styles.label}>Tipo de Dirección</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={addressType}
                        onValueChange={(itemValue) => setAddressType(itemValue)}
                        style={styles.picker}
                        dropdownIconColor="#333"
                      >
                        <Picker.Item label="Seleccione una opción" value="" />
                        <Picker.Item label="Casa" value="Casa" />
                        <Picker.Item label="Oficina" value="Oficina" />
                        <Picker.Item label="Departamento" value="Departamento" />
                        <Picker.Item label="Bodega" value="Bodega" />
                        <Picker.Item label="Local Comercial" value="Local Comercial" />
                        <Picker.Item label="Consultorio" value="Consultorio" />
                        <Picker.Item label="Sucursal" value="Sucursal" />
                        <Picker.Item label="Otro" value="Otro" />
                      </Picker>
                    </View>

                    <Text style={styles.label}>Calle y Número</Text>
                    <TextInput
                      style={styles.input}
                      value={street}
                      onChangeText={setStreet}
                      placeholder="Ej. Av. Siempre Viva 742"
                      placeholderTextColor="#aaa"
                    />
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <Text style={[styles.sectionTitle]}>Detalles de Dirección y Referencias</Text>

                    <View style={styles.twoColumnRow}>
                      <View style={styles.columnField}>
                        <Text style={styles.label}>Ciudad</Text>
                        <TextInput
                          style={styles.input}
                          value={city}
                          onChangeText={setCity}
                          placeholder="Ej. Springfield"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                      <View style={styles.columnFieldLast}>
                        <Text style={styles.label}>Estado</Text>
                        <TextInput
                          style={styles.input}
                          value={state}
                          onChangeText={setState}
                          placeholder="Ej. Oaxaca"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                    </View>

                    <View style={styles.twoColumnRow}>
                      <View style={styles.columnField}>
                        <Text style={styles.label}>Código Postal</Text>
                        <TextInput
                          style={styles.input}
                          value={zipCode}
                          onChangeText={setZipCode}
                          keyboardType="numeric"
                          maxLength={5}
                          placeholder="Ej. 12345"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                      <View style={styles.columnFieldLast}>
                      </View>
                    </View>

                    <Text style={styles.label}>Referencias de Dirección</Text>
                    <TextInput
                      style={styles.input}
                      value={references}
                      onChangeText={setReferences}
                      placeholder="Casa con portón rojo, a lado de la farmacia"
                      multiline
                      numberOfLines={3}
                      placeholderTextColor="#aaa"
                    />
                  </>
                )}
              </View>
            </ScrollView>
          )}

          <View style={[
            styles.navigationButtonsContainer,
            currentStep === 1 ? styles.justifyEnd : styles.justifyBetween 
          ]}>
            {currentStep > 1 && (
              <TouchableOpacity style={styles.smallNavButton} onPress={handlePreviousStep} disabled={loading}>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <Path d="M15 18l-6-6 6-6" />
                </Svg>
                <Text style={[styles.buttonText, { marginLeft: 2, fontSize: 14 }]}></Text>
              </TouchableOpacity>
            )}

            {currentStep < 3 ? (
              <TouchableOpacity
                style={[
                  styles.smallNavButton,
                  currentStep > 1 ? styles.marginLeft : {} 
                ]}
                onPress={handleNextStep}
                disabled={loading}
              >
                <Text style={[styles.buttonText, { marginRight: 2, fontSize: 14 }]}></Text>
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <Path d="M9 18l6-6-6-6" />
                </Svg>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[
                  styles.registerButton,
                  currentStep > 1 ? styles.marginLeft : {}
                ]}
                onPress={handleRegister}
                disabled={loading}
              >
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Registrar</Text>}
              </TouchableOpacity>
            )}
          </View>

          {/* Login Link */}
          <Text style={styles.loginText}>
            ¿Ya tienes cuenta?{' '}
            <TouchableOpacity onPress={() => router.push('/Login')} disabled={loading}>
              <Text style={styles.loginLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  registerCard: {
    flexDirection: width > 600 ? 'row' : 'column',
    width: '100%',
    maxWidth: 900,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    flex: 1, 
  },
  imageSection: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200, 
  },
  gymImage: {
    width: '100%',
    height: '100%',
  },
  formSection: {
    flex: 1,
    padding: 25,
    justifyContent: 'space-between', 
  },
  staticFormContent: { 
    flexGrow: 0, 
    marginBottom: 15, 
  },
  formScrollView: {
    flex: 1, 
    marginBottom: 15, 
  },
  scrollViewContent: {
    flexGrow: 1, 
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
 subtitle: {
  fontSize: 19,
  color: '#666',
},
  label: {
    marginBottom: 3,
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  sectionTitle: {
  marginTop: 4,
  marginBottom: 8,
  fontSize: 17,
  color: '#666',
},
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  eyeIconContainer: {
    padding: 10,
  },
  pickerContainer: {
    paddingVertical: 0,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  twoColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  columnField: {
    flex: 1,
    marginRight: 10,
  },
  columnFieldLast: {
    flex: 1,
    marginRight: 0,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0, 
    marginBottom: 0,
    width: '100%',
    paddingHorizontal: 0,
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  marginLeft: {
    marginLeft: 10,
  },
 
  registerButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff4500',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    flex: 1,
  },
  smallNavButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff4500',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    width: 120, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  loginLink: {
    color: '#ff4500',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
