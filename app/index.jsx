// 

// import { StyleSheet, Text, View } from 'react-native';
// import { UserProvider } from './contexts/UserContext';
// import { Router } from './lib/Router';

// export default function App() {
//   return (
//     <UserProvider>
//         <Router />
//     </UserProvider >
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { Text, View } from 'react-native';
import { UserProvider } from './contexts/UserContext';
import { Router } from './lib/Router';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

// Note: The styles constant is unused in this component, so it can be removed
// If you need to use styles later, you can add back the StyleSheet import
// and the styles constant
