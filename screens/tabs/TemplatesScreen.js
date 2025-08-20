import React, { useRef } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TemplatesScreen() {
  const webViewRef = useRef(null);

  const injectedJavaScript = `
    (function() {
      // Remove all margins and padding from body and html
      document.documentElement.style.margin = '0';
      document.documentElement.style.padding = '0';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      
      // Add custom styles for native feel
      var style = document.createElement('style');
      style.innerHTML = \`
        * {
          -webkit-user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow-x: hidden !important;
        }
        
        /* Hide any potential address bars or browser UI */
        .browser-ui, .address-bar, .url-bar {
          display: none !important;
        }
      \`;
      document.head.appendChild(style);
      
      // Force viewport to full screen
      var viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
      } else {
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        document.head.appendChild(meta);
      }
    })();
    true;
  `;


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://hera.video' }}
        style={styles.webview}
        injectedJavaScript={injectedJavaScript}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        scalesPageToFit={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        automaticallyAdjustContentInsets={false}
        contentInsetAdjustmentBehavior="never"
        hideKeyboardAccessoryView={true}
        keyboardDisplayRequiresUserAction={false}
        allowsFullscreenVideo={true}
        mixedContentMode="compatibility"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});