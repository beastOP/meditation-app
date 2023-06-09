import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import Button from "./button";
import { useRouter } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  const router = useRouter();
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          // redirectUrl: "/",
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log("Sign in or sign up");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow, router]);

  return <Button onPress={() => onPress()}>Sign In</Button>;
};

export default SignInWithOAuth;
