import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import Button from "./button";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  const [token, setToken] = React.useState(null);
  useWarmUpBrowser();
  // const onPress = React.useCallback(async () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "694296451161-10qbre0pe0faubv4c6aals46bg2r1akp.apps.googleusercontent.com",
    iosClientId:
      "694296451161-7l1njg2j8bjaok3bd8q97o281gkt4tm6.apps.googleusercontent.com",
    expoClientId:
      "694296451161-r1el7q2ti2l3ii4t0gil7geslred6ubb.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      scheme: "meditation",
    }),
  });
  // }, []);

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      console.log(response);
      getUserInfo();
    }
  }, [response, token]);

  return <Button onPress={() => promptAsync()}>Sign In</Button>;
};

export default SignInWithOAuth;
