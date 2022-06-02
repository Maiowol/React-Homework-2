import React, { getState, useEffect } from 'react';

import { createGlobalStyle } from 'styled-components';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Route
import { Routes, Route } from 'react-router-dom';

// Components
import Template from './components/Template';
import MainHead from './components/MainHead';
import MainCard from './components/MainCard';
import Btn from './components/Btn';
import AddHead from './components/Addhead';
import AddList from './components/AddList';

import { loadDicFB } from "./redux/modules/dic"
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadDicFB());
   
  // 가져오기
  //   const query = await getDocs(collection(db, "my_dictionary" ));
  //   console.log(query);

  //   query.forEach((doc) => 
  //   console.log(doc.id,doc.data()));

  // 추가하기
  //  collection(db, "my_dictionary")
  //  addDoc( collection(db, "my_dictionary"), {text: "new", completed: false})

  // 수정하기
  //  const docRef = doc(db, "my_dictionary",  "LYxwSE2ap1IWvpYtVR1g");
  //  updateDoc(docRef, {completed: true})

  // 삭제하기
  // const docRef = doc(db, "my_dictionary",  "IplY4wLaHDJw2o95ISWL");
  // deleteDoc(docRef);

  // addDoc(collection(db, "my_dic"), {text: "new", completed: false})

  }, []);


  return (
    <>
      <GlobalStyle />

      {/* Mainpage */}
      <Routes>
       <Route path='/' element={
            <Template>
              <MainHead />
              <MainCard />
              <Btn />
            </Template>
        }> </Route>

        {/* Addpage */}
        <Route path='/add' element={
           <Template>
             <AddHead />
             <AddList />
            </Template>
        }></Route>
       
        {/* NotFound */ }
      <Route path='*' element={<div>NotFound</div>}></Route>

      </Routes>
        
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default App;