import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";



const CategoriesScreen = ({navigation}: any) => {

    const renderCategoryItem = (itemData: any) => {

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
        }
    
        return(
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler}
            />
        )
    }

    return(
        <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        />
    );
}

export default CategoriesScreen;
