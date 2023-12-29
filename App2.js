import { Image, Stylesheet, View } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: "100%",
                    height: 180,
                    borderWidth: 2,
                    borderColor: "red",
                }}
                source={{
                    uri: "https://www.gonext.com/wp-content/uploads/2022/05/Stockholm.jpg"
                }}
            />
        </View>
    );
};


const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default App;