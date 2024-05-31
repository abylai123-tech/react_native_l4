import { View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import styled from "styled-components";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route }) => {
  const { id, title } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(async (response) => {
        const data = await response.json();
        setData(data);
      })
      .catch((error) => {
        Alert.alert("Ошибка", "Не удалось получить статью!");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <PostImage source={{ uri: data.thumbnailUrl }} />
      <PostText>{data.title}</PostText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
