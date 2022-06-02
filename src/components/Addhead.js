import React from 'react';
import styled from 'styled-components';

//단어 추가 제목
function AddHead() {
    return (
        <AddHeadBlock>
            <h1>단어 추가하기</h1>
        </AddHeadBlock>
    );
}

const AddHeadBlock = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700;800&display=swap');   
    display: flex;
    text-align: center;
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        flex: 1;
        margin: 0;
        font-size: 30px;
        font-family: 'Nanum Myeongjo', serif;
        color: #343a40;
      }
`;


export default AddHead;