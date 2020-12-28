import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Alert, StyleSheet, Dimensions,Modal,Image, Platform, TextInput, Text  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import {createTodo} from '../graphql/mutations';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');


function createTaskScreen() {

    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync();
    }, []);


    const [date, setDate] = useState('');
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false);
    const [datetimepicker, setDateTimePicker] = useState(false);
    const [todoname, setTodoName] = useState('');
    const [tododesc, setTodoDesc] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const navigation = useNavigation();

    const showDatetimePicker = () => {
        setDateTimePicker(true);
    }


    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    }


    const showDatePicker = () => {
        showMode('date');
    }

    const hideDateTimePicker = () => {
        setDateTimePicker(false);
    }

    const _handleDatePicked = (pickeddate: any) => {
        const day   = pickeddate.getDate();
        const month = pickeddate.getMonth();
        const year  = pickeddate.getFullYear();
        console.log(pickeddate);
        console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        const exdate = day + '-' + month + '-' + year
        setDate(pickeddate);
        hideDateTimePicker();
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setImageUrl(result.uri);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }

    const uploadImage = async () => {
        try {

            const response = await fetch(imageUrl);

            const blob = await response.blob();

            const urlParts = imageUrl.split('.');
            const extension = urlParts[urlParts.length - 1];

            const key = `${uuidv4()}.${extension}`;

            await Storage.put(key, blob);

            return key;
        } catch (e) {
            console.log(e);
        }

        return '';
    }


    const addTodo = async () => {

        let image;
        if (!!imageUrl) {
            image = await uploadImage();
        }

        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });


        const todoinfo = await API.graphql(graphqlOperation(createTodo, {
            input: {
                name: todoname,
                description: tododesc,
                userID: userInfo.attributes.sub,
                image: image,
                completed: false
            }
        }));

        console.log(todoinfo);

        setTodoName('');
        setTodoDesc('');

        setImageUrl('');

        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Button
                onPress={() => navigation.goBack()}
                icon={
                    <MaterialCommunityIcons name="keyboard-backspace" size={35} color="#0384fc" />
                }
                buttonStyle={{ width: 50, height: 50, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginHorizontal: 15, marginTop: 10, }}
                />
            </View>

            <View style={styles.lowerContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25,}}>
                    Create your task
                </Text>
                <Input
                autoFocus={true}
                containerStyle={{
                    marginHorizontal: 10,

                }}
                placeholder='Name of your Task'
                value={todoname}
                onChange={(text: any) => setTodoName(text)}
                errorStyle={{ color: '#fc0303', fontWeight: 'bold', fontSize: 14 }}
                errorMessage='ENTER A VALID ERROR HERE'
                />

                <Input
                autoFocus={true}
                containerStyle={{
                    marginHorizontal: 10,

                }}
                value={tododesc}
                onChange={(text: any) => setTodoDesc(text)}
                placeholder='Describe your Task'
                errorStyle={{ color: '#fc0303', fontWeight: 'bold', fontSize: 14 }}
                errorMessage='ENTER A VALID ERROR HERE'
                />

                <Input 
                placeholder="Start Date"
                onFocus={showDatetimePicker}
                value={date}
                editable={true}
                />
                
                <DateTimePicker
                isVisible={datetimepicker}
                onCancel={hideDateTimePicker}
                onConfirm={_handleDatePicked}
                mode={'date'}
                />

                <Button
                    icon={
                        <Feather name="upload" size={24} color="white" />
                    }
                    onPress={pickImage}
                    buttonStyle={{
                    // backgroundColor: Colors.light.tint,
                    borderRadius: 20,
                    width: 150,
                    margin: 10,
                    }}
                />

                <Image source={{ uri: imageUrl }} style={{ width: width / 2, height: 180,}} />

                <TouchableHighlight
                onPress={() => {
                setModalVisible(true);
                }}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </TouchableHighlight>
                <Button
                    title="Create Task"
                    onPress={addTodo}
                    buttonStyle={{
                    // backgroundColor: Colors.light.tint,
                    borderRadius: 20,
                    width: 150,
                    margin: 10,
                    }}
                />
            </View>

            <View>
            <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableNativeFeedback
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Modal>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white',
    },

    upperContainer: {
        width: width,
        height: 100,
        justifyContent: 'center',
    },

    lowerContainer: {
        width: width -10,
        height: height -80,
        marginHorizontal: 10,
        alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

export default createTaskScreen;