import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputText from "../../components/SignInSignUp/TextInput";
import { Color, Gray } from "../../constants/Colors";
import { signInFunction } from "../../firebase/firebase.function";

const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const handlePress = () => {
    try {
      if (Email && Password) {
        signInFunction(Email, Password);
        
      } else {
        console.log("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 25 }}>
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 21, fontWeight: "500" }}
          >
            welcome Back To BorrowBuddy{" "}
          </Text>
          <Text style={{ paddingStart: 25, fontSize: 16 }}>
            Sign in to continue
          </Text>
        </View>
        <View style={{ flex: 1, paddingTop: 45, gap: 20 }}>
          <InputText
            setter={setEmail}
            lable={"Email"}
            placeholder={"Enter your Email Id here..."}
            inputMode="email"
          />
          <InputText
            setter={setPassword}
            lable={"Password"}
            placeholder={"Enter your password here..."}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            alignItems: "baseline",
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 30
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 15,
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <Text>Create an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.secondary,
                  fontWeight: "600"
                }}
              >
                {"  "}SignUp!
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: Color.secondary,
              paddingVertical: 17,
              borderRadius: 10,
              alignSelf: "center",
              alignItems: "center"
            }}
            onPress={handlePress}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
