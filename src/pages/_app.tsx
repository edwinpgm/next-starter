import { AppProps } from 'next/app';
import '../styles/generic/_normalize.scss';
import '../styles/elements/_body.scss';
import '../styles/elements/_fonts.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
