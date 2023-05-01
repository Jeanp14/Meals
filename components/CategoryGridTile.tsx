import { View, Pressable, Text } from "react-native";

function CategoryGridTile({title, color}: {title: string, color: string}){
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;