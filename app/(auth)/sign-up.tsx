import {Text, View} from "react-native";
import {Link} from "expo-router";

const SignUpView = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-up">
        Login
      </Link>
    </View>
  )
}

export default SignUpView;