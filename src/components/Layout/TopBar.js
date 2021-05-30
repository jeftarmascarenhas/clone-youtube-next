import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Paper,
  InputBase,
  IconButton,
  Button,
  Hidden,
} from '@material-ui/core';
import {} from '@material-ui/core';
import {
  AccountCircle,
  Apps,
  Menu as MenuIcon,
  MoreVert,
  Search as SearchIcon,
  VideoCall,
} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));

function Topbar() {
  const classes = useStyle();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="/youtube-logo.png" alt="Logo" className={classes.logo} />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper className={classes.search}>
              <InputBase
                placeholder="Pesquisar"
                inputProps={{
                  'aria-label': 'search google maps',
                }}
                className={classes.input}
              />
              <IconButton type="submit" aria-label="searh">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display="flex">
          <IconButton className={classes.icon}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icon}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icon}>
            <MoreVert />
          </IconButton>
          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
