import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed, Activity,
  LikeButton, } from 'expo-activity-feed';

const CustomActivity = (props) => {
  return (
      <Activity
          {...props}
          Footer={
            <LikeButton {...props} />
          }
      />
  );
};

export default function LinksScreen() {
  return (
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <StreamApp
            apiKey="5rqsbgqvqphs"
            appId="40273"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOWQ3NzY1NzItMDM1ZS00MzVmLTg4NjItYTM2MjcxOTYzMzcwIn0.B7k2F48XYfRW4R9Lo3D6qdYb_dOpoVesdD2u9iSuwEw"
        >
          <FlatFeed Activity={CustomActivity} />
        </StreamApp>
      </SafeAreaView>
  );
};

LinksScreen.navigationOptions = {
  title: 'My Feed',
};

