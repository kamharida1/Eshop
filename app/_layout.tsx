import { StyleSheet, View } from 'react-native';
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Header from '../src/components/Header';
import { StatusBar } from "expo-status-bar";
import { Slot, usePathname } from 'expo-router';
import { colors } from '../src/styles/constants';

function routeMapping(pathname: string) {
  switch (pathname) {
    case '/':
      return 'Guest List';
    case '/new-guest':
      return 'New Guest';
    default:
      return '';
  }
}

export default function HomeLayout() {
  const pathname = usePathname();
  const label = routeMapping(pathname)
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Header label={label} />
        <StatusBar style="auto" />
        <View style={styles.slot}>
          <Slot />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 40,
  },
  slot: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
});