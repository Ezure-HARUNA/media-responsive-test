import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  // Link,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { 　Link  } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LogoImg from '../assets/img/logo.png';
// import { Link } from 'react-router-dom';

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
  width:'13.3rem',
  height:'auto',
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

//いらない
// const headersData = [
//   {
//     label: "Listings",
//     href: "/listings",
//   },
//   {
//     label: "Mentors",
//     href: "/mentors",
//   },
//   {
//     label: "My Account",
//     href: "/account",
//   },
//   {
//     label: "Log Out",
//     href: "/logout",
//   },
// ];

//いらない
// const useStyles = makeStyles(() => ({
//   header: {
//     backgroundColor: "#400CCC",
//     paddingRight: "79px",
//     paddingLeft: "118px",
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//     },
//   },
//   logo: {
//     fontFamily: "Work Sans, sans-serif",
//     fontWeight: 600,
//     color: "#FFFEFE",
//     textAlign: "left",
//   },
//   menuButton: {
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: 700,
//     size: "18px",
//     marginLeft: "38px",
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   drawerContainer: {
//     padding: "20px 30px",
//   },
// }));

// ここだけ残す
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
    // const handleDrawerOpen = () =>
    //   setState((prevState) => ({ ...prevState, drawerOpen: true }));
    // const handleDrawerClose = () =>
    //   setState((prevState) => ({ ...prevState, drawerOpen: false }));

    
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

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
            {/* <div className={classes.drawerHeader} /> */}
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
            {/* <Divider />
            <List>
              {['', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List> */}
          </Drawer>
        </div>
      );
  };

  // const getDrawerChoices = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Link
  //         {...{
  //           component: RouterLink,
  //           to: href,
  //           color: "inherit",
  //           style: { textDecoration: "none" },
  //           key: label,
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };

  //いらない
  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Femmecubator
    </Typography>
  );
  
  //いらない
  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //           // component: RouterLink,
  //           className: menuButton,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default NavBar;