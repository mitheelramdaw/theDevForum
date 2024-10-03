import { Text, View, Alert, Pressable, Image } from "react-native";

export default function Index() {

  const handleLoginPress = () => {
    Alert.alert("Logging In ... ");
  };

  const handleSignUpPress = () => {
    Alert.alert("Signing Up ... ");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", 
      }}
    >
      {/* Ensure the image path is correct */}
      <Image 
        source={require('../assets/images/logo.png')}
        style={{ 
          width: 100,
          height: 100,
          borderRadius: 15,
          marginBottom: 20,
        }}
      />

      {/* Ensure text is correctly wrapped in a <Text> component */}
      <Text 
        style={{
          color: "grey",
        }}
      >
        To ask is to know
      </Text>

      {/* Login Button */}
      <Pressable
        onPress={handleLoginPress}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 20,
          borderColor: "black",
          backgroundColor: "grey",
          borderRadius: 20,
        }}
      >
        {/* Ensure button text is within <Text> */}
        <Text style={{ color: "black" }}>Log In</Text>
      </Pressable>

      {/* Sign Up Button */}
      <Pressable 
        onPress={handleSignUpPress}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 20,
          borderColor: "black",
          backgroundColor: "grey",
          borderRadius: 20,
        }}
      >
        {/* Ensure button text is within <Text> */}
        <Text style={{ color: "black" }}>Sign Up</Text>
      </Pressable>
     
    </View>
  );
}
