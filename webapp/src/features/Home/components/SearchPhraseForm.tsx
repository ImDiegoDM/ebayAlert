import React from 'react';
import styled from 'styled-components';
import { ISearchPhrase } from '../../../interfaces';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

interface SearchPhraseFormProps {
  value: ISearchPhrase;
  onValueChange: (value: ISearchPhrase) => void;
  onSubmit: () => void;
}

export function SearchPhraseForm(props: SearchPhraseFormProps) {
  const value = props.value;

  return <Form onSubmit={(e) => {
    e.preventDefault();
    props.onSubmit();
  }}>
    <Label>
      Email
      <input
        value={value.email}
        required
        onChange={(e) => {
          props.onValueChange({...value, email: e.target.value});
        }}
        type="email"/>
    </Label>
    <Label>
      Phrase
      <input
        required
        value={value.phrase}
        onChange={(e) => {
          props.onValueChange({...value, phrase: e.target.value});
        }}
        type="text"/>
    </Label>
    <Label>
      How often
      <select value={value.howOften} onChange={(e) => {
        props.onValueChange({...value, howOften: (e.target.value as '2' | '10' | '30')});
      }}>
        <option value="2">2</option>
        <option value="10">10</option>
        <option value="30">30</option>
      </select>
    </Label>
    <div>
      <input type="submit"/>
    </div>
  </Form>;
}
