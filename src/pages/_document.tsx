import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class WebsiteDocument extends Document {
	override render() {
		return (
			<Html>
				<Head>
				<link rel="icon" type="image/png" href="https://cdn.discordapp.com/avatars/330299657458679821/76a60c9f0a3f0e51829507026e22e962.png?size=4096" />
				</Head>
				<body className="bg-[#f7f2f2] dark:bg-zinc-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
