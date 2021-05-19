/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/img/logo.png';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const navWrap = css({
  backgroundColor: '#020202',
  height: '8.0rem',
  width: '100%',
  position: 'fixed',
  zIndex: '99'
});

const nav = css({
  display: 'flex',
  height: '8.0rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1040px',
  margin: '0 auto'
});

const logoImg = css({
  width:'13.3rem',
  height:'auto',
})

const navLinkWrap = css({
  display: 'flex',
  '@media(max-width: 600px)': {
    display: 'none'
  }
});

const navLi = css({
  textDecoration: 'none',
  listStyle: 'none',
  marginRight: '35px',
  '&:last-child': {	
    marginRight: '0'
  }
});

const navLink = css({
  color: '#ffffff',
  textDecoration: 'none',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '1.6rem',
  lineHeight: '1.9rem',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: 0.15,
})

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconDisplay: {
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icon: {
    backgroundColor: '#ffffff'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const NavBar = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div css={navWrap}>
      <div css={nav}>
        <Link to='/'>
          <img src={LogoImg} css={logoImg}/>
        </Link>
        <ul css={navLinkWrap}>
          <li css={navLi}>
            <Link css={navLink} to='/event'>
              イベント
            </Link>
          </li>
          <li css={navLi}>
            <Link css={navLink} to='/intern'>
              インターン
            </Link>
          </li>
          <li css={navLi}>
            <Link css={navLink} to='/about'>
              会社概要
            </Link>
          </li>
          <li css={navLi}>
            <Link css={navLink} to='/'>
              LINE追加
            </Link>
          </li>
        </ul>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide), classes.iconDisplay}
        >
          <MenuIcon className={classes.icon}/>
        </IconButton>
      </div>
      <Drawer
          // className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['イベント', 'インターン', '会社概要', 'LINE追加'].map((text, index) => (
            <ListItem button key={text} component={Link} to='/event'>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
			<h2>郷原さん見本</h2>
    </div>
  );
};

export default NavBar;