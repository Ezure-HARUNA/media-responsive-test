/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/img/logo.png';


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

const Navbar = () => {
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

export default Navbar;