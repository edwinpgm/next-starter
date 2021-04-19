import Styles from './Title.module.scss';

export const Title = ({ children }) => (
  <h1 className={Styles.Title}>{children}</h1>
);
