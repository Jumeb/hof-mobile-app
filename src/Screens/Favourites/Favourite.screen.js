import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Favourite.styles';
import {
  BestFavourite,
  DeleteModal,
  FavouriteCard,
  NavBar,
  Notification,
  Text,
} from '../../Components';
import bakers from '../../../resources/Dummy/bakers.json';
import best from '../../../resources/Dummy/best.json';
import {connect} from 'react-redux';

const Favourite = (props) => {
  const {i18n} = props;
  const [info, setInfo] = useState(false);
  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState('');
  const [_delete, setDelete] = useState(false);

  const SetInfo = () => {
    setInfo(true);
  };

  const SetDelete = () => {
    setDelete(true);
    setMsg(i18n.t('phrases.removedFromFavourites'));
  };

  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.pastriesContainer}>
            <Text style={styles.topPastries}>
              {i18n.t('phrases.topFavourites')}
            </Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
            data={best}
            renderItem={({item, key}) => (
              <BestFavourite
                data={item}
                onPress={() => Actions.pastryInfo()}
                setDelete={SetDelete}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={() => <View style={styles.footerStyle} />}
          />
        </View>
        <Text style={styles.varietyText}>{i18n.t('phrases.myFavourites')}</Text>
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
          <FavouriteCard
            key={key}
            onPress={() => Actions.pastryInfo()}
            setDelete={SetDelete}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        key={'flat'}
        // onScrollBeginDrag={(event) => handle(event)}
        // onScrollEndDrag={(event) => hide(event)}
      />
      <DeleteModal
        _delete={_delete}
        setDelete={setDelete}
        setNotify={setNotify}
        location={'favourites'}
      />
      <Notification
        notify={notify}
        setNotify={setNotify}
        msg={msg}
        type={'success'}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};
export default connect(mapStateToProps)(Favourite);
