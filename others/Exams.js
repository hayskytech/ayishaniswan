import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

const ExamsPage = () => {
  const [examsData, setExamsData] = useState([
    { id: '1', subject: 'Mathematics', date: '2024-02-20', time: '09:00 AM' },
    { id: '2', subject: 'Science', date: '2024-02-25', time: '10:30 AM' },

  ]);

  const [newExamSubject, setNewExamSubject] = useState('');
  const [newExamDate, setNewExamDate] = useState('');
  const [newExamTime, setNewExamTime] = useState('');

  const [isAddingExam, setIsAddingExam] = useState(false);

  const addExam = () => {
    const newExam = {
      id: String(Math.random()),
      subject: newExamSubject,
      date: newExamDate,
      time: newExamTime,
    };
    setExamsData([...examsData, newExam]);
    setNewExamSubject('');
    setNewExamDate('');
    setNewExamTime('');
    setIsAddingExam(false);
  };

  const removeExam = (id) => {
    setExamsData(examsData.filter((exam) => exam.id !== id));
  };

  const renderExam = ({ item }) => (
    <View style={styles.examItem}>
      <Text>Subject: {item.subject}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Time: {item.time}</Text>
      <Button title="Delete" onPress={() => removeExam(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {isAddingExam ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={newExamSubject}
            onChangeText={(text) => setNewExamSubject(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={newExamDate}
            onChangeText={(text) => setNewExamDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={newExamTime}
            onChangeText={(text) => setNewExamTime(text)}
          />
          <Button title="Add Exam" onPress={addExam} />
          <Button title="Cancel" onPress={() => setIsAddingExam(false)} />
        </View>
      ) : (
        <Button title="Add New Exam" onPress={() => setIsAddingExam(true)} />
      )}
      <FlatList
        data={examsData}
        renderItem={renderExam}
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
  examItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ExamsPage;
