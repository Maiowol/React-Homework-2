import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { addDicFB } from "../redux/modules/dic";
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

//단어 추가 페이지( 단어,설명,예시란/ 삭제버튼 )
function AddList() {

    const word = React.useRef(null);
    const explain = React.useRef(null);
    const example = React.useRef(null);

    const dispatch = useDispatch();

    // MainCard에 추가하기
    const addMainCard = () => {
        console.log("수정본!")
        console.log(word, explain, example)

        dispatch(addDicFB({
            word: word.current.value,
            explain: explain.current.value,
            example: example.current.value
        }
        ));

    };
    return (
        <>
            <AddListBlock>
                <input type="text" class="word" ref={word} placeholder="단어" />
                <input type="text" class="explain" ref={explain} placeholder="설명" />
                <textarea  class="example" ref={example} placeholder="예시" />

                <Link to="/">
                    <CircleButton onClick={addMainCard}>
                        <MdAdd />
                    </CircleButton>
                </Link>
            </AddListBlock>

        </>

    );
}


const AddListBlock = styled.div`
 display: flex;
 flex-direction: column;
 align-items: left;
 padding-top: 40px;
 padding-left: 30px;
 padding-right: 30px;
 padding-bottom: 50px;

input {
    &:hover { 
   outline: 0.5px solid black;
   background: white;
    }
 outline: none;
 background: #f5f5f5;
}

input::placeholder {
 padding-left: 8px;
}

textarea {
    &:hover {
 outline: 0.5px solid black;
 background: white;
    }
 outline: none;
 background: #f5f5f5;
}

textarea::placeholder {
 padding-left: 8px;
 padding-top: 10px;
}


.word {
 border: 1px solid #dee2e6;
 height: 60px;
 padding-bottom: 10px;
 margin-bottom: 30px;
}
   
.explain {
border: 1px solid #dee2e6;
 height: 60px;
 padding-bottom: 10px;
 margin-bottom: 30px;
}

.example {
 border: 1px solid #dee2e6;
 height: 60px;
 padding-bottom: 10px;
 margin-bottom: 30px;
}

.btn {
 height: 50px;
 background: #38d9a9;

}

.btn:hover {
 text-color: #38d9a9;
}
`;

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


export default AddList;