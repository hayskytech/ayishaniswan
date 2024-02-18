import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';

const TimetablePage = () => {
  const [timetableData, setTimetableData] = useState([
    {
      class: 'Class 1',
      subjects: [
        { id: '1', day: 'Monday', time: '09:00 AM - 10:30 AM', subject: 'Mathematics' },
        { id: '2', day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Science' },
        { id: '3', day: 'Wednesday', time: '09:00 AM - 10:30 AM', subject: 'History' },
        { id: '4', day: 'Thursday', time: '11:00 AM - 12:30 PM', subject: 'Geography' },
        { id: '5', day: 'Friday', time: '09:00 AM - 10:30 AM', subject: 'English' },
        { id: '6', day: 'Saturday', time: '11:00 AM - 12:30 PM', subject: 'Art' },
      ],
    },
    {
      class: 'Class 2',
      subjects: [
        { id: '7', day: 'Monday', time: '09:00 AM - 10:30 AM', subject: 'Physics' },
        { id: '8', day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Chemistry' },
        { id: '9', day: 'Wednesday', time: '09:00 AM - 10:30 AM', subject: 'Biology' },
        { id: '10', day: 'Thursday', time: '11:00 AM - 12:30 PM', subject: 'Computer Science' },
        { id: '11', day: 'Friday', time: '09:00 AM - 10:30 AM', subject: 'Physical Education' },
        { id: '12', day: 'Saturday', time: '11:00 AM - 12:30 PM', subject: 'Music' },
      ],
    },
    // Add more classes and subjects as needed
  ]);

  const [editingSubject, setEditingSubject] = useState(null);

  const handleEditSubject = (subjectId) => {
    setEditingSubject(subjectId);
  };

  const handleSaveEdit = (classIndex, subjectIndex, field, value) => {
    const updatedTimetableData = [...timetableData];
    updatedTimetableData[classIndex].subjects[subjectIndex][field] = value;
    setTimetableData(updatedTimetableData);
    setEditingSubject(null);
  };

  const handleDeleteSubject = (classIndex, subjectIndex) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this subject?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteSubject(classIndex, subjectIndex) },
      ],
      { cancelable: false }
    );
  };

  const deleteSubject = (classIndex, subjectIndex) => {
    const updatedTimetableData = [...timetableData];
    updatedTimetableData[classIndex].subjects.splice(subjectIndex, 1);
    setTimetableData(updatedTimetableData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {timetableData.map((classItem, classIndex) => (
        <View key={classItem.class}>
          <Text style={styles.classHeading}>{classItem.class}</Text>
          <View style={styles.table}>
            <View style={styles.tableRowHeader}>
              <Text style={styles.tableCellHeader}>Day</Text>
              <Text style={styles.tableCellHeader}>Time</Text>
              <Text style={styles.tableCellHeader}>Subject</Text>
              <Text style={styles.tableCellHeader}>Actions</Text>
            </View>
            {classItem.subjects.map((subject, subjectIndex) => (
              <View key={subject.id} style={styles.tableRow}>
                <TextInput
                  style={styles.tableCell}
                  value={subject.day}
                  onChangeText={(text) => handleSaveEdit(classIndex, subjectIndex, 'day', text)}
                  editable={editingSubject === subject.id}
                />
                <TextInput
                  style={styles.tableCell}
                  value={subject.time}
                  onChangeText={(text) => handleSaveEdit(classIndex, subjectIndex, 'time', text)}
                  editable={editingSubject === subject.id}
                />
                <TextInput
                  style={styles.tableCell}
                  value={subject.subject}
                  onChangeText={(text) => handleSaveEdit(classIndex, subjectIndex, 'subject', text)}
                  editable={editingSubject === subject.id}
                />
                <View style={styles.actions}>
                  {editingSubject === subject.id ? (
                    <Button title="Save" onPress={() => handleSaveEdit(classIndex, subjectIndex)} />
                  ) : (
                    <>
                      <Button title="Edit" onPress={() => handleEditSubject(subject.id)} />
                      <Button title="Delete" onPress={() => handleDeleteSubject(classIndex, subjectIndex)} />
                    </>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  classHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableCellHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
});

export default TimetablePage;
