import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} class="bg-gray-600" />;
}
