import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { MEALS } from '../data/dummyData';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({route, navigation}: any) => {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    let foundMeal = <View><Text>Meal was not found</Text></View>;

    if(selectedMeal){
        foundMeal = <MealDetails 
                        duration={selectedMeal?.duration} 
                        complexity={selectedMeal?.complexity} 
                        affordability={selectedMeal?.affordability}
                        textStyle={styles.detailText}
                    />
    }

    const headerButtonPressedHandler = () => {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='white' onPress={headerButtonPressedHandler}/>
            }
        })
    }, [navigation, headerButtonPressedHandler])

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            {foundMeal}

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal?.ingredients}/>
                
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal?.steps}/>
                </View>
            </View>
            
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        //width: '80%',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    listContainer: {
        width: '80%',
    }
})


export default MealDetailScreen;