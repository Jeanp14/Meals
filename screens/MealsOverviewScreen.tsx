import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import Category from '../models/category';
import Meal from '../models/meal';
//import Category from "../models/category";

const MealsOverviewScreen = ({route, navigation}: any) => {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {

        const categoryTitle = CATEGORIES.find((category: Category) => category.id === catId)?.title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

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