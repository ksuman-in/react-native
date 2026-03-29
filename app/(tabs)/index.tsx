import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onboarding"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Go To Onboarding Screen
      </Link>

      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Create an account
      </Link>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Login
      </Link>

      <Link
        href={"/(tabs)/subscriptions/suman"}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Subscription for Suman
      </Link>

      <Link
        href={{
          pathname: "/(tabs)/subscriptions",
          params: {
            id: "claude",
          },
        }}
        className="mt-4 p-4 bg-primary text-white rounded"
      >
        Subscription for Claude
      </Link>
    </SafeAreaView>
  );
}
