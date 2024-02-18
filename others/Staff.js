import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

const StaffPage = () => {
  const [staffData, setStaffData] = useState([
    { id: '1', name: 'Buttler', subject: 'Math', phone: '1234567890' },
    { id: '2', name: 'Steve Smith', subject: 'Science', phone: '9876543210' },

  ]);

  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffSubject, setNewStaffSubject] = useState('');
  const [newStaffPhone, setNewStaffPhone] = useState('');

  const [isAddingStaff, setIsAddingStaff] = useState(false);

  const addStaffMember = () => {
    const newStaffMember = {
      id: String(Math.random()),
      name: newStaffName,
      subject: newStaffSubject,
      phone: newStaffPhone,
    };
    setStaffData([...staffData, newStaffMember]);
    setNewStaffName('');
    setNewStaffSubject('');
    setNewStaffPhone('');
    setIsAddingStaff(false);
  };

  const removeStaffMember = (id) => {
    setStaffData(staffData.filter((staff) => staff.id !== id));
  };

  const renderStaffMember = ({ item }) => (
    <View style={styles.staffMember}>
      <Text>Name: {item.name} </Text>
      <Text>  Subject: {item.subject}</Text>
      <Text>Phone: {item.phone}</Text>
      <Icon name="delete" color='red' onPress={() => removeStaffMember(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {isAddingStaff ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newStaffName}
            onChangeText={(text) => setNewStaffName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={newStaffSubject}
            onChangeText={(text) => setNewStaffSubject(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={newStaffPhone}
            onChangeText={(text) => setNewStaffPhone(text)}
          />
          <Button title="Add Staff" onPress={addStaffMember} />
          <Button title="Cancel" onPress={() => setIsAddingStaff(false)} />
        </View>
      ) : (
        <Button title="Add New Staff" onPress={() => setIsAddingStaff(true)} />
      )}
      <FlatList
        data={staffData}
        renderItem={renderStaffMember}
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
  staffMember: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default StaffPage;
