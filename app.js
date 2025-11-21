import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useAssets } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export default function App() {
  // Path corrected to look in the root folder for index.html
  const [indexHtml, indexHtmlError] = useAssets([require('./index.html')]); 
  const [htmlString, setHtmlString] = useState(null);

  useEffect(() => {
    if (indexHtml) {
      const loadHtml = async () => {
        const localUri = indexHtml[0].localUri;
        const fileContent = await FileSystem.readAsStringAsync(localUri);
        setHtmlString(fileContent);
      };
      loadHtml();
    }
  }, [indexHtml]);

  if (!htmlString) {
    return <View style={{flex:1, backgroundColor: '#0f172a'}} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <WebView 
        originWhitelist={['*']}
        source={{ html: htmlString, baseUrl: '' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        mixedContentMode="always"
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