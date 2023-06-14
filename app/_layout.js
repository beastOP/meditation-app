import { Slot, SplashScreen } from "expo-router";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
// import { AuthProvider } from "../hooks/auth";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import AuthSignInPage from "../screens/sign-in";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const CLERK_PUBLISHABLE_KEY = Constants.expoConfig.extra.pubKey;
function Root() {
  const [fontLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontLoaded) {
    return <SplashScreen />;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Slot />
      </SignedIn>
      <SignedOut>
        <AuthSignInPage />
      </SignedOut>
    </ClerkProvider>
  );
  // return (
  //   <AuthProvider>
  //     <Slot />
  //   </AuthProvider>
  // );
}

export default Root;
