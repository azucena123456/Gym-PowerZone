// Register.tsx
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para la navegación
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

const { width } = Dimensions.get('window');

/**
 * Componente de la pantalla de registro.
 * Permite al usuario crear una nueva cuenta.
 */
const RegisterScreen: React.FC = () => {
  const navigation = useNavigation(); // Hook para acceder al objeto de navegación

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Maneja el intento de registro de un nuevo usuario.
   * Simula el proceso de registro y valida los campos.
   */
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Contraseñas no coinciden', 'La contraseña y la confirmación no coinciden.');
      return;
    }

    setLoading(true);

    // Simulación de una llamada a la API de registro
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos

      // Aquí iría tu lógica real para enviar los datos de registro a tu backend.
      // Por ahora, solo simulamos un registro exitoso.
      Alert.alert('Registro Exitoso', '¡Tu cuenta ha sido creada con éxito!');
      navigation.navigate('Login' as never); // Navega de vuelta a la pantalla de Login
    } catch (error) {
      console.error('Error durante el registro:', error);
      Alert.alert('Error', 'Ocurrió un error inesperado durante el registro. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Maneja el intento de registro con Google.
   */
  const handleGoogleRegister = () => {
    Alert.alert('Registro con Google', 'Funcionalidad no implementada.');
  };

  return (
    <LinearGradient
      colors={['#000000', '#330000', '#1a0000']} // Mismos colores de degradado que el login
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.registerCard}>
        {/* Sección Izquierda: Imagen */}
        <View style={styles.imageSection}>
          <Image
            source={require('../../assets/images/login.png')} // Ruta de la imagen de registro
            style={styles.gymImage}
            resizeMode="cover"
          />
        </View>

        {/* Sección Derecha: Formulario de Registro */}
        <View style={styles.formSection}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Bienvenido a Gym-powerZone, Ingrese sus datos por favor</Text>

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

            <Text style={styles.label}>Confirma Contraseña</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Registrar</Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.googleRegisterButton} onPress={handleGoogleRegister} disabled={loading}>
            <Text style={styles.buttonText}>Registrar con Google</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            ¿Ya tienes cuenta?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login' as never)} // Navega a la pantalla de Login
              disabled={loading}
            >
              Inicia sesion
            </Text>
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
    padding: 20,
  },
  registerCard: {
    flexDirection: 'row',
    width: width > 900 ? 900 : '95%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  imageSection: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  gymImage: {
    width: '100%',
    height: '100%',
  },
  formSection: {
    flex: 1,
    padding: 30,
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
  registerButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  googleRegisterButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 25,
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
  },
  loginLink: {
    color: '#ff4500',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
