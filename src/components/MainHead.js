import React from 'react';
import styled from 'styled-components';


//메인 제목
function MainHead() {
    return (
        <MainHeadBlock>
            <h1>My Dictionary</h1>
        </MainHeadBlock>
    );
}

const MainHeadBlock = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700;800&display=swap');   
    dispaly: flex;
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    
    h1 {
        flex: 1;
        text-align: center;
        font-size: 30px;
        font-family: 'Nanum Myeongjo', serif;
        color: #343a40;
        
      }
`;


export default MainHead;