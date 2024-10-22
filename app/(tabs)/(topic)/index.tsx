import { StyleSheet } from "react-native";
//
import { usePosts } from "@/hooks/usePosts";
import { TopicList } from "@/components/TopicList";

export default function HomeScreen() {
  const [data] = usePosts(
    "https://dummyjson.com/posts/search?q=important&limit=15"
  );

  return <TopicList data={data} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
  },
});
