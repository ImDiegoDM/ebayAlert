import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPhrases } from '../../actions';
import { modalOpen } from '../../actions/modal';
import { ISearchPhrase } from '../../interfaces';
import { Header } from './components/Header';
import { Phrases } from './components/Phrases';
import { SearchBar } from './components/SearchBar';
import { CreateOverlay } from './CreateOverlay';
import { EditOverlay } from './EditOverlay';

type OverlayType = 'create' | 'edit' | 'closed';

const Add = styled.div`
  color:gray;
  cursor: pointer;
`;

export function Home() {
  const [overlay, setOverlay] = useState<OverlayType>('closed');
  const [selectedPhrase, setSelectedPhrase] = useState<ISearchPhrase|undefined>(undefined);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const [timeout, settime] = useState<any>(undefined);

  useEffect(() => {
    clearTimeout(timeout);

    settime(setTimeout(() => {
      dispatch(fetchPhrases(search));
    }, 300));

  }, [search]);

  function handleDelete(id?: string) {
    if (id) {
      dispatch(modalOpen(async () => {
        await Axios.delete(process.env.REACT_APP_SERVER_URL + '/search_phrases/' + id);
        dispatch(fetchPhrases());
      }, 'Are you sure that you want to delete this alert ?'));
    }
  }

  return <>
    <Header>
      <div>Ebay Alert Program</div>
      <SearchBar value={search} onChange={setSearch}/>
      <Add onClick={() => setOverlay('create')}>
        <FontAwesomeIcon icon={faPlus}/>
      </Add>
    </Header>
    <Phrases onDelete={handleDelete} onSelect={(phrase) => {
      setSelectedPhrase(phrase);
      setOverlay('edit');
    }}/>
    <CreateOverlay open={overlay === 'create'} onClose={() => setOverlay('closed')}/>
    <EditOverlay
      phrase={selectedPhrase}
      open={overlay === 'edit' && selectedPhrase !== undefined}
      onClose={() => setOverlay('closed')}/>
  </>;
}
