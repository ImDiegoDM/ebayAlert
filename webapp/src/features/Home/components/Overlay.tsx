import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{open: boolean}>`
  width:300px;
  background-color: white;
  transition: all 250ms;
  position: absolute;
  top:0;
  bottom:0;
  right:0;

  transform: ${(props) => props.open ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: right;

  box-shadow: 0 0 11px 4px #00000047;

  padding: 20px;
  z-index: 15;
`;

const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color:gray;
`;

export interface OverlayProps {
  children: ReactNode;
  open: boolean;
  onExit?: () => void;
}

export function Overlay(props: OverlayProps) {
  return <Container open={props.open}>
    <Icon onClick={props.onExit}>
      <FontAwesomeIcon icon={faTimes}/>
    </Icon>
    {props.children}
  </Container>;
}
