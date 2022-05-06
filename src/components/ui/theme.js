import { createTheme } from '@material-ui/core/styles';

const myBlue = "#0838FF";
const myOrange = "#FFBA44";
const myGrey = "#232323"

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
    h3: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      fontSize: '2rem',
      color: `${myBlue}`,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: myGrey,
    },
      subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      fontSize: '1.5rem',
    },
    tab: {
      fontWeight: 700, 
      fontSize: '1rem',
      minWidth: 10,
      marginLeft: '25px',
    },
    estimate: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'none',
      fontSize: '1.1em',
    },
  },
});
