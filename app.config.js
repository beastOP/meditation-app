export default {
  expo: {
    scheme: "meditaion",
    web: {
      bundler: "metro",
    },
    name: "13 Min Meditation",
    slug: "13-min-meditation",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    splash: {
      image: "./assets/images/splash.png",
      backgroundColor: "#0a0a0a",
      resizeMode: "cover",
    },
    platforms: ["ios", "android", "web"],
    android: {
      icon: "./assets/images/adaptive-icon.png",
      package: "com.meditation",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.meditation",
      googleServicesFile: process.env.GOOGLE_SERVICES_INFO_PLIST,
    },
    plugins: ["@react-native-google-signin/google-signin"],
    extra: {
      eas: {
        projectId: "03ad4f20-b415-496e-85a7-a2e38c2411c7",
      },
      pubKey: "pk_test_ZW1lcmdpbmctZm94aG91bmQtMS5jbGVyay5hY2NvdW50cy5kZXYk",
    },
    owner: "omkarpatil",
  },
};
