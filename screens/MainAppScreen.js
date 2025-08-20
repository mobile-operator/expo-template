import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';

import CreateScreen from './tabs/CreateScreen';
import TemplatesScreen from './tabs/TemplatesScreen';
import MyProjectsScreen from './tabs/MyProjectsScreen';
import MyExportsScreen from './tabs/MyExportsScreen';

const Tab = createBottomTabNavigator();

const logoSvg = `<svg viewBox="0 0 1147.16 336.99" xmlns="http://www.w3.org/2000/svg"><g fill="#1e1e1e"><path d="m584.15 296.52v-111.32h-116.1v111.32h-41.52v-256.44h41.52v108.38h116.1v-108.38h41.51v256.44z"/><path d="m739.19 300.93c-18.13 0-33.8-4.1-47.03-12.31-13.23-8.2-23.46-19.78-30.68-34.72-7.23-14.94-10.84-32.57-10.84-52.91s3.55-37.9 10.65-52.72 17.14-26.39 30.13-34.72c12.98-8.32 28.53-12.49 46.66-12.49s34.59 4.23 47.21 12.68c12.61 8.45 22.1 19.9 28.48 34.35 6.36 14.45 9.55 30.49 9.55 48.13v15.06h-130.79v6.25c0 14.7 4.35 26.76 13.04 36.19s21.13 14.14 37.29 14.14c11.76 0 21.68-2.57 29.76-7.71s14.81-12.12 20.21-20.94l23.88 23.15c-7.35 11.51-17.7 20.82-31.04 27.92-13.35 7.1-28.84 10.65-46.48 10.65zm-.36-168.63c-9.31 0-17.45 2.15-24.43 6.43-6.98 4.29-12.37 10.17-16.17 17.63-3.8 7.47-5.69 16.11-5.69 25.9v2.57h88.91v-3.67c0-9.79-1.71-18.37-5.14-25.72s-8.33-13.04-14.7-17.08-13.96-6.06-22.78-6.06z"/><path d="m893.13 296.52h-40.04v-191.05h40.04v37.84h1.84c1.96-6.37 5.08-12.43 9.37-18.19 4.28-5.75 9.98-10.47 17.08-14.14s15.8-5.51 26.09-5.51h10.65v38.58h-15.8c-10.54 0-19.47 1.23-26.82 3.67-7.35 2.45-12.92 5.88-16.72 10.29s-5.7 9.92-5.7 16.53v121.98z"/><path d="m1147.16 296.52h-22.41c-7.35 0-13.66-1.65-18.92-4.96-5.27-3.31-9.25-8.02-11.94-14.14-2.7-6.12-4.04-13.35-4.04-21.68v-3.31l11.39 12.12h-12.86c-3.67 11.76-10.41 20.76-20.21 27-9.8 6.25-21.68 9.37-35.64 9.37-19.6 0-34.78-5.14-45.56-15.43s-16.17-24.12-16.17-41.52c0-12.73 3.12-23.33 9.37-31.78s15.37-14.82 27.37-19.1 26.94-6.43 44.82-6.43h34.54v-16.17c0-11.51-3.19-20.51-9.55-27-6.37-6.49-16.29-9.74-29.76-9.74-11.02 0-20.15 2.51-27.37 7.53-7.23 5.02-13.29 11.21-18.19 18.55l-23.88-21.68c6.37-10.77 15.37-19.65 27-26.64 11.63-6.98 26.64-10.47 45.01-10.47 24.49 0 43.41 5.82 56.76 17.45 13.35 11.64 20.02 28.1 20.02 49.41v95.89h20.21v32.7zm-60.25-84.13h-33.8c-13.96 0-24.37 2.2-31.23 6.61s-10.29 10.78-10.29 19.1v6.61c0 8.33 2.94 14.7 8.82 19.1 5.88 4.41 13.72 6.61 23.51 6.61 8.33 0 15.67-1.22 22.04-3.67s11.45-6 15.25-10.65c3.79-4.65 5.7-10.04 5.7-16.17v-27.55z"/></g><path d="m83.53 167.05c43 0 78.43-32.51 83.01-74.3.34-3.03.51-6.11.51-9.23 0-46.12-37.4-83.52-83.52-83.52-27.73 0-52.29 13.5-67.49 34.3-10.09 13.79-16.04 30.81-16.04 49.23 0 46.14 37.39 83.53 83.53 83.53z" fill="#fa4e3e"/><path d="m167.05 250.74c0-3.29-.19-6.56-.58-9.76-4.82-41.52-40.12-73.77-82.95-73.77-46.13-0-83.52 37.41-83.52 83.53v83.53h84.87l-.03-.03c45.52-.7 82.22-37.79 82.22-83.49z" fill="#fa4e3e"/><path d="m253.48.03c-.72-.02-1.46-.03-2.18-.03s-1.46.02-2.18.03c-45.52 1.15-82.07 38.4-82.07 84.22 0 2.99.16 5.94.46 8.84 4.42 42.36 40.25 75.41 83.79 75.41-5.25 0-10.39.48-15.37 1.4-35.58 6.56-63.32 35.47-68.14 71.63-.49 3.67-.74 7.41-.74 11.22 0 46.52 37.71 84.25 84.25 84.25s84.25-37.73 84.25-84.25v-168.5c0-45.82-36.56-83.07-82.07-84.22z" fill="#fa4e3e"/></svg>`;

export default function MainAppScreen({ navigation }) {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const openPaywall = () => {
    navigation.navigate('Paywall', { fromMainApp: true });
  };

  const openBrandKits = () => {
    setSettingsModalVisible(false);
    // Navigate to brand kits section in webview
  };

  const openExplore = () => {
    setSettingsModalVisible(false);
    // Navigate to explore section in webview
  };

  const handleLogout = () => {
    setSettingsModalVisible(false);
    navigation.navigate('Login');
  };

  const handleSubscribe = () => {
    setSettingsModalVisible(false);
    navigation.navigate('Paywall', { fromMainApp: true });
  };

  const handleContactSupport = () => {
    setSettingsModalVisible(false);
    // Open support contact method (email, link, etc.)
    console.log('Contact support');
  };

  const HeaderComponent = () => (
    <View style={headerStyles.header}>
      <View style={headerStyles.leftSection}>
        <TouchableOpacity
          style={headerStyles.menuButton}
          onPress={() => setSettingsModalVisible(true)}
        >
          <Ionicons name="menu" size={24} color="#000000" />
        </TouchableOpacity>
        <SvgXml xml={logoSvg} width={80} height={24} />
      </View>
      
      <TouchableOpacity
        style={headerStyles.proButton}
        onPress={openPaywall}
      >
        <Text style={headerStyles.proButtonText}>GET PRO</Text>
      </TouchableOpacity>
    </View>
  );

  const SettingsModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={settingsModalVisible}
      onRequestClose={() => setSettingsModalVisible(false)}
    >
      <TouchableOpacity 
        style={headerStyles.modalOverlay}
        activeOpacity={1}
        onPress={() => setSettingsModalVisible(false)}
      >
        <TouchableOpacity 
          style={headerStyles.modalContent}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={headerStyles.modalHeader}>
            <Text style={headerStyles.modalTitle}>Settings</Text>
            <TouchableOpacity
              style={headerStyles.closeButton}
              onPress={() => setSettingsModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#000000" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={headerStyles.menuItem} onPress={handleContactSupport}>
            <Ionicons name="help-circle-outline" size={20} color="#000000" />
            <Text style={headerStyles.menuItemText}>Contact Support</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={headerStyles.menuItem} onPress={handleSubscribe}>
            <Ionicons name="star-outline" size={20} color="#000000" />
            <Text style={headerStyles.menuItemText}>Get Pro</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={headerStyles.menuItem} onPress={openBrandKits}>
            <Ionicons name="color-palette-outline" size={20} color="#000000" />
            <Text style={headerStyles.menuItemText}>Brand Kits</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={headerStyles.menuItem} onPress={openExplore}>
            <Ionicons name="compass-outline" size={20} color="#000000" />
            <Text style={headerStyles.menuItemText}>Explore</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={headerStyles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#000000" />
            <Text style={headerStyles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} />
      <HeaderComponent />
      <SettingsModal />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Templates') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'My Projects') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'My Exports') {
            iconName = focused ? 'download' : 'download-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E85A4F',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5E5',
          borderTopWidth: 1,
          paddingBottom: 34,
          paddingTop: 8,
          paddingHorizontal: 0,
          height: 90,
          position: 'absolute',
          bottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 0,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      })}
    >
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Templates" component={TemplatesScreen} />
      <Tab.Screen name="My Projects" component={MyProjectsScreen} />
      <Tab.Screen name="My Exports" component={MyExportsScreen} />
    </Tab.Navigator>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 8,
    marginRight: 8,
  },
  proButton: {
    backgroundColor: '#E85A4F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  proButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  closeButton: {
    padding: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 12,
  },
});

