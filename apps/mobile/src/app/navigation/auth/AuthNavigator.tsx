import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens';

export type AuthStackScreenParams = {
  Login: undefined;
};

export const AuthStack = createNativeStackNavigator<AuthStackScreenParams>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      id={undefined}
      initialRouteName="Login"
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
