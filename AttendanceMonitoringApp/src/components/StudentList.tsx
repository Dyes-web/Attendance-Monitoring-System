import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Switch } from 'react-native';
import type { Student } from '../types';

interface Props {
  students: Student[];
  onSelect?: (student: Student) => void;
  showAttendanceSwitch?: boolean;
  attendance?: { [key: string]: boolean };
  onToggleAttendance?: (studentId: string) => void;
}

const StudentList: React.FC<Props> = ({
  students,
  onSelect,
  showAttendanceSwitch,
  attendance,
  onToggleAttendance,
}) => {
  const renderStudent = ({ item }: { item: Student }) => (
    <TouchableOpacity onPress={() => onSelect?.(item)}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
        <Text>{item.name}</Text>
        {showAttendanceSwitch && (
          <Switch
            value={attendance?.[item.id] || false}
            onValueChange={() => onToggleAttendance?.(item.id)}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return <FlatList data={students} renderItem={renderStudent} keyExtractor={(item) => item.id} />;
};

export default StudentList;

