import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

const ClassesPage = () => {
  const [classesData, setClassesData] = useState([
    { id: '1', name: 'Mathematics', teacher: 'Sufyan', room: '101' },
    { id: '2', name: 'Science', teacher: 'Steve', room: '102' },

  ]);

  const [newClassName, setNewClassName] = useState('');
  const [newClassTeacher, setNewClassTeacher] = useState('');
  const [newClassRoom, setNewClassRoom] = useState('');

  const [isAddingClass, setIsAddingClass] = useState(false);

  const addClass = () => {
    const newClass = {
      id: String(Math.random()),
      name: newClassName,
      teacher: newClassTeacher,
      room: newClassRoom,
    };
    setClassesData([...classesData, newClass]);
    setNewClassName('');
    setNewClassTeacher('');
    setNewClassRoom('');
    setIsAddingClass(false);
  };

  const removeClass = (id) => {
    setClassesData(classesData.filter((item) => item.id !== id));
  };

  const renderClass = ({ item }) => (
    <View style={styles.classItem}>
      <Text>Name: {item.name}</Text>
      <Text>Teacher: {item.teacher}</Text>
      <Text>Room: {item.room}</Text>
      <Button title="Delete" onPress={() => removeClass(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {isAddingClass ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Class Name"
            value={newClassName}
            onChangeText={(text) => setNewClassName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Teacher Name"
            value={newClassTeacher}
            onChangeText={(text) => setNewClassTeacher(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Room Number"
            value={newClassRoom}
            onChangeText={(text) => setNewClassRoom(text)}
          />
          <Button title="Add Class" onPress={addClass} />
          <Button title="Cancel" onPress={() => setIsAddingClass(false)} />
        </View>
      ) : (
        <Button title="Add New Class" onPress={() => setIsAddingClass(true)} />
      )}
      <FlatList
        data={classesData}
        renderItem={renderClass}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  classItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ClassesPage;
