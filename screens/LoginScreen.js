import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as WebBrowser from 'expo-web-browser';

const logoSvg = `<svg viewBox="0 0 1147.16 336.99" xmlns="http://www.w3.org/2000/svg"><g fill="#1e1e1e"><path d="m584.15 296.52v-111.32h-116.1v111.32h-41.52v-256.44h41.52v108.38h116.1v-108.38h41.51v256.44z"/><path d="m739.19 300.93c-18.13 0-33.8-4.1-47.03-12.31-13.23-8.2-23.46-19.78-30.68-34.72-7.23-14.94-10.84-32.57-10.84-52.91s3.55-37.9 10.65-52.72 17.14-26.39 30.13-34.72c12.98-8.32 28.53-12.49 46.66-12.49s34.59 4.23 47.21 12.68c12.61 8.45 22.1 19.9 28.48 34.35 6.36 14.45 9.55 30.49 9.55 48.13v15.06h-130.79v6.25c0 14.7 4.35 26.76 13.04 36.19s21.13 14.14 37.29 14.14c11.76 0 21.68-2.57 29.76-7.71s14.81-12.12 20.21-20.94l23.88 23.15c-7.35 11.51-17.7 20.82-31.04 27.92-13.35 7.1-28.84 10.65-46.48 10.65zm-.36-168.63c-9.31 0-17.45 2.15-24.43 6.43-6.98 4.29-12.37 10.17-16.17 17.63-3.8 7.47-5.69 16.11-5.69 25.9v2.57h88.91v-3.67c0-9.79-1.71-18.37-5.14-25.72s-8.33-13.04-14.7-17.08-13.96-6.06-22.78-6.06z"/><path d="m893.13 296.52h-40.04v-191.05h40.04v37.84h1.84c1.96-6.37 5.08-12.43 9.37-18.19 4.28-5.75 9.98-10.47 17.08-14.14s15.8-5.51 26.09-5.51h10.65v38.58h-15.8c-10.54 0-19.47 1.23-26.82 3.67-7.35 2.45-12.92 5.88-16.72 10.29s-5.7 9.92-5.7 16.53v121.98z"/><path d="m1147.16 296.52h-22.41c-7.35 0-13.66-1.65-18.92-4.96-5.27-3.31-9.25-8.02-11.94-14.14-2.7-6.12-4.04-13.35-4.04-21.68v-3.31l11.39 12.12h-12.86c-3.67 11.76-10.41 20.76-20.21 27-9.8 6.25-21.68 9.37-35.64 9.37-19.6 0-34.78-5.14-45.56-15.43s-16.17-24.12-16.17-41.52c0-12.73 3.12-23.33 9.37-31.78s15.37-14.82 27.37-19.1 26.94-6.43 44.82-6.43h34.54v-16.17c0-11.51-3.19-20.51-9.55-27-6.37-6.49-16.29-9.74-29.76-9.74-11.02 0-20.15 2.51-27.37 7.53-7.23 5.02-13.29 11.21-18.19 18.55l-23.88-21.68c6.37-10.77 15.37-19.65 27-26.64 11.63-6.98 26.64-10.47 45.01-10.47 24.49 0 43.41 5.82 56.76 17.45 13.35 11.64 20.02 28.1 20.02 49.41v95.89h20.21v32.7zm-60.25-84.13h-33.8c-13.96 0-24.37 2.2-31.23 6.61s-10.29 10.78-10.29 19.1v6.61c0 8.33 2.94 14.7 8.82 19.1 5.88 4.41 13.72 6.61 23.51 6.61 8.33 0 15.67-1.22 22.04-3.67s11.45-6 15.25-10.65c3.79-4.65 5.7-10.04 5.7-16.17v-27.55z"/></g><path d="m83.53 167.05c43 0 78.43-32.51 83.01-74.3.34-3.03.51-6.11.51-9.23 0-46.12-37.4-83.52-83.52-83.52-27.73 0-52.29 13.5-67.49 34.3-10.09 13.79-16.04 30.81-16.04 49.23 0 46.14 37.39 83.53 83.53 83.53z" fill="#fa4e3e"/><path d="m167.05 250.74c0-3.29-.19-6.56-.58-9.76-4.82-41.52-40.12-73.77-82.95-73.77-46.13-0-83.52 37.41-83.52 83.53v83.53h84.87l-.03-.03c45.52-.7 82.22-37.79 82.22-83.49z" fill="#fa4e3e"/><path d="m253.48.03c-.72-.02-1.46-.03-2.18-.03s-1.46.02-2.18.03c-45.52 1.15-82.07 38.4-82.07 84.22 0 2.99.16 5.94.46 8.84 4.42 42.36 40.25 75.41 83.79 75.41-5.25 0-10.39.48-15.37 1.4-35.58 6.56-63.32 35.47-68.14 71.63-.49 3.67-.74 7.41-.74 11.22 0 46.52 37.71 84.25 84.25 84.25s84.25-37.73 84.25-84.25v-168.5c0-45.82-36.56-83.07-82.07-84.22z" fill="#fa4e3e"/></svg>`;

const googleIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
</svg>`;

const appleIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#9AA0A6"/>
</svg>`;

export default function LoginScreen({ navigation }) {
  const handleGoogleLogin = async () => {
    try {
      const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=669531916054-l5ttf8pk5u5pdi8o467s1na6ltujjvq4.apps.googleusercontent.com&state=4R92_KVobAFDuHyVACzIkVka3pQIy66A&scope=email+profile+openid&redirect_uri=https://app.hera.video/api/auth/callback/google&prompt=select_account&code_challenge_method=S256&code_challenge=_Vv5yRXzqDJ3JjW_YIIiN2kOJRDOXpn8zgilt5dqrs8&include_granted_scopes=true';
      
      const result = await WebBrowser.openBrowserAsync(googleAuthUrl);
      
      // For now, simulate successful login and navigate to main app
      if (result.type === 'dismiss') {
        navigation.navigate('MainApp');
      }
    } catch (error) {
      console.error('Error opening Google Auth:', error);
    }
  };

  const handleSkip = () => {
    navigation.navigate('MainApp');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Hidden Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>✕</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <SvgXml xml={logoSvg} width={120} height={36} />
        </View>
        
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Hera</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>
        
        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <SvgXml xml={googleIconSvg} width={20} height={20} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Continue with Apple Button */}
        <View style={styles.appButtonContainer}>
          <TouchableOpacity 
            style={[styles.appButton, styles.disabledButton]} 
            disabled={true}
          >
            <SvgXml xml={appleIconSvg} width={20} height={20} />
            <Text style={styles.appButtonText}>Continue with Apple</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Coming Soon</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADCE0',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#3C4043',
    marginLeft: 12,
    fontWeight: '500',
  },
  appButtonContainer: {
    marginTop: 16,
    position: 'relative',
  },
  appButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADCE0',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    position: 'relative',
  },
  disabledButton: {
    backgroundColor: '#F8F9FA',
    borderColor: '#E8EAED',
    opacity: 0.6,
  },
  appButtonText: {
    fontSize: 16,
    color: '#9AA0A6',
    fontWeight: '500',
    marginLeft: 12,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: 16,
    backgroundColor: '#E85A4F',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  skipButtonText: {
    color: '#E5E5E5',
    fontSize: 18,
    fontWeight: '400',
  },
});