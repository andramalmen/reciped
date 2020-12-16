import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <View style={styles.background}>
            <Text>Home</Text>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
});
export default Home;
