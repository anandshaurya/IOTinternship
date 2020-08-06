import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={styles.header}>
      <Text style={styles.headerText}> RGB CONTROLLER APP </Text>
      </View>

      <View style = {styles.IpBar}>

        <TextInput style={styles.input}></TextInput>
        <Text style={styles.inputText}>Set IP</Text>

      </View>

      <View style={styles.box}>

        <View flex={1}>
          <Text style={styles.violetText}>violet</Text>
          <Text style={styles.greenText}>green</Text>
          <Text style={styles.redText} >red</Text>
        </View>

        <View flex={1}>
          <Text style={styles.indigoText}>indigo</Text>
          <Text style={styles.yellowText}>yellow</Text>
          <Text style={styles.whiteText}>white</Text>
        </View>

        <View flex={1}>
          <Text style={styles.blueText}>blue</Text>
          <Text style={styles.orangeText}>orange</Text>
          <Text style={styles.blackText}>black</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header : {
    marginTop : 60,
    alignItems : 'center'
  },

  headerText : {
    fontSize : 18,
    fontWeight : '700',
    color : 'red'

  },

  IpBar : {
    width : '100%',
    flexDirection : 'row',
    marginTop : 50
  },

  input: {
    flex : 2,
    borderColor : 'black',
    borderWidth : 2,
    marginHorizontal : 15,
    paddingHorizontal : 15
  },

  inputText : {
    flex: 1,
    marginLeft : 50,
    backgroundColor : 'gray',
    marginRight : 15,
    textAlign : 'center',
    textAlignVertical : 'center',
    color : 'white'
  },

  box : {
    marginTop : 150,
    marginHorizontal : 40,
    backgroundColor : 'gray',
    height : 184,
    flexDirection : 'row',
    borderColor :'gray',
    borderWidth : 2
  },
  violetText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'violet'
  },
  greenText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'green'
  },
  redText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'red',
    color : 'white'
  },
  indigoText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'indigo',
    color :'white'
  },
  yellowText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'yellow'
  },
  whiteText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'white'
  },
  blueText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'blue',
    color : 'white'
  },
  orangeText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'orange'
  },
  blackText : {
    textAlignVertical : 'center',
    textAlign : 'center',
    height : 60,
    backgroundColor : 'black',
    color : 'white'
  }

});
