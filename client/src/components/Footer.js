import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import PlusBtn from "./PlusBtn";

export default function Footer() {
  const [onSearch, setOnSearch] = useState(false);
  const [onProfile, setOnProFile] = useState(true);

  const handleColor = () => {
    setOnSearch(!onSearch);
    setOnProFile(!onProfile);
  };

  const handlePage = () => {
    setOnSearch(!onSearch);
    setOnProFile(!onProfile);
  };

  return (
    <FooterContainer>
      <Link to="/" className="footerLink">
        <div
          className={onSearch ? "iconBox viewPage" : "iconBox"}
          onClick={handleColor}
        >
          <FiSearch />
        </div>
      </Link>
      <PlusBtn />
      <Link to="/Profile">
        <div
          className={onProfile ? "iconBox viewPage" : "iconBox"}
          onClick={handlePage}
        >
          <BsFillPersonFill />
        </div>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: 48px;
  color: #bababa;
  position: fixed;
  top: 90%;
  background: white;
  a {
    color: black;
  }

  .footerLink {
    color: black;
  }

  .iconBox {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .viewPage {
    color: #bababa;
  }
`;
