import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import useSearchByCategory from '../hooks/useSearchByCategory';
import ResultDetails from './ResultDetails';

const Results = ({ title }) => {
    const [data, error] = useSearchByCategory(title);
    const navigation = useNavigation();

    if (error) {
        return <Text>Something went wrong</Text>;
    }

    if (!data) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data.meals}
                keyExtractor={result => result.idMeal}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('RecipeDetails', {
                                    id: item.idMeal,
                                    name: item.strMeal,
                                })
                            }
                        >
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default Results;
