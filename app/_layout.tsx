import { router } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// custom
import { Drawer } from "@/layouts/drawer";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => router.push("(tabs)")} />
      <DrawerItem label="Fresh" onPress={() => router.push("(tabs)/fresh")} />
      <DrawerItem
        label="Trending"
        onPress={() => router.push("(tabs)/trending")}
      />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        title: "Lahelu",
        drawerType: "front",
        headerTitleStyle: { textTransform: "uppercase" },
      }}
      drawerContent={CustomDrawerContent}
    />
  );
}
