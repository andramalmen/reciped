import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.strMealThumb }} />
            <Text style={styles.name}>{result.strMeal}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    },
});

export default ResultDetails;
