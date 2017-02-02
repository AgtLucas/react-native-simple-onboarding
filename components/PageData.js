import React from 'react';
import { View, Text } from 'react-native';

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, width, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <View style={[styles.textContainer, { width }]}>
        <View style={styles.headerContainer}>
          {title}
        </View>
        <Text style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}) }}>
          {subtitle}
        </Text>
      </View>
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#FFF',
    height: 200
  },
  image: {
    flex: 1,
    paddingBottom: 60,
    alignItems: 'center',
  }
};

export default PageData;
