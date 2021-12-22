import { useEffect, useState } from "react";
import { Media } from "../components/explore";
import Spinner from "../components/widgets/Spinner";
import client from "../graphql";
import { GET_ALL_MEDIA_PAGINATED } from "../graphql/queries/media";
import Layout from "../Layout/Layout";

const Explore = ({ data }) => {
	const [contact, setContact] = useState(false);
	const [commingSoon, setCommingSoon] = useState(false);

	return (
		<Layout
			isStaticNav
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
			}}>
			{data && data.media && data.media.length > 0 ? (
				<Media media={data.media} />
			) : (
				<div
					className='container'
					style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "140px 20px" }}>
					<img src='/img/404-artists.svg' alt='No artists found' />
				</div>
			)}
		</Layout>
	);
};

export async function getServerSideProps() {
	try {
		const { data } = await client.query({
			query: GET_ALL_MEDIA_PAGINATED,
			variables: { page: 1, limit: 39 },
			fetchPolicy: "network-only",
		});

		if (data.getAllMediaPaginated) {
			return {
				props: {
					data: data.getAllMediaPaginated,
				},
			};
		}

		return { props: {} };
	} catch (error) {
		return { props: {} };
	}
}

export default Explore;
