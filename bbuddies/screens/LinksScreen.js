import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'expo-activity-feed';

export default function LinksScreen() {
  return (
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <StreamApp
            apiKey="5rqsbgqvqphs"
            appId="40273"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGRiMmFiMGItNTZkMy00NDJmLWE3YjAtNTM0MjE5MWI3YjI2In0.dzKctN-wfM2nvay_qL0Nz_mgXE17WPGeY8D-vaVLA60"
        >
          <FlatFeed />
        </StreamApp>
      </SafeAreaView>
  );
}

LinksScreen.navigationOptions = {
  title: 'My Feed',
};

