import { Pressable, View, Text, Platform } from "react-native";
import Container from "../../components/container";
import Header from "../../components/header";
import Title from "../../components/title";
import Button from "../../components/button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Avatar from "../../components/avatar";

export default function Page() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Pressable
            style={{
              backgroundColor: "#2a2a2a",
              padding: 6,
              borderRadius: 10,
            }}
            onPress={router.back}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Title>Profile</Title>
        </View>
      </Header>
      <View
        style={{
          flex: 1,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Avatar
            url={user.imageUrl}
            name={user.fullName}
            size={100}
            backgroundColor="lightblue"
          />
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "Inter_600SemiBold",
                color: "white",
                fontSize: Platform.OS === "ios" ? 24 : 18,
              }}
            >
              {user.fullName}
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Inter_400Regular",
                color: "#a0a0a0",
                fontSize: Platform.OS === "ios" ? 16 : 12,
              }}
            >
              {user.primaryEmailAddress.emailAddress}
            </Text>
          </View>
        </View>
      </View>
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
}
