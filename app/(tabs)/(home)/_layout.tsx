import React from 'react';
//
import { MaterialTopTabs } from "@/layouts/material-top-tabs";

export default function TabLayout() {
  return (    
    <MaterialTopTabs>
      <MaterialTopTabs.Screen name="index" options={{ title: 'Home' }} />
    </MaterialTopTabs>
  );
}
