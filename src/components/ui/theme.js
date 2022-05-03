import { createTheme } from '@material-ui/core/styles';

const myBlue = "#0838FF";
const myOrange = "#FFBA44"

export const darkTheme = createTheme({
  palette: {
    common: {
      blue: `${myBlue}`,
      orange: `${myOrange}`,
    },
    primary: {
      main: `${myBlue}`,
    },
    secondary: {
      main: `${myOrange}`,
    },
    tertiary: {
      main: 'red',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 700,
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      color: `${myBlue}`,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    tab: {
      fontWeight: 700, 
      fontSize: '1rem',
      minWidth: 10,
      marginLeft: '25px',
    },
  },
});
