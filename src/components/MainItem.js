import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteDicFB } from '../redux/modules/dic';
import { $CombinedState } from 'redux';


// MainList 에서 props로 받기
function MainItem(props) {

    const dispatch = useDispatch();

    return (
        <MainItemBlock>
            <div className='cardbox'>
                <div>
                    <p>단어: </p>
                    <div className='word'>{props.word}</div>
                </div>
                <div className='explain'>
                    <p>설명:</p>
                    <div className='expalin'>{props.explain}</div>
                </div>

                <div className='example'>
                    <p>예시:</p>
                    <div class Name='example'>{props.example}</div>
                </div>
            </div>
        
            <Remove>
                <div onClick= {() => {
                    console.log('삭제하기!')
                    dispatch(deleteDicFB(props.id));
                }} > < MdDelete /></div>
            </Remove>
        </MainItemBlock>
    );
}

const Remove = styled.div`
  display: flex;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
  margin-right: 400px;
`;

const MainItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }


.cardbox {
 border: 1px solid #dee2e6;
 height: 150px;
 padding-top: 10px;
 padding-bottom: 20px;
 padding-left: 7px;
 background-color: white;
 overflow-y: auto; 
 box-shadow: 5px 5px 5px gray;

  }

  .cardbox:hover {
    //   110배 확대
      transform: scale(1.1); 
      transition: .6s;
     
  }

p {
    margin: 0px;
    color: gray;
    font-size: 10px;
}

.word {
    margin-bottom: 6px;
}

.explain {
    margin-bottom: 7px;
    font-size: 13px;
}

.example {
    
    color: #3cb371;
    font-size: 13px;
}
`;

export default MainItem;