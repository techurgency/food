import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const image = require('/Users/macbook/ReactNative/food/src/screens/background.jpg');

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <ImageBackground source={image} style={styles.image}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>
          <ResultsList
            results={filterResultsByPrice('$')}
            title="Budget Friendly"
          />
          <ResultsList results={filterResultsByPrice('$$')} title="Pricier" />
          <ResultsList
            results={filterResultsByPrice('$$$' || '$$$$')}
            title="Expensive"
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default SearchScreen;
