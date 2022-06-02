import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

//메인화면 버튼
function Btn() {

    return (
        <Link to="/add">
        <CircleButton> 
            <MdAdd />
        </CircleButton>
        </Link>
    );
}

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }

  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

`;




export default Btn;