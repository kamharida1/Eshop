import {Link, useLocalSearchParams} from 'expo-router'
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GuestItem from '../src/components/GuestItem'
import { colors } from '../src/styles/constants';

type Guest = {
  id: string;
  firstName: string;
  lastName: string;
  deadline?: string;
  attending: boolean;
};

const renderItem = (item: { item: Guest }) => <GuestItem guest={item.item} />;


export default function Index() {
  const { firstName, lastName } = useLocalSearchParams();

  const [guests, setGuests] = useState<Guest[] | undefined>([
    {
      id: "1",
      firstName: "Miralda",
      lastName: "Flores",
      deadline: "none",
      attending: true,
    },
    {
      id: "2",
      firstName: "Ximena",
      lastName: "Alvarez",
      deadline: "none",
      attending: false,
    },
  ]);
  useEffect(() => {
    if (firstName && lastName) {
      setGuests([...guests, {id: '3', firstName, lastName, attending: false, deadline: 'none'}])
    }
  },[firstName, lastName])
  return (
    <>
      <FlatList
        style={styles.list}
        data={guests}
        renderItem={renderItem}
        keyExtractor={(item: Guest) => item.id}
      />
      <Link style={styles.button} href="/new-guest">
        New Guest
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    textAlign: "center",
    backgroundColor: colors.cardBackground,
    fontSize: 24,
  },
});