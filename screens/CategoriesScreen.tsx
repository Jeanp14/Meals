import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData: any) => {
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

const CategoriesScreen = () => {
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
