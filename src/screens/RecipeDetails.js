import * as React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import useSearchRecipeById from '../hooks/useSearchRecipeById';

const RecipeDetails = ({ route }) => {
    const recipeId = route.params.id;
    const [data, error] = useSearchRecipeById(recipeId);

    if (error) {
        return <Text>Something went wrong</Text>;
    }

    if (!data) {
        return null;
    }

    const result = data.meals[0];
    const {
        strMeal: name,
        strArea: category,
        strMealThumb: image,
        strInstructions: description,
        strYoutube: youtubeLink,
        strSource: source,
    } = result;

    const openURL = url => {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    const ingredients = [];
    for (var i = 1; i <= 20; i++) {
        if (!result[`strIngredient${i}`]) {
            break;
        }

        ingredients.push({
            ingredient: result[`strIngredient${i}`],
            measure: result[`strMeasure${i}`],
        });
    }

    return (
        <ScrollView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
            <Text style={styles.title}>{name}</Text>
            <Text style={[styles.subtitle, styles.category]}>{category}</Text>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.subtitle}>Ingredients</Text>
            <View style={styles.ingredientsWrapper}>
                {ingredients.map((item, index) => {
                    return (
                        <View style={styles.ingredientContainer} key={index}>
                            <Text style={styles.ingredient}>{item.ingredient}</Text>
                            <Text>{item.measure}</Text>
                        </View>
                    );
                })}
            </View>

            <Text style={[styles.subtitle, styles.separator]}>How to prepare</Text>
            <Text>{description}</Text>
            <View style={[styles.separator, styles.linkContainer]}>
                <TouchableOpacity onPress={() => openURL(youtubeLink)}>
                    <Text style={styles.link}>See video on Youtube</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openURL(source)}>
                    <Text style={styles.link}>Source</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    category: {
        fontStyle: 'italic',
        textDecorationLine: 'none',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    ingredientsWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    ingredientContainer: {
        flexDirection: 'row',
        width: '50%',
        marginBottom: 5,
    },
    ingredient: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    separator: {
        marginTop: 10,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link: {
        color: 'salmon',
    },
});

export default RecipeDetails;
