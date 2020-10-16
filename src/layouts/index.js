import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../components/container';
import { observer } from 'mobx-react';
import store from '../stores/store';
import { Title } from '../components/main';

const Layout = ({ children }) => (
  <>
    {console.log('rerender Layout')}
    <Title>{store.surname}</Title>
    <Container>{children}</Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default observer(Layout);
