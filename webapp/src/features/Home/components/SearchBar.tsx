import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  border: 1px solid #b7b5b5;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: gray;
  margin-right: 5px;
`;

const StyledInput = styled.input`
  border:none;
  &:focus{
    outline:none;
  }
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  return <Container>
    <Icon icon={faSearch} />
    <StyledInput value={props.value} onChange={(e) => props.onChange(e.target.value)} type="text"/>
  </Container>;
}
