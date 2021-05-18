/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Redirect } from 'react-router';
import HeaderQrImg from '../../assets/img/qr.png';

const headerWrap = css({
  paddingTop: '8.0rem',
  background: 'rgba(2, 2, 2, 0.39)',
  height: '86.428rem',
  width: '100%',
  color:'#FFFFFF',
});

const header = css({
  height: '78.428rem',
  justifyContent: 'space-between',
  width: '93.4rem',
  margin: '0 auto',
})

const headerTitle = css({
  width: '63.2rem',
  paddingTop: '16.1rem',
  margin: '0 auto',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '4.5rem',
  lineHeight: '1.9rem',
  alignItems: 'center',
  letterSpacing: 0.15,
});

const headerSubTitle = css({
  width: '89.0rem',
  paddingTop: '5.0rem',
  height: '5.2rem',
  margin: '0 auto',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '2.2rem',
  lineHeight: '1.9rem',
  alignItems: 'center',
  letterSpacing: 0.15,
  display:'flex',
  flexFlow: 'column',
  justifyContent:'space-between',
});

const headerDescriptions = css({
  width: '46.7rem',
  paddingTop: '9.3rem',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
});

const headerDescriptionFrame = css({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid #FFFFFF',
  boxSizing: 'border-box',
  borderRadius: '5px',
  width: '12.7rem',
  height: '12.7rem',
  // marginTop: '9.3rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
});

const headerDescription = css({
  height: '5.4rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: 'column',
  width: '9.7rem',
  margin: '3.3rem auto 0',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '1.6rem',
  lineHeight: '1.9rem',
  alignItems: 'center',
  letterSpacing: 0.15,
});

const headerRegistrationWrap = css({
  display: 'flex',
  // width: '49.599rem',
  // height: '6.0rem',
  paddingTop: '8.0rem',
  // alignItems: 'center',
  // margin: '0 auto',
});

const headerRegistration = css({
  display: 'flex',
  width: '49.599rem',
  height: '6.0rem',
  justifyContent: 'space-between',
  margin: '0 auto',
});

const headerQrImg = css({
  width: '6.318rem',
  height: '6.0rem',
});

const headerGuideWrap = css({
  width: '41.175rem',
  // height: '1.9rem',
  // borderWidth: '0 0 31.382rem',
  height: '6.0rem',
  lineHeight: '6.0rem',
})

const borderTop = css({
  borderBottom: '1px solid #FFFFFF'
})

const borderBottom = css({
  borderBottom: '1px solid #FFFFFF'
})

const headerGuideText = css({
  color:'#FFFFFF',
  textAlign: 'center',
  fontSize: '1.8rem',
  lineHeight: '1.9rem',
  flexFlow: 'column',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '1.6rem',
  alignItems: 'center',
  letterSpacing: 0.15,
});

const Header = () => {
  return (
    <div css={headerWrap}>
      <div css={header}>
        <h1 css={headerTitle}>理系就活生に圧倒的機会提供を</h1>
        <div css={headerSubTitle}>
          <div>
            Career
            Hackerは、東大・京大生の理系就活生を企業に紹介する就活支援事業と
          </div>
          <div>アプリやWEBサイトなどのシステム開発の受託業を行っています。</div>
        </div>
        <div css={headerDescriptions}>
          <div css={headerDescriptionFrame}>
            <div css={headerDescription}>
              {/* TODO: marginかpaddingで調整 */}
              <span>特徴１</span>
              <span>説明説明説明</span>
            </div>
          </div>
          <div css={headerDescriptionFrame}>
            <div css={headerDescription}>
              <span>特徴２</span>
              <span>説明説明説明</span>
            </div>
          </div>
          <div css={headerDescriptionFrame}>
            <div css={headerDescription}>
              <span>特徴３</span>
              <span>説明説明説明</span>
            </div>
          </div>
        </div>
    
         
        <div css={headerRegistrationWrap}>
          <div css={headerRegistration} href='/'>
            <img src={HeaderQrImg} css={headerQrImg}/>          
            <div css={headerGuideWrap}>
              <p css={borderTop} ></p>
              <p css={headerGuideText}>就活・インターン情報をLINEでGET</p>
              <p css={borderBottom}></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
