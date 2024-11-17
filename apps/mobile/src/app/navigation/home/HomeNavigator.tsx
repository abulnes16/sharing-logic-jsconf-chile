import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartScreen, ProfileScreen } from '@mobile/screens';
import { COLORS, Localization } from '@e-commerce-sharling-logic/ui';
import { NavigationIcon } from '@mobile/components';
import { RouteProp } from '@react-navigation/native';
import { ProductNavigator } from './ProductsNavigator';
import { CartNavigator } from './CartNavigator';

export type HomeTabsParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
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
    case 'Profile':
      iconName = 'person';
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
        component={ProductNavigator}
        options={{
          tabBarLabel: Localization.navigation.home,
        }}
      />
      <HomeTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarLabel: Localization.navigation.cart,
        }}
      />
      <HomeTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: Localization.navigation.profile,
        }}
      />
    </HomeTabs.Navigator>
  );
};
