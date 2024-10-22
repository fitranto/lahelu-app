import { StyleSheet } from "react-native";
//
import { PostList } from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";

export default function HomeScreen() {
  const [data] = usePosts("https://dummyjson.com/posts?limit=15");

  return <PostList data={data} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
  },
});
