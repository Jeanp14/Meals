import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}: any) => {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData: any) => {
        return(
            <MealItem title={itemData.item.title}/>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
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

export default MealsOverviewScreen;