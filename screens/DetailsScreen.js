import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {fetchPost} from "../redux/actions/postActions";

export default function DetailsScreen({route}) {

    const dispatch = useDispatch();

    const getPost = useCallback(() => {
        dispatch(fetchPost(route.params.id));
    }, []);

    useEffect(() => {
        getPost();
    }, []);

    const post = useSelector(
        (state) => state.postReducer.post
    );

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>

            {post ?
                <View>
                    <Image
                        style={{width: 500, height: 500}}
                        source={{uri: post.urls.regular}}
                    />
                    <Text style={styles.text}>{post.alt_description}</Text>
                </View>
                : <View/>}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    text: {
        marginRight: "auto",
        marginLeft: "auto"
    }
});
