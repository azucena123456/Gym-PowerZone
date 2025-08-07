import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [lastNamePaternal, setLastNamePaternal] = useState('');
  const [lastNameMaternal, setLastNameMaternal] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const [passwordButtonError, setPasswordButtonError] = useState('');

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
  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width >= 768);

  useEffect(() => {
    const updateDimension = () => {
      setIsLargeScreen(Dimensions.get('window').width >= 768);
    };

    const dimensionListener = Dimensions.addEventListener('change', updateDimension);

    return () => {
      dimensionListener.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      clearForm();
      return () => {};
    }, [])
  );

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhoneNumber = (phone: string) => /^\d{10}$/.test(phone);

  const clearForm = () => {
    setName('');
    setLastNamePaternal('');
    setLastNameMaternal('');
    setEmail('');
    setPassword('');
    setPasswordError('');
    setFormError('');
    setPasswordButtonError('');
    setPhoneNumber('');
    setAddressType('');
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setReferences('');
    setCurrentStep(1);
    setShowPassword(false);
  };

  const handleNextStep = () => {
    setFormError('');
    setPasswordButtonError('');
    if (currentStep === 1) {
      if (!name || !lastNamePaternal || !lastNameMaternal || !email || !password) {
        setFormError('Por favor, completa todos los campos de información personal.');
        return;
      }
      if (!validateEmail(email)) {
        setFormError('Por favor, introduce un correo electrónico válido.');
        return;
      }
      if (password.length < 8 || password.length > 10) {
        setPasswordError('La contraseña debe tener entre 8 a 10 caracteres.');
        setPasswordButtonError('La contraseña no cumple los requisitos.');
        return;
      }
      setPasswordError('');
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!phoneNumber || !addressType || !street) {
        setFormError('Por favor, completa todos los campos de contacto y dirección básica.');
        return;
      }
      if (!validatePhoneNumber(phoneNumber)) {
        setFormError('Introduce un número de 10 dígitos válido.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePreviousStep = () => {
    setFormError('');
    setPasswordButtonError('');
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleRegister = async () => {
    setFormError('');
    setPasswordButtonError('');

    if (!city || !state || !zipCode || !references) {
      setFormError('Por favor, completa todos los campos de detalles de dirección y referencias.');
      return;
    }
    if (!/^\d{5}$/.test(zipCode)) {
      setFormError('El Código Postal debe ser numérico y tener 5 dígitos.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormError('');
      clearForm();
      router.replace('/Login');
    } catch (error) {
      console.error('Error durante el registro:', error);
      setFormError('Ocurrió un error inesperado durante el registro.');
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={[
          styles.registerCard,
          !isLargeScreen && styles.registerCardSmallScreen,
          isLargeScreen && styles.registerCardLargeScreen
        ]}>
          {isLargeScreen && (
            <View style={styles.imageSection}>
              <Image source={require('../../assets/images/login.png')} style={styles.gymImage} resizeMode="cover" />
            </View>
          )}

          <View style={[
            styles.formSection,
            !isLargeScreen && styles.formSectionSmallScreen
          ]}>
            <View style={styles.formContentContainer}>
              <Text style={styles.title}>Bienvenido</Text>
              <Text style={styles.subtitle}>Bienvenido a Gym-powerZone, ingresa tus datos por favor</Text>

              {currentStep === 1 && (
                <View style={[styles.formStepContent, styles.formStepContentFixedSize]}>
                  <Text style={[styles.sectionTitle, !isLargeScreen && styles.sectionTitleSmallScreen]}>Información Personal</Text>
                  <Text style={styles.label}>Nombre(s)</Text>
                  <TextInput
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={name}
                    onChangeText={setName}
                    placeholder="Tu nombre(s)"
                    placeholderTextColor="#aaa"
                  />

                  <Text style={styles.label}>Apellido Paterno</Text>
                  <TextInput
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={lastNamePaternal}
                    onChangeText={setLastNamePaternal}
                    placeholder="Tu apellido paterno"
                    placeholderTextColor="#aaa"
                  />

                  <Text style={styles.label}>Apellido Materno</Text>
                  <TextInput
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={lastNameMaternal}
                    onChangeText={setLastNameMaternal}
                    placeholder="Tu apellido materno"
                    placeholderTextColor="#aaa"
                  />

                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="tu@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                  />

                  <Text style={styles.label}>Contraseña</Text>
                  <View style={[styles.passwordInputContainer, !isLargeScreen && styles.inputSmallScreen]}>
                    <TextInput
                      style={styles.passwordInput}
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                        if (passwordError) setPasswordError('');
                        if (formError) setFormError('');
                        if (passwordButtonError) setPasswordButtonError('');
                      }}
                      secureTextEntry={!showPassword}
                      placeholder=""
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
                  {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>
              )}

              {currentStep === 2 && (
                <View style={[styles.formStepContent, styles.formStepContentFixedSize]}>
                  <Text style={[styles.sectionTitle, !isLargeScreen && styles.sectionTitleSmallScreen]}>Información de Contacto y Dirección Básica</Text>
                  <Text style={styles.label}>Teléfono</Text>
                  <TextInput
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={phoneNumber}
                    onChangeText={(text) => {
                      const cleaned = text.replace(/[^0-9]/g, '');
                      setPhoneNumber(cleaned.slice(0, 10));
                      if (formError) setFormError('');
                    }}
                    keyboardType="phone-pad"
                    maxLength={10}
                    placeholder="Ej. 5512345678"
                    placeholderTextColor="#aaa"
                  />

                  <Text style={styles.label}>Tipo de Dirección</Text>
                  <View style={[styles.pickerContainer, !isLargeScreen && styles.inputSmallScreen]}>
                    <Picker
                      selectedValue={addressType}
                      onValueChange={(itemValue) => {
                        setAddressType(itemValue);
                        if (formError) setFormError('');
                      }}
                      style={[styles.picker, !isLargeScreen && styles.pickerSmallScreen]}
                      dropdownIconColor="#333"
                      itemStyle={!isLargeScreen ? styles.pickerItemSmallScreen : null}
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
                    style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                    value={street}
                    onChangeText={(text) => {
                      setStreet(text);
                      if (formError) setFormError('');
                    }}
                    placeholder="Ej. Av. Siempre Viva 742"
                    placeholderTextColor="#aaa"
                  />
                </View>
              )}

              {currentStep === 3 && (
                <ScrollView
                  style={styles.formScrollView}
                  contentContainerStyle={styles.formScrollViewContent}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                >
                  <View style={[styles.formStepContent, styles.formStepContentFixedSize]}>
                    <Text style={[styles.sectionTitle, !isLargeScreen && styles.sectionTitleSmallScreen]}>Detalles de Dirección y Referencias</Text>

                    <View style={[styles.twoColumnRow, !isLargeScreen && styles.twoColumnRowSmallScreen]}>
                      <View style={[styles.columnField, !isLargeScreen && styles.columnFieldSmallScreen]}>
                        <Text style={styles.label}>Ciudad</Text>
                        <TextInput
                          style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                          value={city}
                          onChangeText={(text) => {
                            setCity(text);
                            if (formError) setFormError('');
                          }}
                          placeholder="Ej. Springfield"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                      <View style={[styles.columnFieldLast, !isLargeScreen && styles.columnFieldSmallScreen]}>
                        <Text style={styles.label}>Estado</Text>
                        <TextInput
                          style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                          value={state}
                          onChangeText={(text) => {
                            setState(text);
                            if (formError) setFormError('');
                          }}
                          placeholder="Ej. Oaxaca"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                    </View>

                    <View style={[styles.twoColumnRow, !isLargeScreen && styles.twoColumnRowSmallScreen]}>
                      <View style={[styles.columnField, !isLargeScreen && styles.columnFieldSmallScreen]}>
                        <Text style={styles.label}>Código Postal</Text>
                        <TextInput
                          style={[styles.input, !isLargeScreen && styles.inputSmallScreen]}
                          value={zipCode}
                          onChangeText={(text) => {
                            const cleaned = text.replace(/[^0-9]/g, '');
                            setZipCode(cleaned.slice(0, 5));
                            if (formError) setFormError('');
                          }}
                          keyboardType="numeric"
                          maxLength={5}
                          placeholder="Ej. 12345"
                          placeholderTextColor="#aaa"
                        />
                      </View>
                      <View style={[styles.columnFieldLast, !isLargeScreen && styles.columnFieldSmallScreen]}>
                        {/* Empty column */}
                      </View>
                    </View>

                    <Text style={styles.label}>Referencias de Dirección</Text>
                    <TextInput
                      style={[styles.input, !isLargeScreen && styles.inputSmallScreen, styles.multilineInput]}
                      value={references}
                      onChangeText={(text) => {
                        setReferences(text);
                        if (formError) setFormError('');
                      }}
                      placeholder="Casa con portón rojo, a lado de la farmacia"
                      multiline
                      numberOfLines={3}
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </ScrollView>
              )}
            </View>

            {formError && !passwordButtonError ? <Text style={styles.formErrorText}>{formError}</Text> : null}

            <View style={[
              styles.navigationButtonsContainer,
              currentStep === 1 ? styles.justifyEnd : styles.justifyBetween
            ]}>
              {currentStep === 1 && passwordButtonError ? (
                <Text style={styles.passwordButtonErrorText}>{passwordButtonError}</Text>
              ) : null}

              {currentStep > 1 && (
                <TouchableOpacity style={styles.smallNavButton} onPress={handlePreviousStep} disabled={loading}>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M15 18l-6-6 6-6" />
                  </Svg>
                  <Text style={[styles.buttonText, { marginLeft: 2, fontSize: 14 }]}>Anterior</Text>
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
                  <Text style={[styles.buttonText, { marginRight: 2, fontSize: 14 }]}>Siguiente</Text>
                  <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M9 18l6-6-6-6" />
                  </Svg>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.registerButton,
                    styles.registerButtonFixed,
                    currentStep > 1 ? styles.marginLeft : {}
                  ]}
                  onPress={handleRegister}
                  disabled={loading}
                >
                  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Registrar</Text>}
                </TouchableOpacity>
              )}
            </View>

            <Text style={styles.loginText}>
              ¿Ya tienes cuenta?{' '}
              <TouchableOpacity onPress={() => router.push('/Login')} disabled={loading}>
                <Text style={styles.loginLink}>Inicia sesión</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerCard: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 900,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    minHeight: 500,
  },
  registerCardLargeScreen: {
    width: 900,
    height: 600,
  },
  registerCardSmallScreen: {
    flexDirection: 'column',
    width: '90%',
    maxHeight: '85%',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    marginVertical: 0,
    minHeight: 500,
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
    padding: 20,
    justifyContent: 'space-between',
    minHeight: 450,
  },
  formSectionSmallScreen: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'flex-start',
  },
  formContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formStepContent: {
    flex: 1,
    minHeight: 300,
  },
  formStepContentFixedSize: {
    height: 350,
    minHeight: undefined,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 2,
    marginBottom: 5,
    fontSize: 15,
    color: '#666',
  },
  sectionTitleSmallScreen: {
    marginBottom: 5,
    fontSize: 10,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
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
  inputSmallScreen: {
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 5,
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
    marginBottom: 10,
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
  pickerSmallScreen: {
    height: 50,
  },
  pickerItemSmallScreen: {
    fontSize: 15,
  },
  twoColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  twoColumnRowSmallScreen: {
    flexDirection: 'column',
  },
  columnField: {
    flex: 1,
    marginRight: 10,
  },
  columnFieldLast: {
    flex: 1,
    marginRight: 0,
  },
  columnFieldSmallScreen: {
    width: '100%',
    marginRight: 0,
    marginBottom: 10,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
  registerButtonFixed: {
    width: 150,
    flex: undefined,
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
  errorText: {
    color: '#ff4500',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
  formErrorText: {
    color: '#ff4500',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  passwordButtonErrorText: {
    color: '#ff4500',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
  },
});