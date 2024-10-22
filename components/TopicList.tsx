import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Chip, Icon } from "@rneui/themed";

type ItemProps = {
  key: number;
  id: number;
  title: string;
  body: string;
  tags: [];
  reactions: object;
};

function TopicItem({ key, id, title }: ItemProps) {
  return (
    <View key={key} style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: "https://picsum.photos/100?random=" + id }}
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <Button title="Gabung" size="sm" radius="lg" />
      </View>
      <Text>{title}</Text>
    </View>
  );
}
export function TopicList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <TopicItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 5,
  },
  image: {
    borderRadius: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  tagButton: {
    borderRadius: 30,
  },
});
