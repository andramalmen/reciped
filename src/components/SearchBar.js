import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>SearchBar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
    },
});

export default SearchBar;
