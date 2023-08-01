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
				<title>riichi(34)</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" type="image/png" href="https://cdn.discordapp.com/avatars/330299657458679821/76a60c9f0a3f0e51829507026e22e962.png?size=4096" />
			</Head>
			<ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Analytics />
			</ThemeProvider>
		</>
	);
}
