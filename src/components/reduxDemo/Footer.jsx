// @flow
import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/Todo';

const Footer = () => (
  <p>
    Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Footer;
