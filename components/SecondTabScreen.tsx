import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function SecondTabScreen({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.titleText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          This is the second tab screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.filenameContainer]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.instructionText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Modify the text, save the file, and your changes will reflect automatically.
        </Text>
      </View>

      <View style={styles.linkContainer}>
        <ExternalLink
          style={styles.link}
          href="https://reactnative.dev/docs/getting-started">
          <Text style={styles.linkText} lightColor={Colors.light.tint}>
            Tap here to learn more about React Native
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  filenameContainer: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  titleText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  link: {
    paddingVertical: 15,
  },
  linkText: {
    textAlign: 'center',
  },
});
