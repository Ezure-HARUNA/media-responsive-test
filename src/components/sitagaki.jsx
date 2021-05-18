/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
import LogoImg from '../assets/img/logo.png';

const navWrap = css({
  backGroundColor: '#222222',
  display: 'flex',
  height: '6.0rem',
  width: '94.4%',
  justifyContent: 'space-between',
  margin: '0 auto',
})

const logoImg = css({
  width: '9.8rem',
  height:'auto',
  '@media(min-width: 480px)': {
    width:'13.3rem',
  }
})

const headersData = [
  {
    label: "イベント",
    href: "/listings"
  },
  {
    label: "インターン",
    href: "/mentors"
  },
  {
    label: "会社概要",
    href: "/account"
  },
  {
    label: "LINE追加",
    href: "/logout"
  }
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#222222",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 480px)": {
      paddingLeft: 0
    }
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerContainer: {
    padding: "20px 30px"
  }
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 480
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar css={navWrap}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          {/* <div className={drawerContainer}>{getDrawerChoices()}</div> */}
        </Drawer>

        {/* <div>{femmecubatorLogo}</div> */}
        <img src={LogoImg} css={logoImg}/>
      </Toolbar>
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
  //           key: label
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };

  const femmecubatorLogo = (
    <img src={LogoImg} css={logoImg}/>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            // component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
