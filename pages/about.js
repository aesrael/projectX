// pages/about.js
// import Link from "next/link";
export default ({
	url: {
		query: { name }
	}
}) => <p>Welcome to About! {name}</p>;
