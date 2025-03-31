import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { CategorieData } from "../../constants/CateforiesData";
import { Gray } from "../../constants/Colors";

const YourComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            maxWidth: 250,
            alignSelf: "center",
            fontWeight: "600",
            paddingTop: 30
          }}
        >
          Hello, what are you posting today?
        </Text>
        <Text
          style={{
            paddingBottom: 25,
            alignSelf: "center",
            paddingTop: 10,
            fontSize: 16,
            color: Gray.gray500
          }}
        >
          Select the area that best suits your product
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "80%",
            alignSelf: "center",
            gap: 10
          }}
        >
          {CategorieData.map((item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("screen2", { category: item.cate })
              }
              key={item.id || index}
              style={{
                backgroundColor: item.bg,
                padding: 10,
                width: "48%",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: 130
              }}
            >
              {item.icon}
              <Text
                style={{ color: Gray.gray700, fontSize: 16, fontWeight: "500" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    backgroundColor: "white",
    flex: 1
  },
  innerContainer: {
    flex: 1
  },
  header: {
    width: "100%",
    alignItems: "center"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500"
  },
  categoryContainer: {
    flex: 1,
    borderTopWidth: 1,
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  categoryItem: {
    width: "50%",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
    borderBottomWidth: 1
  },
  rightBorder: {
    borderRightWidth: 1
  },
  lastRowBorder: {
    borderBottomWidth: 1
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "400"
  }
});

export default YourComponent;
