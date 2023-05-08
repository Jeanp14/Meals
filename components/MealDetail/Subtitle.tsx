import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({children}: any) => {
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e2b497',
        textAlign: 'center',
    },
    subtitleContainer: {
        //margin: 4,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497'
    }
})

export default Subtitle;