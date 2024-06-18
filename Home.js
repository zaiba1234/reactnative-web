// Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();

  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to Login" onPress={() => history.push('/login')} />
    </View>
  );
};

export default Home;
