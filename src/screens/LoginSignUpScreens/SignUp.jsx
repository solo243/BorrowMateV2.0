import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { Color, Gray } from "../../constants/Colors";
import InputText from "../../components/SignInSignUp/TextInput";
import { signUpFunction } from "../../firebase/firebase.function";
import { getAuth } from "firebase/auth";

const SignUp = ({ navigation }) => {
  const [Username, setUsername] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);

  const handlePress = () => {
    if (Username && Email && Password) {
      signUpFunction(Email, Password);
    } else {
      console.log("Please fill all the fields");
    }
  };

  const auth = getAuth();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ paddingTop: 20, gap: 4 }}>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 21, fontWeight: "500" }}
          >
            Welcome to BorrowBuddy
          </Text>
          <Text style={{ paddingStart: 25, fontSize: 16, color: Gray.gray600 }}>
            Sign up to get started
          </Text>
        </View>

        <View style={{ gap: 15, paddingTop: 45 }}>
          <InputText
            placeholder={"username"}
            lable={"First Name"}
            maxLength={12}
            setter={setUsername}
          />
          <InputText
            placeholder={"Enter your EmailID here.."}
            lable={"Email Id"}
            inputMode={"email"}
            setter={setEmail}
          />
          <InputText
            placeholder={"password"}
            lable={"Password"}
            secureTextEntry={true}
            setter={setPassword}
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
              alignItems: "center",
              alignSelf: "center",
              paddingBottom: 15,
              justifyContent: "center"
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.secondary,
                  fontWeight: "600"
                }}
              >
                {"  "}Login!
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handlePress}
            style={{
              width: "90%",
              backgroundColor: Color.secondary,
              paddingVertical: 17,
              borderRadius: 10,
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
