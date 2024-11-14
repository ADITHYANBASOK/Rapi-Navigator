import React from "react";
import { ThemeProvider } from "react-native-rapi-ui"; 
import AppNavigator from "./Src/Navigator/AppNavigator";

const App = () => {  
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
