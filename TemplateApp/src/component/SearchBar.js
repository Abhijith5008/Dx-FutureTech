import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { styles } from '../styles/global.style';

const SearchBar = ({ placeholder, onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchText);
        }
    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder || 'Search...'}
                placeholderTextColor={"#1a2a6c"}
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Ionicons name="search" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;
