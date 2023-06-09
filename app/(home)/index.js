import { useRef, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Link } from "expo-router";
import LottieView from "lottie-react-native";
import { Audio } from "expo-av";
import Container from "../../components/container";
import Header from "../../components/header";
import Title from "../../components/title";
import Avatar from "../../components/avatar";
import Button from "../../components/button";
import { useUser } from "@clerk/clerk-expo";

export default function Page() {
  const [sound, setSound] = useState(null);
  const [time, setTime] = useState("13:00");
  const [active, setActive] = useState(false);
  const { user } = useUser();
  const interval = useRef(null);
  const animation = useRef(null);

  const playAudio = async () => {
    try {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require("../../assets/audio.mp3"),
        {
          shouldPlay: true,
          isLooping: true,
        }
      );
      setSound(audioSound);
      await audioSound.playAsync();
    } catch (error) {
      console.log("Error playing audio", error);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
  };

  function startTimer() {
    animation.current?.reset();
    animation.current?.play();
    playAudio();

    setActive(true);
    interval.current = setInterval(() => {
      setTime((oldTime) => {
        const [minutes, seconds] = oldTime.split(":").map((x) => parseInt(x));

        if (minutes === 0 && seconds === 0) {
          clearInterval(interval.current);
          stopTimer();
          return "00:00";
        }

        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newMinutes -= 1;
          newSeconds = 59;
        }

        return `${newMinutes.toString().padStart(2, "0")}:${newSeconds
          .toString()
          .padStart(2, "0")}`;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval.current);
    animation.current?.pause();
    stopAudio();
    setActive(false);
    setTime("13:00");
  }

  return (
    <Container>
      <Header>
        <Title>Meditate</Title>
        <Link href="/profile">
          <Avatar name="Omkar Patil" size={40} backgroundColor="lightblue" />
        </Link>
      </Header>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          loop
          ref={animation}
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../../assets/meditation-man.json")}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{time}</Text>
        </View>
        <Button
          onPress={active ? stopTimer : startTimer}
          buttonStyle={{
            backgroundColor: !active ? "#d6d3d1" : "#27272a",
          }}
          textStyle={{
            color: active ? "white" : "#0c0a09",
          }}
        >
          {active ? "Stop" : "Start"}
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    maxWidth: 940,
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: Platform.OS === "ios" ? 64 : 40,
    alignSelf: "center",
    fontVariant: ["tabular-nums"],
    fontFamily: "Inter_600SemiBold",
    color: "white",
  },
});
