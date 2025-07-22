import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Campo incompleto', 'Por favor, ingresa tu dirección de email.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      Alert.alert(
        'Instrucciones Enviadas',
        'Si tu email está registrado, recibirás instrucciones para restablecer tu contraseña.'
      );
      navigation.navigate('Login' as never);
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
      <View style={styles.card}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Login' as never)} disabled={loading}>
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
    padding: 20,
  },
  card: {
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
  sendButton: {
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
  backToLoginText: {
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
