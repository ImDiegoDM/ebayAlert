import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhrases } from '../../actions';
import { Home } from '../Home';
import { Modal } from '../Modal/Modal';
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhrases());
  }, [dispatch]);

  return <>
    <GlobalStyle/>
    <Home/>
    <Modal/>
  </>;
};

export default App;
