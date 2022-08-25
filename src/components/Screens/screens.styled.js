import styled from "styled-components";
import img from "../../assets/depannage.jpeg";
const ScreensContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5% 5%;
  .screenWrapper {
    background: transparent;
    height: fit-content;
    width: 100%;
    img {
      height: 50vw;
    }
  }
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${img});
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${img});

    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }
`;

export { ScreensContainer };
