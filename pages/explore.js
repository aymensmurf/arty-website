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
		<>
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
					<div>
						<Media media={data.media} />

						<div className='container' style={{ textAlign: "center", marginBottom: 100 }}>
							<h1 style={{ marginTop: 70 }}>Download now for more artworks</h1>
							<div
								id='faq-stores'
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexWrap: "wrap",
									marginTop: 25,
								}}>
								<a
									href='https://play.google.com/store/apps/details?id=land.arty.app'
									target='_blank'
									rel='noopener noreferrer'
									style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }}>
									<img src='/img/google-play-white.svg' alt='Google play' />
								</a>
								<a
									href='https://apps.apple.com/us/app/arty-where-everything-is-art/id1606378093'
									target='_blank'
									rel='noopener noreferrer'
									style={{ marginTop: 25, marginRight: 12, marginLeft: 12 }}>
									<img
										src='/img/app-store-white.svg'
										alt='App store'
										onClick={() => {
											setCommingSoon(true);
											setContact(true);
										}}
									/>
								</a>
							</div>
						</div>
					</div>
				) : (
					<div
						className='container'
						style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "140px 20px" }}>
						<img src='/img/404-artists.svg' alt='No artists found' />
					</div>
				)}
			</Layout>

			<style jsx>{`
				h1 {
					font-family: "Poppins";
					font-weight: 600;
					font-size: 50px;
				}

				img {
					cursor: pointer;
				}

				@media only screen and (max-width: 730px) {
					h1 {
						font-size: 50px;
						line-height: 40px;
						margin-bottom: 10px;
					}
				}
			`}</style>
		</>
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
