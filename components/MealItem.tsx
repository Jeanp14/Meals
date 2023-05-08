import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}: any) => {

    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail' as never, {mealId: id} as never);
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
                style={({pressed}) =>  (pressed ? styles.buttonPressed : null)} 
                android_ripple={{color: "#ccc"}}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
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

export default MealItem;