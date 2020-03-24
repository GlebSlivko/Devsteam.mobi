import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {fetchPosts} from "../redux/actions/allPostsActions";

const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const getAllPosts = useCallback(() => {
        dispatch(fetchPosts());
    }, []);

    useEffect(() => {
        getAllPosts();
    }, []);

    const allPostsfromStore = useSelector(
        (state) => state.allPostsReducer.allPosts
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    {allPostsfromStore.map(item =>
                        <View style={styles.galleryItem} key={item.id}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Details', {id: item.id})
                                }>
                                <Image
                                    style={styles.image}
                                    source={{uri: item.urls.small}}
                                />
                            </TouchableOpacity>
                            <Text>
                                {item.user.name}
                            </Text>
                            <Text>
                                {item.user.username}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

HomeScreen.navigationOptions = {
    header: null,
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },
    galleryItem: {
        width: '42%',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
