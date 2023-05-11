import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import Meal from '../models/meal';

const MealsList = ({items}: any) => {

    const renderMealItem = (itemData: any) => {

        const item: Meal = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return(
            <MealItem 
                {...mealItemProps}
            />
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsList;