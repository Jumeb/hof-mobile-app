import React from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Favourite.styles';
import {BestFavourite, FavouriteCard, NavBar, Text} from '../../Components';
import bakers from '../../../resources/Dummy/bakers.json';
import best from '../../../resources/Dummy/best.json';

const Favourite = () => {
  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.pastriesContainer}>
            <Text style={styles.topPastries}>Top Favourites</Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
            data={best}
            renderItem={({item, key}) => (
              <BestFavourite data={item} onPress={() => Actions.pastryInfo()} />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={() => <View style={styles.footerStyle} />}
          />
        </View>
        <Text style={styles.varietyText}>My Favourites</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="favourite" pop={true} right={true} search={true} />
      <FlatList
        ListHeaderComponent={renderHeader()}
        horizontal={false}
        numColumns={1}
        data={bakers}
        renderItem={({item, key}) => (
          <FavouriteCard key={key} onPress={() => Actions.pastryInfo()} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        key={'flat'}
        // onScrollBeginDrag={(event) => handle(event)}
        // onScrollEndDrag={(event) => hide(event)}
      />
    </SafeAreaView>
  );
};

export default Favourite;
