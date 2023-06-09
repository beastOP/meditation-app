import { Stack } from "expo-router";

const HomeLayout = () => {
  // const { isSignedIn } = useUser();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    />
  );
  // isSignedIn ? (
  // <Stack
  //   screenOptions={{
  //     headerShown: false,
  //     animation: "slide_from_right",
  //   }}
  // />;
  // ) : (
  //   <AuthSignInPage />
  // );
};

export default HomeLayout;
