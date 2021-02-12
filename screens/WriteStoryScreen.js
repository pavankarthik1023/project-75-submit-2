import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
      date: this.firebase.firestore.FieldValue.serverTimestamp().now().toDate(),
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header style={styles.header}
         centerComponent={{
            text: 'Bed Time Stories',
            
          }}
        />

        <TextInput
          placeholder="Write the title of the story here"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
          style={styles.title}
        />
        <TextInput
         placeholder="Write the name of the author here"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          value={this.state.author}
          style={styles.author}
        />
        <TextInput
         placeholder="Write your story here"
          onChangeText={(text) => {
            this.setState({
              storyText: text,
            });
          }}
          value={this.state.storyText}
          style={styles.storyText}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38b29b',
    flex: 1,
  },
  title: {
     width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  author: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyText: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'orange',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
   header: {
    backgroundColor: 'orange',
    border: 'dashed',
  },
});
