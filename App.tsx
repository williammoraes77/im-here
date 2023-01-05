import { StatusBar, useColorScheme } from "react-native";

import { Home } from "./src/screens/Home";

import { ThemeProvider } from "styled-components/native";

import themes from "./src/theme";

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
