import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // REPLACE THIS LINK WITH YOUR ACTUAL GITHUB PAGES LINK FROM STEP 1
  // Example: const LIVE_URL = 'https://yourusername.github.io/achieve-mate/';
  const LIVE_URL = 'YOUR_GITHUB_PAGES_URL_HERE'; 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <WebView 
        source={{ uri: LIVE_URL }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // Pull-to-refresh logic (optional)
        pullToRefreshEnabled={true}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        mixedContentMode="always"
        // Ensure user stays logged in across app restarts
        sharedCookiesEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', 
  },
  webview: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
});