import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "ProjectX" }) => (
	<div>
		<Head>
			<title>X</title>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="defaultLanguage" content="fr" />
			<meta name="availableLanguages" content="fr, en" />
			<link rel="stylesheet" href="/static/bootstrap/dist/css/bootstrap.min.css" />
		</Head>
		{/* nav */}

		{/* body */}
		{children}
		{/*  footer */}
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
		<script src="/static/bootstrap/dist/css/bootstrap.min.css" />
		{/* cdn for semantic ui https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.js */}
	</div>
);
