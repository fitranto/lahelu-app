import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Chip, Icon } from "@rneui/themed";
//
import { useUsers } from "@/hooks/useUsers";

type ItemProps = {
  key: number;
  id: number;
  title: string;
  tags: [];
  reactions: object;
  views: number;
};

function PostItem({ key, id, title, tags, reactions, views }: ItemProps) {
  const [data] = useUsers(`https://dummyjson.com/users/${id}?select=username`);

  return (
    <View key={key} style={styles.container}>
      <View style={styles.headerImage}>
        <Avatar
          size={35}
          rounded
          source={{ uri: "https://i.pravatar.cc/35?img=" + id }}
          containerStyle={styles.avatar}
        />
        <Text style={styles.username}>{data.username}</Text>

        <Button size="sm" type="clear" radius={10}>
          <Icon
            name="ellipsis-h"
            type="font-awesome-5"
            size={15}
            style={{ fontSize: 10 }}
          />
        </Button>
      </View>
      <Text style={styles.title}>{title}</Text>

      <Image
        source={{ uri: "https://picsum.photos/800/600?random=" + id }}
        style={styles.image}
      />

      <View style={styles.chips}>
        {tags.map((value, index) => (
          <Chip
            key={index}
            title={"# " + value}
            type="outline"
            size="sm"
            containerStyle={{ marginRight: 10 }}
          />
        ))}
      </View>

      <View style={styles.buttons}>
        <Button size="sm" type="outline" radius={10}>
          <Icon name="arrow-up" type="font-awesome-5" />{" "}
          {reactions.likes.toString()}
        </Button>
        <Button
          size="sm"
          type="outline"
          radius={10}
          containerStyle={{ marginLeft: 10, marginRight: 10 }}
        >
          <Icon name="arrow-down" type="font-awesome-5" />
        </Button>
        <Button size="sm" type="outline" radius={10}>
          <Icon name="comment" type="font-awesome-5" /> {views.toString()}
        </Button>
        <Button
          size="sm"
          type="outline"
          radius={10}
          containerStyle={{ marginLeft: "auto" }}
        >
          <Icon name="share" type="font-awesome-5" />
        </Button>
      </View>
    </View>
  );
}
export function PostList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <PostItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  headerImage: {
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    margin: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  username: {
    flex: 1,
    fontWeight: "bold",
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  chips: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    padding: 10,
  },
});
