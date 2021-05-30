import { createMuiTheme } from '@material-ui/core/styles';
import { red, common, blueGrey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      default: common.white,
      dark: '#f4f6f8',
      paper: common.white,
    },
    primary: {
      main: '#f43366',
    },
    secondary: {
      main: '#3EA6FF',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
  },
});

export default theme;
