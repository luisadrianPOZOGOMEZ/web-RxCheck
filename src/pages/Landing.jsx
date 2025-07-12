import React from "react";
import styled from "styled-components";
import '../assets/styles/index.css'
import Medico from '../assets/imgs/Image.svg'
import { useNavigate } from 'react-router-dom';

const HeroSectionBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 1040px;
  top: -16px;
  left: 0;
  background: #647be1;
`;

const Image = styled.div`
  position: absolute;
  width: 472px;
  height: 582px;
  top: 72px;
  left: 867px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-28/jjxXCMjugh.png)
    no-repeat center;
  background-size: cover;
  z-index: 1;
`;

const HeroTitle = styled.div`
  position: absolute;
  width: 663px;
  height: 264px;
  top: 142px;
  left: 137px;
  font-family: Poppins, var(--default-font-family);
  font-size: 36px;
  font-weight: 500;
  line-height: 68px;
  text-align: left;
  letter-spacing: 0.72px;
  z-index: 3;
`;

const StartBroadcastingRecipes = styled.span`
  position: relative;
  color: #ffffff;
  font-family: Poppins, var(--default-font-family);
  font-size: 31px;
  font-weight: 500;
  line-height: 68px;
  text-align: left;
  letter-spacing: 0.72px;
`;

const SafePlace = styled.span`
  position: relative;
  color: #ffffff;
  font-family: Poppins, var(--default-font-family);
  font-size: 56px;
  font-weight: 700;
  line-height: 68px;
  text-align: left;
  letter-spacing: 0.72px;
`;

const IntelligentRecipes = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 32px;
  top: 423px;
  left: 137px;
  color: #ffffff;
  font-family: Poppins, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.4px;
  opacity: 0.7;
  z-index: 4;
`;

const SearchSectionBackground = styled.div`
  position: absolute;
  width: 1196px;
  height: 429px;
  top: 488px;
  left: 122px;
  background: #ffffff;
  z-index: 5;
  border-radius: 24px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.15);
`; 

const Rectangle = styled.button`
  width: 466px;
  height: 71px;
  margin: 191px 0 0 365px;
  background: #0d0d0d;
  color: #ffffff;
  z-index: 6;
  border-radius: 12px;
  font-family: Plus Jakarta Sans, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
`;


function Landing() {
  const navigate = useNavigate();

  const clickButton = () => {
    navigate('/Login');
  }
    return ( 
        <div className="main-container">
      <HeroSectionBackground>
        <Image />
        <HeroTitle>
          <StartBroadcastingRecipes>
            Empieza a emitir tus recetas
            <br />
          </StartBroadcastingRecipes>
          <SafePlace>En el lugar mas seguro para tus pacientes</SafePlace>
        </HeroTitle>
        <IntelligentRecipes>
          Deja potenciar tus recetas con inteligencia artificial
        </IntelligentRecipes>
        <SearchSectionBackground>
          <Rectangle onClick={clickButton} style={{ cursor: 'pointer' }}>Empezar a recetar
          </Rectangle>
        </SearchSectionBackground>
      </HeroSectionBackground>
    </div>
     );
}

export default Landing;