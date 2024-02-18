import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const StudentsPage = () => {
  const [students, setStudents] = useState([
    { id: '1', name: 'Ayan', grade: 'Class 1' },
    { id: '2', name: 'Steve Smith', grade: 'Class 1' },
    { id: '3', name: 'Markram', grade: 'Class 2' },
    { id: '4', name: 'Adil', grade: 'Class 2' },
    { id: '1', name: 'Ayan', grade: 'Class 3' },
    { id: '2', name: 'Steve Smith', grade: 'Class 3' },
    { id: '3', name: 'Markram', grade: 'Class 4' },
    { id: '4', name: 'Adil', grade: 'Class 4' },
    { id: '1', name: 'Ayan', grade: 'Class 5' },
    { id: '2', name: 'Steve Smith', grade: 'Class 5' },
    { id: '3', name: 'Markram', grade: 'Class 6' },
    { id: '4', name: 'Adil', grade: 'Class 6' },
    { id: '3', name: 'Markram', grade: 'Class 7' },
    { id: '4', name: 'Adil', grade: 'Class 7' },
    { id: '3', name: 'Markram', grade: 'Class 8' },
    { id: '4', name: 'Adil', grade: 'Class 8' },
  ]);

  const [selectedClass, setSelectedClass] = useState(null);

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

  const handleSelectClass = (className) => {
    setSelectedClass(className);
  };

  const renderClassGrid = () => {
    return (
      <View style={styles.gridContainer}>
        {classes.map((className, index) => (
          <TouchableOpacity key={index} style={styles.gridItem} onPress={() => handleSelectClass(className)}>
            <Text style={styles.gridItemText}>{className}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderStudentsList = () => {
    const filteredStudents = students.filter(student => student.grade === selectedClass);
    return (
      <FlatList
        data={filteredStudents}
        renderItem={renderStudentItem}
        keyExtractor={item => item.id}
      />
    );
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.grade}>{item.grade}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedClass ? renderStudentsList() : renderClassGrid()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gridContainer: {
    color: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%',
    height: 100,
    backgroundColor: 'skyblue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  grade: {
    fontSize: 16,
  },
});

export default StudentsPage;
