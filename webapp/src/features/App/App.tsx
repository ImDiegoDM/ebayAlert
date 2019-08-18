import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPhrases } from '../../actions';

const H1 = styled.h1`
  color: pink;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhrases());
  }, [dispatch]);

  return (
    <H1>Hello World!</H1>
  );
};

export default App;
