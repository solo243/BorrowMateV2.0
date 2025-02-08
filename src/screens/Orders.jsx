import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { Data } from "../constants/SampleData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Color, Gray } from "../constants/Colors";

const Orders = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",

              color: "black",
              textAlign: "center",
              paddingBottom: 25,
            }}
          >
            My Posts
          </Text>
        </View>
        <View
          style={{ width: "100%", paddingHorizontal: 20, alignItems: "center" }}
        >
          <View
            style={{
              width: "100%",
              borderRadius: 7,
              borderCurve: "continuous",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                height: 180,
                backgroundColor: "pink",
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
              }}
            />
            <View style={{ paddingVertical: 14, paddingHorizontal: 14 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                $ 1200 / month
              </Text>
              <Text
                style={{
                  maxWidth: 250,
                  fontSize: 16,
                  paddingTop: 10,
                  fontWeight: "400",
                  color: Gray.gray600,
                }}
              >
                Hero Honda Bike with 6 Gear in Best condition
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={{ width: '100%', paddingHorizontal: 10 }}>
                    <FlatList
                        numColumns={2}
                        data={[1, 2, 3, 4, 5, 6]} renderItem={({ item }) => {
                            <TouchableOpacity onPress={() => navigation.navigate("Details")} style={style.mainCardCont} >
                                <View style={style.productCard}>
                                    <Image
                                        resizeMethod='cover'

                                        source={{ uri: Data.image }}
                                        style={style.ProImage} />
                                    <TouchableOpacity style={style.heartIcon}>
                                        <Ionicons name="heart" size={23} color={Color.cherryRed} />
                                    </TouchableOpacity>
                                    <View style={{ paddingHorizontal: 4 }}>
                                        <Text numberOfLines={2} style={style.productTitle}>
                                            {Data.title ? Data.title : "Not Available"}
                                        </Text>
                                        <View style={style.priceRow}>
                                            <Text style={style.productPrice}>$ {Data.price ? Data.price : "null"} </Text>
                                            <Text style={style.discountPrice}>/{""} month</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity >
                        }} />
                </View> */}
      </View>
    </SafeAreaView>
  );
};

const style = {
  productImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },

  mainCardCont: {
    flex: 1,
    maxWidth: Dimensions.get("window").width * 0.5,
    borderRightWidth: 1,
    // borderTopWidth: 1.5,
    // borderWidth: 1,
    paddingTop: 20,
    // paddingBottom: 10,
    borderColor: "#0000001A",

    // borderColor: Gray.gray200,
    alignItems: "center",
    padding: 7,
    borderBottomWidth: 1,
  },
  productCard: {
    borderRadius: 10,
    borderCurve: "continuous",
    width: "100%",
    paddingHorizontal: 10,
    // padding: 10,
    gap: 10,
  },
  ProImage: {
    height: 200,
    borderRadius: 10,
    width: "100%",
    borderCurve: "continuous",
    resizeMode: "contain",
    backgroundColor: Gray.gray100,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: Gray.gray700,
  },
  priceRow: {
    flexDirection: "row",
    // gap: 10,backg
    // backgroundColor: 'red',
    // paddingVertical: 5,
    paddingTop: 4.5,
    alignItems: "center",
  },
  productPrice: {
    fontSize: 15.5,
    fontWeight: "700",
  },
  discountPrice: {
    color: "gray",
  },
  heartIcon: {
    padding: 5,
    // backgroundColor: Gray.gray300,
    borderRadius: 200,
    position: "absolute",
    right: 10,
  },
};

export default Orders;
