import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalClose, modalConfirm } from '../../actions/modal';
import { selectModal } from '../../selectors/modal';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0, 0, 0, 0.51);
  z-index: 20;
`;

const ModalBox = styled.div`
  width: 450px;
  height: 300px;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  border-radius: 10px;
  position:absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-evenly;
  text-align: center;
  padding: 20px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-right: 15px;
`;

export function Modal() {
  const modalState = useSelector(selectModal);
  const dispatch = useDispatch();

  if (!modalState.open) {
    return <></>;
  }

  return <Container>
    <ModalBox>
      <h2>{modalState.text}</h2>
      <Buttons>
        <Button onClick={() => dispatch(modalClose())}>Cancel</Button>
        <Button onClick={() => dispatch(modalConfirm())}>Confirm</Button>
      </Buttons>
    </ModalBox>
  </Container>;
}
