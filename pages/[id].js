import React, { useState } from "react";
import Head from "next/head";
import Layout from "../Layout/Layout";
import { Content } from "../components/artist";
import client from "../graphql";
import { GET_USER_BY_USERNAME } from "../graphql/queries/user";
import MoreArtists from "../components/artist/MoreArtists";
import { getImageUri } from "../utils/funcs";

const Artist = ({ data }) => {
	const [contact, setContact] = useState(false);
	const [commingSoon, setCommingSoon] = useState(false);

	return (
		<>
			<Head>
				<meta name="title" content={data.name ? data.name : "Arty"} />

				<meta property="og:title" content={data.name ? data.name : "Arty"} />
				<meta
					property="og:image"
					content={data.avatar ? getImageUri(data.avatar) : "/img/singers.svg"}
				/>
				<meta property="og:type" content="website" />

				<meta
					property="twitter:title"
					content={data.name ? data.name : "Arty"}
				/>
				<meta
					property="twitter:image"
					content={data.avatar ? getImageUri(data.avatar) : "/img/singers.svg"}
				/>
				<meta property="twitter:card" content="summary_large_image" />
			</Head>

			<Layout
				isStaticNav
				selectedNavItem="artists"
				contact={contact}
				commingSoon={commingSoon}
				openContact={() => {
					setCommingSoon(false);
					setContact(true);
				}}
				closeContact={() => {
					setContact(false);
				}}
				setCommingSoon={() => {
					setCommingSoon(true);
					setContact(true);
				}}
			>
				{data ? (
					<Content data={data} />
				) : (
					<div
						className="container"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "300px 20px",
						}}
					>
						<img src="/img/404.svg" alt="No workshops found" />
					</div>
				)}

				<MoreArtists />
			</Layout>
		</>
	);
};

export async function getServerSideProps({ query }) {
	if (query && query.id) {
		try {
			const { data } = await client.query({
				query: GET_USER_BY_USERNAME,
				variables: { username: query.id },
			});

			if (data.getUserByUsername) {
				return {
					props: {
						data: data.getUserByUsername,
					},
				};
			}

			return { props: {} };
		} catch (error) {
			console.error(`error`, error);
			return { props: {} };
		}
	}

	return { props: {} };
}

export default Artist;
