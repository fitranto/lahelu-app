import { StyleSheet } from "react-native";

import { usePosts } from "@/hooks/usePosts";
import { PostList } from "@/components/PostList";

export default function FreshScreen() {
  const [data] = usePosts(
    "https://dummyjson.com/posts/search?q=today&limit=15"
  );

  return <PostList data={data} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
