import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router'; // Importamos `router` de expo-router
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image, // Importamos Image para la imagen
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const ForgotPasswordScreen: React.FC = () => {
  // Eliminamos useNavigation ya que usaremos router
  // const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleResetPassword = async () => {
    if (!email.trim()) { // Usamos trim() para validar que no sea solo espacios en blanco
      Alert.alert('Campo incompleto', 'Por favor, ingresa tu dirección de email.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, introduce un correo electrónico válido.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula tiempo de espera de API
      Alert.alert(
        'Instrucciones Enviadas',
        'Si tu email está registrado, recibirás instrucciones para restablecer tu contraseña.'
      );
      router.push('/Login'); // Redirigir a la pantalla de Login
    } catch (error) {
      console.error('Error durante el restablecimiento de contraseña:', error);
      Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
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
      <View style={styles.passwordResetCard}> {/* Cambiado de 'card' a 'passwordResetCard' para mayor claridad */}
        <View style={styles.imageSection}>
          <Image
            source={require('../../assets/images/login.png')} // Ruta de la imagen del login
            style={styles.gymImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
          <Text style={styles.subtitle}>
            Ingresa tu dirección de email y te enviaremos instrucciones para restablecerla.
          </Text>

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

            <TouchableOpacity style={styles.sendButton} onPress={handleResetPassword} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Enviar instrucciones</Text>
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.backToLoginText}>
            ¿Recordaste tu contraseña?{' '}
            <TouchableOpacity onPress={() => router.push('/Login')} disabled={loading}> {/* Usamos router.push */}
              <Text style={styles.loginLink}>
                Inicia sesión
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Ajustado a 10 para consistencia con Login/Register
  },
  passwordResetCard: { // Nuevo estilo para la tarjeta de restablecimiento de contraseña
    flexDirection: width > 600 ? 'row' : 'column', // Responsive layout
    width: '100%',
    maxWidth: 900, // Consistente con Login/Register
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
    minHeight: 200, // Consistente con Register
  },
  gymImage: {
    width: '100%',
    height: '100%',
  },
  formSection: {
    flex: 1,
    padding: 25, // Ajustado a 25 para consistencia con Register
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
    marginBottom: 20, // Ajustado a 20 para consistencia
  },
  form: {
    marginBottom: 15, // Ajustado a 15 para consistencia
  },
  label: {
    marginBottom: 6, // Ajustado a 6 para consistencia
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: 10, // Ajustado a 10 para consistencia
    paddingHorizontal: 15,
    marginBottom: 12, // Ajustado a 12 para consistencia
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 12, // Ajustado a 12 para consistencia
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 10, // Ajustado a 10 para consistencia
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToLoginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 20, // Ajustado a 20 para consistencia
  },
  loginLink: {
    color: '#ff4500',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});