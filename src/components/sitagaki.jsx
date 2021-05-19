/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useState, useEffect } from "react";
import { 　Link  } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  useTheme,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import LogoImg from '../assets/img/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


const navWrap = css({
  backgroundColor: '#020202',
  height: '8.0rem',
  width: '100%',
  position: 'fixed',
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
  width:'9.8rem',
  height:'auto',
  '@media(min-width: 480px)': {
    width:'13.3rem',
  }
})

const navLinkWrap = css({
  display: 'flex',
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

const NavBar = () => {
  const classes = useStyles();

  const theme = useTheme();
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600 
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  //ここにPC版の見た目
  const displayDesktop = () => {
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
        </div>
      </div>
    );
  };
  //ここにSP版の見た目
  const displayMobile = () => {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar css={navWrap}>
            <img src={LogoImg} css={logoImg}/>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{ fontSize: 40 }} />
        　   </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['イベント', 'インターン', '会社概要', 'LINE追加'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} margin="0 auto"/>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  };
  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default NavBar;