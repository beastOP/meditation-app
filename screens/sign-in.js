import Container from "../components/container";
import Header from "../components/header";
import Title from "../components/title";
import SignInWithOAuth from "../components/clerk-auth";

export default function AuthSignInPage() {
  return (
    <Container>
      <Header>
        <Title>Sign In</Title>
      </Header>
      <SignInWithOAuth />
    </Container>
  );
}
