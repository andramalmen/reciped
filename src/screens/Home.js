import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const Home = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <View style={styles.background}>
            <Text>Home</Text>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onSearchTermSubmit={() => console.log('search was submitted')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
});
export default Home;
