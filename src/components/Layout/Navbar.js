import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import {
  AccountCircle as AccountCircleIcon,
  History as HistoryIcon,
  Home as HomeIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  Whatshot as WhatshotIcon,
} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: WhatshotIcon },
  {
    id: 3,
    label: 'Inscrições',
    path: '/subscription',
    icon: SubscriptionsIcon,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibraryIcon },
  { id: 2, label: 'Historico', icon: HistoryIcon },
];

function Navbar() {
  const classes = useStyle();
  const router = useRouter();

  const isSelected = (item) => router.pathname === item.path;

  const content = (
    <Box display="flex" height="100%" flexDirection="column">
      <List>
        {primaryMenu.map((menuItem) => {
          const Icon = menuItem.icon;
          return (
            <ListItem
              key={menuItem.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(menuItem)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(menuItem) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={menuItem.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((menuItem) => {
          const Icon = menuItem.icon;
          return (
            <ListItem
              key={menuItem.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(menuItem)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(menuItem) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={menuItem.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, commentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircleIcon />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Hidden>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.desktopDrawer,
        }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default Navbar;
