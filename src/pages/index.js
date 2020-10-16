import React from 'react';
import '../assets/css/main.css';
import { observer } from 'mobx-react';
import { ButtonChanger, Title, TitleBlock } from '../components/main';
import { Link } from 'gatsby';
import store from '../stores/store';

const IndexPage = () => (
  <TitleBlock>
    {console.log('rerender Index')}
    <Title>{store.name}</Title>
    <ButtonChanger
      onClick={() => {
        console.log(store);
        store.setName('index');
        store.setSurName('index');
      }}
    >
      CHANGE!
    </ButtonChanger>
    <ButtonChanger
      onClick={() => {
        store.badRequest();
      }}
    >
      ERROR
    </ButtonChanger>
    <Link to="/second">Back to Second</Link>
  </TitleBlock>
);

export default observer(IndexPage);
