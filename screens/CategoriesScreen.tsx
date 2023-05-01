import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData: any){
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

export default function CategoriesScreen(){
    return(
        <View>

        </View>
    )
}

 