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

const PageData = ({ isLight, image, title, icon, subtitle, width, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <View style={[styles.textContainer, { width }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          {icon}
        </View>
        <Text style={styles.subTitle}>
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
    paddingHorizontal: 25,
    height: 200
  },
  headerContainer: {
    paddingVertical: 20,
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#999'
  },
  subTitle: {
    fontSize: 14,
    color: '#999'
  }
};

export default PageData;
