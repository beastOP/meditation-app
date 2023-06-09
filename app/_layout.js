import { Slot, SplashScreen } from "expo-router";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
// import { AuthProvider } from "../hooks/auth";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import AuthSignInPage from "../screens/sign-in";
import Constants from "expo-constants";

const CLERK_PUBLISHABLE_KEY = Constants.expoConfig.extra.pubKey;
function Root() {
  const [fontLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontLoaded) {
    return <SplashScreen />;
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
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
