import { View, Text, StyleSheet } from 'react-native';

type MealDetailsProps = {
    duration: number,
    complexity: string,
    affordability: string,
    textStyle?: any
 }

const MealDetails = ({duration, complexity, affordability, textStyle}: MealDetailsProps) => {
    return(
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

export default MealDetails;