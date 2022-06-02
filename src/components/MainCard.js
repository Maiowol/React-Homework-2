import React from 'react';
import styled from 'styled-components';
import MainItem from './MainItem'; //같은 파일 안에 있기 때문에 /components 제외
import { useSelector } from "react-redux";

//메인 페이지 카드 뷰
function MainCard() {

    // let [words, setWord] = useState(['Hallo', 'Name', 'Wein', 'Saft', 'Obst']);
    // let [explain, setExplain] = useState(['안녕', '2', '3', '4', '5']);
    // let [example, setExample] = useState("Hallo! Wie geht's dir?", '2', '3', '4', '5');

    //store가 갖고 있는 리스트 값을 갖고오기
    const dic_list = useSelector((state) => state.dic.list);

    console.log(dic_list)
    
    return (
    <MainCardblock>
        {/* MainItem으로 보냄 */}
        {dic_list.map(function (list, index) {
            return (
                    <MainItem key={index}
                        id={list.id}
                        word={list.word}
                        explain={list.explain}
                        example={list.example} 
                        />
                )
            })
        }
    </MainCardblock>
    );   
};

const MainCardblock = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px 32px;
 padding-bottom: 48px;
 overflow-y: auto; 
//  부모요소의 범위를 넘어가는 자식요소의 부분이 있을 경우 해당 부분을 보이지 않도록 처리하고, 사용자가 해당 부분을 확인 할 수 있도록 스크롤바를 표시 한다.
//  (내용이 넘칠때만 세로 스크롤바 표시) 
 
`;


export default MainCard;