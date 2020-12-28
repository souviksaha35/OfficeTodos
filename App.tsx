import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';
Amplify.configure(awsmobile);
import 'react-native-get-random-values';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      console.log(userInfo);

      if (userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub}));

        console.log(userData);

        if (userData.data.getUser) {
          console.log("User is already registered");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280'
        }

        await API.graphql(graphqlOperation(createUser, {
          input: newUser
        }))
      }
    }

    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);