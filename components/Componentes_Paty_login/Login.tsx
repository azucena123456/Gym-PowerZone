import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

interface LoginScreenProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
  onNavigateToForgotPassword: () => void;  // <-- nueva prop para "Olvidé contraseña"
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  onLogin,
  onNavigateToRegister,
  onNavigateToForgotPassword,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleGoogleLogin = () => {
    Alert.alert('Inicio con Google', 'Funcionalidad no implementada.');
  };

  return (
    <LinearGradient
      colors={['#000000', '#330000', '#1a0000']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.loginCard}>
        <View style={styles.formSection}>
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
                onPress={onNavigateToForgotPassword}
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

          <TouchableOpacity style={styles.googleLoginButton} onPress={handleGoogleLogin} disabled={loading}>
            <View style={styles.googleButtonContent}>
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={styles.googleIcon}>
                <Path d="M22.47 12.21c0-.79-.07-1.54-.2-2.27H12v4.28h6.05c-.25 1.25-.97 2.32-2.06 3.03v2.79h3.59c2.1-1.93 3.31-4.77 3.31-8.03z" fill="#4285F4" />
                <Path d="M12 23c3.24 0 5.95-1.07 7.94-2.91L16.35 17.3c-1.12.75-2.58 1.19-4.35 1.19-3.34 0-6.17-2.25-7.2-5.28H1.2v2.88C3.25 20.66 7.37 23 12 23z" fill="#34A853" />
                <Path d="M4.8 14.18c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V7.4H1.2C.44 8.94 0 10.45 0 12c0 1.55.44 3.06 1.2 4.58L4.8 14.18z" fill="#FBBC05" />
                <Path d="M12 4.75c1.77 0 3.34.61 4.59 1.79l3.18-3.18C17.95 1.07 15.24 0 12 0 7.37 0 3.25 2.34 1.2 5.82L4.8 8.7C5.83 5.67 8.66 3.42 12 3.42z" fill="#EA4335" />
              </Svg>
              <Text style={styles.buttonText}>Ingresar con Google</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            ¿No tienes cuenta?{' '}
            <TouchableOpacity onPress={onNavigateToRegister} disabled={loading}>
              <Text style={styles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.gymImage}
            resizeMode="cover"
          />
        </View>
      </View>
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
  formSection: {
    flex: 1,
    minWidth: 300,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
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
  googleLoginButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
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
