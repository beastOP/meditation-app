import { Pressable, View } from "react-native";
// import { useAuth } from "../../hooks/auth";
import Container from "../../components/container";
import Header from "../../components/header";
import Title from "../../components/title";
import Button from "../../components/button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebaseConfig";
// import SignInWithOAuth from "../../components/firebase-auth";

export default function Page() {
  const { signOut } = useAuth();
  const router = useRouter();

  const createSomething = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <Container>
      <Header>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Pressable onPress={router.back}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Title>Profile</Title>
        </View>
      </Header>
      <View
        style={{
          flex: 1,
        }}
      >
        <Button onPress={() => createSomething()}>Create</Button>
      </View>
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
}
