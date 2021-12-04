import React from 'react';
import Styles from './Title.module.scss';

export const Title: React.FC = ({ children }) => (
  <h1 className={Styles.Title}>{children}</h1>
);
