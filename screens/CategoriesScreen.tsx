import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData: any){
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

export default function CategoriesScreen(){
    return(
        <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        />
    )
}

