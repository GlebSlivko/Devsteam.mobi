import * as React from 'react';
import {StyleSheet,  View, Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {fetchCategories,fetchCurrentFilter} from "../redux/actions/categoriesActions";
import {fetchPosts} from "../redux/actions/allPostsActions";
import MultiSelect from 'react-native-multiple-select';

export default function FiltersScreen({navigation}) {
    const dispatch = useDispatch();
    const [selectedItems,setSelectedItems] = useState([0]);

    const onSelectedItemsChange = addItems => {
        setSelectedItems(addItems);
    };

    const getCategories = useCallback(() => {
        dispatch(fetchCategories());
    }, []);

    useEffect(() => {
        getCategories();
        dispatch(fetchCurrentFilter(selectedItems));
    }, []);

    const category = useSelector(
        (state) => state.categoriesReducer.categories
    );

    const inputData = (post) => {
      let inputData = post.map((item,id) => {
          item.id = id;
          item.name = item.strCategory;
          return item
        });
      return inputData
    };

    const apply = () => {
       let lastIndex = selectedItems.slice(-1)[0];
        const filter = category.filter((el,index) => index === lastIndex );
        let filterName = filter[0].strCategory;
        dispatch(fetchPosts(filterName));
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <MultiSelect
                hideTags
                items={category ? inputData(category) : null}
                uniqueKey="id"
                onToggleList
                hideDropdown
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Find category"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={ (text)=> console.log(text)}
                altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
                hideSubmitButton
            >
            </MultiSelect>
            <Button
                title="Apply"
                color="#000000"
                onPress={() => apply()}
            />
        </View>
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
