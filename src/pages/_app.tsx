import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import type {AppProps} from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';


export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>riichi</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<a rel="me" href="https://wetdry.world/@riichi"></a>
				<link rel="icon" type="image/png" href="https://cdn.discordapp.com/avatars/920329543187832912/8391de39e6e43b8e7a3b6b2ca0f73b84.png?size=4096" />
			</Head>
			<ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Analytics />
			</ThemeProvider>
		</>
	);
}
