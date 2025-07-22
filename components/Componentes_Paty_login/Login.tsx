// Login.tsx
import { LinearGradient } from 'expo-linear-gradient'; // Importa LinearGradient para el degradado
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

interface LoginScreenProps {
  // Prop que se llama al iniciar sesión correctamente (para cerrar el overlay o navegar).
  onLogin: () => void;
  // Nueva prop para manejar la navegación a la pantalla de registro.
  onNavigateToRegister: () => void;
}

/**
 * Componente de la pantalla de inicio de sesión.
 * Permite al usuario ingresar credenciales y tiene un fondo con degradado.
 */
const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Estado para el indicador de carga

  /**
   * Maneja el intento de inicio de sesión.
   * Simula una autenticación y llama a la prop 'onLogin' si es exitosa.
   */
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true); // Activa el indicador de carga

    // Simulación de una llamada a la API de autenticación
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos

      if (email === 'usuario@ejemplo.com' && password === 'password123') {
        Alert.alert('Inicio de Sesión Exitoso', '¡Bienvenido!');
        onLogin(); // Llama a la prop para cerrar el overlay o navegar
      } else {
        Alert.alert('Error de Inicio de Sesión', 'Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false); // Desactiva el indicador de carga
    }
  };

  /**
   * Maneja el intento de inicio de sesión con Google.
   * Es un marcador de posición para la integración real.
   */
  const handleGoogleLogin = () => {
    Alert.alert('Inicio con Google', 'Funcionalidad no implementada.');
  };

  return (
    // Usamos LinearGradient como contenedor principal para aplicar el degradado de fondo
    <LinearGradient
      // Colores del degradado ajustados para un tono oscuro con matices rojizos/granates
      colors={['#000000', '#330000', '#1a0000']}
      style={styles.container} // Aplica los estilos del contenedor (flex: 1, centrado, padding) al gradiente
      start={{ x: 0, y: 0 }} // Punto de inicio del degradado (arriba izquierda)
      end={{ x: 1, y: 1 }}   // Punto final del degradado (abajo derecha), creando un efecto diagonal
    >
      <View style={styles.loginCard}>
        {/* Sección Izquierda: Formulario de Inicio de Sesión */}
        <View style={styles.formSection}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Bienvenido de nuevo, ingrese sus datos por favor</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address" // Teclado optimizado para emails
              autoCapitalize="none" // No capitalizar automáticamente
              placeholder="tu@email.com"
              placeholderTextColor="#aaa"
              editable={!loading} // Deshabilita la edición mientras carga
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry // Oculta el texto de la contraseña
              placeholder="********"
              placeholderTextColor="#aaa"
              editable={!loading} // Deshabilita la edición mientras carga
            />

            <View style={styles.checkboxContainer}>
              {/* TouchableOpacity para un área táctil más grande para el checkbox */}
              <TouchableOpacity
                style={styles.checkboxTouchArea}
                onPress={() => setRememberMe(!rememberMe)}
                disabled={loading} // Deshabilita mientras carga
              >
                {/* View que simula el checkbox, cambia de estilo al marcarse */}
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>Recordar</Text>
              {/* Enlace para "¿Olvidaste la contraseña?" */}
              <TouchableOpacity onPress={() => Alert.alert('Recuperar contraseña', 'Funcionalidad no implementada.')} disabled={loading}>
                <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
              </TouchableOpacity>
            </View>

            {/* Botón de Ingresar */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" /> // Muestra el indicador de carga
              ) : (
                <Text style={styles.buttonText}>Ingresar</Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.googleLoginButton} onPress={handleGoogleLogin} disabled={loading}>
  <View style={styles.googleButtonContent}>
    <Image
      source={require('../../assets/images/image.png')}
      style={styles.googleIcon}
    />
    <Text style={styles.buttonText}>Ingresar con Google</Text>
  </View>
</TouchableOpacity>

          {/* Texto y enlace para registrarse */}
          <Text style={styles.signupText}>
            ¿No tienes cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={onNavigateToRegister} // Llama a la prop para navegar a la pantalla de Registro
              disabled={loading} // Deshabilita el enlace mientras carga
            >
              Regístrate
            </Text>
          </Text>
        </View>

        {/* Sección Derecha: Imagen */}
        <View style={styles.imageSection}>
          {/* La imagen se carga desde una ruta local. Asegúrate de que la ruta sea correcta para tu imagen. */}
          <Image
            source={require('../../assets/images/login.png')} // Ruta de la imagen del gimnasio
            style={styles.gymImage}
            resizeMode="cover" // Ajusta la imagen para cubrir el área sin distorsión
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

// Estilos para el componente LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible en la pantalla
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    padding: 20, // Espaciado alrededor de la tarjeta de login
  },
  loginCard: {
    flexDirection: 'row', // Organiza el formulario y la imagen en fila
    width: width > 900 ? 900 : '95%', // Ancho máximo de 900px para pantallas grandes, 95% para pequeñas
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden', // Asegura que el contenido respete los bordes redondeados
    elevation: 10, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  formSection: {
    flex: 1, // Ocupa la mitad del espacio horizontal disponible
    padding: 30,
    justifyContent: 'center', // Centra el contenido del formulario verticalmente
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
    padding: 5, // Aumenta el área táctil para facilitar la interacción
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
    backgroundColor: '#ff4500', // Color naranja cuando el checkbox está marcado
    borderColor: '#ff4500',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#555',
    marginRight: 'auto', // Empuja el enlace "¿Olvidaste la contraseña?" a la derecha
  },
  forgotPassword: {
    fontSize: 14,
    color: '#ff4500',
    textDecorationLine: 'underline', // Subraya el texto
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
    marginBottom: 25,
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
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  gymImage: {
    width: '100%',
    height: '100%',
  },
  googleLoginButton: {
  backgroundColor: '#333',
  paddingVertical: 12,
  paddingHorizontal: 20,
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
  width: 30,       // tamaño más compacto
  height: 18,
  marginRight: 10,
  resizeMode: 'contain',
},
});
