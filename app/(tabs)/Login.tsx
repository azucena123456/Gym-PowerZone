import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  onLogin,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width >= 768);

  useEffect(() => {
    const updateDimension = () => {
      setIsLargeScreen(Dimensions.get('window').width >= 768);
    };

    Dimensions.addEventListener('change', updateDimension);

    return () => {
      Dimensions.removeEventListener('change', updateDimension);
    };
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (email === 'usuario@ejemplo.com' && password === 'password123') {
        Alert.alert('Inicio de Sesión Exitoso', '¡Bienvenido!');
        onLogin();
        router.replace('/Store');
      } else {
        Alert.alert('Error de Inicio de Sesión', 'Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  const navigateToRegister = () => {
    router.push('/Register');
  };

  const navigateToForgotPassword = () => {
    router.push('/ForgotPassword');
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
          styles.loginCard,
          !isLargeScreen && styles.loginCardSmallScreen
        ]}>
          <View style={[
            styles.formSection,
            !isLargeScreen && styles.formSectionSmallScreen
          ]}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Bienvenido de nuevo, ingrese sus datos por favor</Text>

            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="tu@email.com"
                placeholderTextColor="#aaa"
                editable={!loading}
              />

              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="********"
                placeholderTextColor="#aaa"
                editable={!loading}
              />

              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkboxTouchArea}
                  onPress={() => setRememberMe(!rememberMe)}
                  disabled={loading}
                >
                  <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Recordar</Text>
                <TouchableOpacity
                  onPress={navigateToForgotPassword}
                  disabled={loading}
                >
                  <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Ingresar</Text>
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.signupText}>
              ¿No tienes cuenta?{' '}
              <TouchableOpacity onPress={navigateToRegister} disabled={loading}>
                <Text style={styles.registerLink}>Regístrate</Text>
              </TouchableOpacity>
            </Text>
          </View>

          {isLargeScreen && (
            <View style={styles.imageSection}>
              <Image
                source={require('../../assets/images/login.png')}
                style={styles.gymImage}
                resizeMode="cover"
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 900,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  loginCardSmallScreen: {
    flexDirection: 'column',
    maxWidth: '95%',
  },
  formSection: {
    flex: 1,
    minWidth: 395,
    padding: 20,
    justifyContent: 'center',
  },
  formSectionSmallScreen: {
    minWidth: 'auto',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 25,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxTouchArea: {
    padding: 5,
    marginRight: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#ff4500',
    borderColor: '#ff4500',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#555',
    marginRight: 'auto',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#ff4500',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    color: '#ff4500',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  imageSection: {
    flex: 1,
    minWidth: 300,
    minHeight: 300,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gymImage: {
    width: '100%',
    height: '100%',
  },
});