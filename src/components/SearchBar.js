import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Icon name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search recipes"
                style={styles.inputStyle}
                value={searchTerm}
                onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
                onEndEditing={onSearchTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;
