import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useSearchRecipes from '../hooks/useSearchRecipes';

import Results from '../components/Results';

const Home = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const [shouldFetch, setShouldFetch] = React.useState(false);
    const [, error] = useSearchRecipes(shouldFetch, searchTerm);

    const searchTermSubmit = () => {
        setShouldFetch(true);
    };

    return (
        <View style={styles.background}>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onSearchTermSubmit={searchTermSubmit}
            />
            {error ? <Text>Something went wrong</Text> : null}
            <ScrollView>
                <Results title="Chicken" />
                <Results title="Pork" />
                <Results title="Beef" />
                <Results title="Seafood" />
                <Results title="Vegetarian" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: 10,
    },
});
export default Home;
