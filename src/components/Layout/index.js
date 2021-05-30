import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

import Topbar from './Topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    overflow: 'auto',
    height: '100%',
  },
}));

const Layout = ({ children, title }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale-1.0, width-device-width" />
      </Head>
      <div className={classes.root}>
        <Topbar />
        <div>Navbar</div>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
