import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { BottomSheet, Dialog, Icon, ListItem } from "@rneui/themed";
//
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const bottomMenu = [
  { id: 1, title: "Login", icon: "lock-open", divider: false },
  { id: 2, title: "Lahelu Plus", icon: "shield-alt", divider: true },
  { id: 3, title: "Download Aplikasi", icon: "google-play", divider: false },
  { id: 4, title: "Pengaturan", icon: "cog", divider: false },
  { id: 5, title: "Hubungi Kami", icon: "envelope", divider: false },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [dialog, setDialog] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(topic)"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "people" : "people-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "add-circle" : "add-circle-outline"}
                color={color}
              />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault(); // Prevents navigation
              setDialog(!dialog);
            },
          })}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code" : "code-outline"}
                color={color}
              />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault(); // Prevents navigation
              setVisible(!visible);
            },
          })}
        />
      </Tabs>

      {/* Add meme */}
      <Dialog isVisible={dialog} onBackdropPress={() => setDialog(!dialog)}>
        <Dialog.Title title="Selamat Datang" />
        <Text>Buat meme, beri vote, dan berkomentar setelah login!</Text>
      </Dialog>

      {/* Profile */}
      <BottomSheet
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
        modalProps={{
          style: {
            borderColor: "green",
            borderWidth: 1,
          },
        }}
      >
        {bottomMenu.map((item) => (
          <ListItem key={item.id} bottomDivider={item.divider}>
            <Icon name={item.icon} type="font-awesome-5" color="grey" />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
}
