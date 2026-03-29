import {Text, View} from "react-native";
import {Link} from "expo-router";

const SignInView = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href="/(auth)/sign-in">
        Create an account
      </Link>
    </View>
  )
}

export default SignInView;