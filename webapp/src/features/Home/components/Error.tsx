import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

interface ErrorProps {
  onTryAgain?: () => void;
}

export function Error(props: ErrorProps) {
  return <Container>
    <span>Opss.. it seems an error has ocurred getting the alerts</span>
    <div>
      <button onClick={props.onTryAgain}> try again </button>
    </div>
  </Container>;
}
