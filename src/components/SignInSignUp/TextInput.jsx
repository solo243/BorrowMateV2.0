import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Gray } from "../../constants/Colors";

const InputText = ({
  lable,
  placeholder,
  secureTextEntry = false,
  inputMode = "text",
  maxLength,
  setter
}) => {
  return (
    <View style={style.mainCont}>
      <Text style={style.lableText}>{lable}</Text>
      <TextInput
        onChangeText={(text) => setter(text)}
        cursorColor={"gray"}
        inputMode={inputMode}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={style.inputText}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainCont: {
    paddingHorizontal: 25,
    // paddingTop: 10,
    gap: 8
  },
  lableText: {
    fontSize: 15,
    color: Gray.gray600
  },
  inputText: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    borderColor: Gray.gray400,
    borderRadius: 8,
    borderWidth: 1
  }
});
export default InputText;
