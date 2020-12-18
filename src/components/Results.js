import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import useSearchByCategory from '../hooks/useSearchByCategory';
import ResultDetails from './ResultDetails';

const Results = ({ title }) => {
    const [data, error] = useSearchByCategory(title);

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
                    return <ResultDetails result={item} />;
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
