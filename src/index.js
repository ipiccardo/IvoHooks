import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './01-useState/CounterApp';
import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks';
import SimpleForm from './02-useEffect/SimpleForm';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
import HooksApp from './HooksApp';
import './index.css';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreen from './04-useRef/FocusScreen';
import Layout from './05-useLayoutEffect/Layout';
import Memorize from './06-memos/Memorize';
import MemoHook from './06-memos/MemoHook';
import CallbackHooks from './06-memos/CallbackHooks';
import { Padre } from './07-tarea-memo/Padre';
import './08-useReducer/Intro-reducer'
import TodoApp from './08-useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';
import { BrowserRouter } from "react-router-dom";

// HIGH ORDER COMPONENT SIGNIFICA QUE RECIBE OTROS COMPONENTES DENTRO DE EL.
// EL BROWSERROUTER ES UN HOC HIGH ORDER COMPONENT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter >
    <HooksApp />
    <CounterApp />
    <CounterWithCustomHooks />
    <SimpleForm />
    <FormWithCustomHook />
    <MultipleCustomHooks />
    <FocusScreen />
    <Layout />
    <Memorize />
    <MemoHook />
    <CallbackHooks />
    <Padre />
    <TodoApp />
    <MainApp />
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

