import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CategorieData } from '../../constants/CateforiesData';

const YourComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Select Category</Text>
                </View>

                <View style={styles.categoryContainer}>
                    {CategorieData.map((item, index) => {
                        const isLastRow = index >= CategorieData.length - (CategorieData.length % 2 || 2);

                        return (
                            <TouchableOpacity
                                key={item.id || index}
                                onPress={() => navigation.navigate("screen2", { cate: item.cate })}
                                style={[
                                    styles.categoryItem,
                                    index % 2 === 0 && styles.rightBorder,
                                    isLastRow && styles.lastRowBorder,
                                ]}
                            >
                                {item.icon}
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        backgroundColor: 'white',
        flex: 1
    },
    innerContainer: {
        flex: 1,
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
    },
    categoryContainer: {
        flex: 1,
        borderTopWidth: 1,
        marginTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryItem: {
        width: '50%',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        borderBottomWidth: 1,
    },
    rightBorder: {
        borderRightWidth: 1,
    },
    lastRowBorder: {
        borderBottomWidth: 1,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '400',
    },
});

export default YourComponent;
