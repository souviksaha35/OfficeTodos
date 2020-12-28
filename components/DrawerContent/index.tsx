import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
    Avatar
} from 'react-native-paper';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen');

export function DrawerContent(props) {

    // const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.upperContainer}>
                    <TouchableNativeFeedback>
                       <Avatar.Image style={{ marginLeft: 15, marginTop: -10,}} source={{ uri: 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280'}}/>
                    </TouchableNativeFeedback>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15, marginTop: 10,}}>
                        Souvik Saha
                    </Text>
                    <Text style={{ color: 'grey', marginLeft: 15, marginTop: 1,}}>
                        @SouvikS09785030
                    </Text>

                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontSize: 15, margin: 10, fontWeight: 'bold'}}>
                            0
                        </Text>
                        <Text style={{ marginRight: 10, marginBottom: 10, marginTop: 10}}>
                           Following
                        </Text>

                        <Text style={{ fontSize: 15, margin: 10, fontWeight: 'bold'}}>
                            0
                        </Text>
                        <TouchableNativeFeedback>
                            <Text style={{ marginRight: 10, marginBottom: 10, marginTop: 10}}>
                                Followers
                           </Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <View style={styles.upperSlider}/>

                <View style={styles.midContainer}>
                    <View>
                        <TouchableNativeFeedback>
                            <View style={{ flexDirection: 'row', height: height / 15,}}>
                                <MaterialIcons name="person-outline" style={{ margin: 15, }} size={28} color="grey" />
                                <Text style={{ fontSize: 15, margin: 15, marginLeft: -2,}}>
                                    Profile
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <View style={{ flexDirection: 'row',height: height / 15,}}>
                            <FontAwesome5 name="list-alt" size={24} style={{ margin: 15, }}color="grey" />
                                <Text style={{ fontSize: 15, margin: 15, marginLeft: -2,}}>
                                    Tasks
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <View style={{ flexDirection: 'row',height: height / 15,}}>
                            <AntDesign name="message1" size={24} style={{ margin: 15,}} color="grey" />
                                <Text style={{ fontSize: 15, margin: 15, marginLeft: -2,}}>
                                    Topics
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <View style={{ flexDirection: 'row',height: height / 15,}}>
                            <FontAwesome name="bookmark-o" size={24} style={{ margin: 15, }} color="grey" />
                                <Text style={{ fontSize: 15, margin: 15, marginLeft: -2,}}>
                                    Bookmarks
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <View style={{ flexDirection: 'row',height: height / 15,}}>
                            <MaterialCommunityIcons name="solar-power" style={{ margin: 15,}} size={24} color="grey" />
                                <Text style={{ fontSize: 15, margin: 15, marginLeft: -2,}}>
                                    Moments
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <View style={styles.upperSlider}/>
                <View>

                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    upperContainer: {
        height: height / 5,
    },

    upperSlider: {
        height: 0.3,
        width: width,
        backgroundColor: 'grey'
    },

    midContainer: {
        height: height / 3,
    }
})