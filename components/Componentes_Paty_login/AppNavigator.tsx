// AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login'; // Ajusta rutas si es necesario
import RegisterScreen from './Register'; // Ajusta rutas si es necesario

const Stack = createNativeStackNavigator();

/**
 * Componente Wrapper para LoginScreen para pasar las props de navegación.
 * @param {any} { navigation } El objeto de navegación de React Navigation.
 */
const LoginScreenWrapper = ({ navigation }: any) => {
  return (
    <LoginScreen
      onLogin={() => {
        // Aquí puedes navegar a otra pantalla principal después de un login exitoso.
        // Por ejemplo: navigation.navigate('Home');
        console.log('Inicio de sesión exitoso');
      }}
      onNavigateToRegister={() => navigation.navigate('Register')}
    />
  );
};

/**
 * Componente principal de navegación de la aplicación.
 * Define las rutas y los componentes asociados.
 */
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* La pantalla de Login usa el Wrapper para manejar las props */}
        <Stack.Screen name="Login" component={LoginScreenWrapper} />
        {/* La pantalla de Register se usa directamente */}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
