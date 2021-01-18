import React from 'react';
import { AppContext } from './AppContext';

const { useContext } = React;

export default function() {
  return useContext(AppContext);
}
