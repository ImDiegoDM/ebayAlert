import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ISearchPhrase } from '../../../interfaces';

const Container = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  box-shadow: 0 0 10px 3px #b9b4b4;
  border-radius: 10px;
  margin: 10px 15px;
  cursor: pointer;
`;

const Email = styled.span`
  position:absolute;
  bottom:10px;
  left:10px;
`;

const HowOften = styled.span`
  position: absolute;
  bottom:10px;
  right:10px;
`;

const Phrase = styled.div`
  position: absolute;
  top:10px;
  left:10px;
  font-size: 1.7em;
  width: calc( 100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap
`;

export interface CardPhraseProps {
  phrase: ISearchPhrase;
  onDelete?: () => void;
  onClick?: () => void;
}

const Icon = styled.div`
  position: absolute;
  top:10px;
  right:10px;
  color:red;
  cursor: pointer;
  z-index: 10;
`;

export function CardPhrase(props: CardPhraseProps) {
  return <Container onClick={props.onClick}>
    <Icon onClick={(e) => {
      e.stopPropagation();
      if (props.onDelete) {
        props.onDelete();
      }
    }}>
      <FontAwesomeIcon icon={faTrashAlt}/>
    </Icon>
    <Email>{props.phrase.email}</Email>
    <Phrase title={props.phrase.phrase}>{props.phrase.phrase}</Phrase>
    <HowOften>{props.phrase.howOften}</HowOften>
  </Container>;
}
