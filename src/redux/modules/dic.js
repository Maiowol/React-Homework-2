// dic.js
import { db } from "../../firebase";
// import { getState } from 'react';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

import React from "react";

// Actions
const LOAD = 'my-app/dic/LOAD';
const CREATE = 'my-app/dic/CREATE';
const UPDATE = 'my-app/dic/UPDATE';
const DELETE = 'my-app/dic/DELETE';

// Action Creators
export function loadDic(dic_list) {
    return { type: LOAD, dic_list };
}

const initialState = {
    list: [
        // { word: "hallo [haló:, hálo]", explain: "안녕(만났을 때의 인사). 야, 어이(기쁨이나 놀람의 표현). (남을 부를 때) 어이, 여보시오; (전화에서) 여보세요.", 
        // example: "할로", completed: true},
        // { word: "Wort (n.)", explain: "낱말, 단어, 발언, 약속", example: "보어트", completed:false},
        // { word: "Milch", explain: "우유", example: "밀히" },
        // { word: "Obst", explain: "과일", example: "옵스트" }
    ]
};

export function createDic(dic) {
    console.log("액션을 생성할 거야!")
    return { type: CREATE, dic };
}

export function updateDic(dic_index) {
    return { type: UPDATE, dic_index };
}

export function deleteDic(dic_index) {
    return { type: DELETE, dic_index };
}

// middlewares
export const loadDicFB = () => {
    return async function (dispatch) {
        // 데이터를 가져와요!
        const dic_data = await getDocs(collection(db, "my_dictionary"));
        console.log(dic_data)

        let dic_list = [];

        dic_data.forEach((doc) => {
            console.log(doc.data());
            // dic_list = [...dic_list, {...doc.data}]; or
            dic_list.push({ id: doc.id, ...doc.data() });
        });

        //   console.log(dic_list)

        dispatch(loadDic(dic_list));
    };
};

//"C""R"UD
export const addDicFB = (dic) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "my_dictionary"), dic);

        // const _dic = await getDoc(docRef);
        const dic_data = { id: docRef.id, ...dic };

        console.log(dic_data);

        dispatch(createDic(dic_data));
    }
}

//수정하기(완료)
// export const updateDicFB = (dic_id) => {
//     return async function (dispatch) {
//         const docRef = doc(db, "my_dictionary", dic_id);
//         await updateDoc(docRef, { completed: true });

//         const _dic_list = getState().dic.list;
//         const dic_index = _dic_list.findIndex((d) => {
//             return d.id === dic_id
//         });
//         dispatch(updateDic(dic_index));
//     };
// }


//삭제하기
export const deleteDicFB = (dic_id) => {
    return async function (dispatch, getState) {


        //카드 삭제 alert
        const Btn = alert("삭제하시겠습니까?")
        if(Btn){
            alert("삭제 완료!")
        }

        //임의로 삭제 막음
        // const pw = prompt('비밀번호를 입력해주세요')
        // if(pw !== dic_id){ 
        //     window.alert('비밀번호가 틀려 삭제할 수 없습니다.');
        //     return;
        // }
        const docRef = doc(db, "my_dictionary", dic_id);
        await deleteDoc(docRef);

        const _dic_list = getState().dic.list;
        const dic_index = _dic_list.findIndex((d) => {
            return d.id === dic_id
        });
        dispatch(deleteDic(dic_index))
    }
}


// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD: {
            return { list: action.dic_list };
        }
        case CREATE: {
            console.log("이제 값을 바꿀거야!")
            const new_dic_list = [...state.list, action.dic];
            return { list: new_dic_list };
        }
        case DELETE: {
            const new_dic_list = state.list.filter((d, i) => {
                return parseInt(action.dic_index) !== i;
            });
            return { list: new_dic_list }
        }

        default: return state;
    }
}


