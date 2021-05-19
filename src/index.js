import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';
import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
      </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();