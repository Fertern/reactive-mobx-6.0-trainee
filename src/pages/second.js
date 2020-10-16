import React from 'react';
import '../assets/css/main.css';
import { observer } from 'mobx-react';
import { ButtonChanger, Title, TitleBlock } from '../components/main';
import store from '../stores/store';
import { Link } from 'gatsby';

const Second = () => {
  return (
    <TitleBlock>
      {console.log('rerender Second')}
      <Title>{store.name}</Title>
      <ButtonChanger
        onClick={() => {
          console.log(store);
          store.setName('second');
        }}
      >
        CHANGE!
      </ButtonChanger>
      <Link to="/">Back to Index</Link>
    </TitleBlock>
  );
};

export default observer(Second);
