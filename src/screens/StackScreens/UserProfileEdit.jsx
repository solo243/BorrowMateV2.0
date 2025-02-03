import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import TextInputFields from '../../components/TextInputFields';
import { Color } from '../../constants/Colors';
import Toast from 'react-native-toast-message';


const UserProfileEdit = ({ navigation }) => {



  const handlePress = async () => {
    try {
      Toast.show({
        type: 'success',
        text1: "Changes Saved Successfully!",
      })
      navigation.goBack();
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={{ width: '100%', paddingHorizontal: 15, flexDirection: 'row', gap: 10, paddingVertical: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Edit Profile</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ paddingBottom: 30 }}>
          <Image source={{ uri: "https://i.pinimg.com/originals/f2/d0/ac/f2d0ac079588297a2bd818a4c061ec71.jpg" }}
            style={{ height: 100, width: 100, borderRadius: 100, alignSelf: 'center', marginTop: 10 }} />
        </View>
        <View style={{ gap: 17, paddingBottom: 30 }}>
          <TextInputFields Label={"Name"} value={"Harshil Rana"} />
          <TextInputFields Label={"Email Id"} value={"ranaharshil2437@gmail.com"} />
          <TextInputFields Label={"Mobile Number"} value={"8866475326"} />
          <TextInputFields Label={"Location"} value={"11,gokul kunj apt,goti sheri,khadia,ahmedabd,380001"} />
        </View>
        <TouchableOpacity onPress={handlePress} activeOpacity={1} style={{ width: '90%', backgroundColor: Color.secondary, paddingVertical: 20, borderRadius: 10, borderCurve: 'continuous', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: Color.white, fontSize: 18, fontWeight: 'bold' }}>Save Changes</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default UserProfileEdit