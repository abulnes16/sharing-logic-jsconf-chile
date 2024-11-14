import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import { CartScreen, HomeScreen } from '@mobile/screens';
import { COLORS, Localization } from '@e-commerce-sharling-logic/ui';
import { NavigationIcon } from '@mobile/components';
import { RouteProp } from '@react-navigation/native';

type HomeTabsParamList = {
  Home: undefined;
  Cart: undefined;
};

const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

const setupNavigationIcon = (
  route: RouteProp<HomeTabsParamList, keyof HomeTabsParamList>,
  props: { focused: boolean; color: string; size: number }
) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Cart':
      iconName = 'cart';
      break;
  }

  return <NavigationIcon {...props} name={iconName} />;
};

export const HomeNavigator = () => {
  2;
  return (
    <HomeTabs.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => setupNavigationIcon(route, props),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.darkText,
        headerShown: false,
        sceneStyle: {
          backgroundColor: COLORS.white,
        },
      })}
    >
      <HomeTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: Localization.navigation.home,
          tabBarIcon: (props) => <NavigationIcon {...props} name="home" />,
        }}
      />
      <HomeTabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: Localization.navigation.cart,
          tabBarIcon: (props) => <NavigationIcon {...props} name="cart" />,
        }}
      />
    </HomeTabs.Navigator>
  );
};
