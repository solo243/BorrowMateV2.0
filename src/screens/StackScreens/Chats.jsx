import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const Chats = () => {
  return (
    <SafeAreaView className="bg-white pt-10 flex-1">
      <View className="flex-1">
        <View className="w-full items-center flex-row justify-between px-4 py-2 ">
          <TouchableOpacity>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl">Messages</Text>
          <TouchableOpacity>
            <Text>{" "}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
