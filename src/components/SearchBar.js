import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Icon name="search" size={30} />
            <Text>SearchBar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    },
});

export default SearchBar;
