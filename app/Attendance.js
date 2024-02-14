import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: '1', name: 'John Doe', date: '2024-02-13', status: 'Present' },
    { id: '2', name: 'Jane Smith', date: '2024-02-14', status: 'Absent' },
    { id: '3', name: 'Alice Johnson', date: '2024-02-15', status: 'Present' },
    { id: '4', name: 'Bob Brown', date: '2024-02-16', status: 'Half-Day' },
    // Add more attendance records as needed
  ]);

  const handleStatusChange = (id) => {
    const updatedAttendanceData = attendanceData.map(item =>
      item.id === id
        ? { ...item, status: item.status === 'Present' ? 'Absent' : item.status === 'Absent' ? 'Half-Day' : 'Present' }
        : item
    );
    setAttendanceData(updatedAttendanceData);
  };

  const renderAttendanceRecords = () => {
    return attendanceData.map(record => (
      <TouchableOpacity key={record.id} style={styles.record} onPress={() => handleStatusChange(record.id)}>
        <Text>Name: {record.name}</Text>
        <Text>Date: {record.date}</Text>
        <Text>Status: {record.status}</Text>
      </TouchableOpacity>

    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Attendance Records</Text>
      {renderAttendanceRecords()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  record: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AttendancePage;
