import React, { useState } from 'react';
import {
    FlatList,
    View,
    Dimensions
} from 'react-native';
import Data from '../data/content.json';
import { styles } from '../styles/global.style';
import TemplateCard from '../component/TemplateCard';
import SearchBar from '../component/SearchBar';

const { height } = Dimensions.get('window');

function Home() {
    const [data, setData] = useState(Data);

    const handleSearch = (query) => {
        console.log('Searching for:', query);
    };

    return (
        <View style={styles.container}>
            <SearchBar placeholder="Search in all Templates" onSearch={handleSearch} />
            <FlatList
                data={data}
                numColumns={1}
                style={{ marginBottom: height / 3 }}
                nestedScrollEnabled
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TemplateCard key={item.id} template={item} />
                )}
            />
        </View>
    );
};

export default Home;
