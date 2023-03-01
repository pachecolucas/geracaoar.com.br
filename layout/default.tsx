import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  backgroundColor: string | undefined;
}>`

  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap'); */

  /* @font-face {
    font-family: 'pixel';
    src: url('/assets/fonts/Symtext.ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  } */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html {
    height: 100%;
    color: white;
    font-size: 14px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#000000dd"};
    /* font-family: 'Noto Serif', serif; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    /* background-image: url("/assets/imgs/bg1.jpg"); */
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */
    /* background-attachment: fixed; */
    /* padding-top: 55px; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
`;

type Props = {
  children: any;
  backgroundColor?: string;
};

const BasicLayout = ({ children, backgroundColor }: Props) => {
  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      {children}
    </>
  );
};

export default BasicLayout;
