import { useState, useEffect } from "react";
import { getImageUri } from "../../utils/funcs";
import Pill from "../widgets/Pill";

const Details = ({ data, setCommingSoon }) => {
	const [theme, setTheme] = useState([]);

	useEffect(() => {
		const {
			architectures,
			calligraphy,
			dances,
			genres,
			handcrafts,
			instruments,
			literatures,
			paintings,
			paintingtools,
			photographies,
			photographytools,
			sandarts,
			sculptures,
			skills,
			theatres,
		} = data;
		const _theme = architectures.concat(
			calligraphy,
			dances,
			genres,
			handcrafts,
			instruments,
			literatures,
			paintings,
			paintingtools,
			photographies,
			photographytools,
			sandarts,
			sculptures,
			skills,
			theatres
		);

		setTheme(_theme);
	}, []);

	return (
		<>
			<section className='container'>
				<div className='grid'>
					<div className='details'>
						<a href={`/${data.host.username}`}>
							<div className='flex' style={{ alignItems: "center", gap: 20 }}>
								<img src={getImageUri(data.host.avatar)} alt={data.host.name} className='avatar' />
								<h1>{data.host.name}</h1>
							</div>
						</a>
						<h2 style={{ marginTop: 35 }}>{data.title}</h2>
						<h3 style={{ marginTop: 13 }}>
							Start :{" "}
							{new Date(data.start).toLocaleString("en-US", {
								dateStyle: "medium",
								timeStyle: "medium",
							})}
						</h3>
						<h3 style={{ marginTop: 11 }}>
							End :{" "}
							{new Date(data.start).toLocaleString("en-US", {
								dateStyle: "medium",
								timeStyle: "medium",
							})}
						</h3>
						<h4 style={{ marginTop: 31 }}>Description</h4>
						<p style={{ marginTop: 10 }}>{data.description}</p>

						{theme.length > 0 && (
							<>
								<h4 style={{ marginTop: 31 }}>Theme</h4>
								<div className='theme'>
									{theme.map((elm, i) => (
										<Pill key={i} title={elm} isActive />
									))}
								</div>
							</>
						)}
					</div>

					<div className='participents'>
						<div>
							<h2 style={{ color: "#222" }}>
								Particpents <span className='participants-nb'>{data.participants.length} People</span>
							</h2>

							{data.participants.length > 0 && (
								<div className='participents-container' style={{ marginTop: 38 }}>
									{data.participants.map(
										({ user }, i) =>
											(data.participants.length === 9 || i <= 7) && (
												<img
													key={user.username}
													src={getImageUri(user.avatar)}
													alt={user.username}
													className='avatar'
												/>
											)
									)}

									{data.participants.length > 9 && <div className='more'>+{data.participants.length - 8}</div>}
								</div>
							)}
						</div>

						{data.participants.length < data.nbrparticipants && (
							<p style={{ marginTop: 30 }}>Only {data.nbrparticipants - data.participants.length} Places left</p>
						)}
					</div>

					<div className='join-arty'>
						<h1>JOIN ARTY FOR MORE</h1>

						<div className='flex' style={{ gap: 24, marginTop: 35, justifyContent: "center" }}>
							<a
								href='https://play.google.com/store/apps/details?id=land.arty.app'
								target='_blank'
								rel='noopener noreferrer'>
								<img src='/img/nav-google.png' alt='Google Play' style={{ cursor: "pointer" }} />
							</a>
							<a
								href='https://apps.apple.com/us/app/arty-where-everything-is-art/id1606378093'
								target='_blank'
								rel='noopener noreferrer'>
								<img src='/img/nav-apple.png' alt='App store' style={{ cursor: "pointer" }} />
							</a>
						</div>

						<p
							style={{
								fontSize: 16,
								marginTop: 25,
								textAlign: "center",
								color: "#fff",
							}}>
							Download the app now
						</p>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 30px;
					margin-bottom: 140px;
				}

				.grid {
					display: grid;
					grid-template-columns: 47% 30% calc(23% - 60px);
					gap: 30px;
				}

				.flex {
					display: flex;
					flex-wrap: wrap;
					gap: 30px;
				}

				.details {
					border-radius: 25px;
					background: #fdfdfd;
					box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
					padding: 22px 35px;
				}

				.participents {
					border-radius: 25px;
					background: #fdfdfd;
					border: 1px solid #ed1e46;
					padding: 46px 35px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 20px;
				}

				.join-arty {
					border-radius: 25px;
					background: url("/img/bg-join-arty.png");
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					padding: 70px 48px;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.avatar {
					width: 82px;
					height: 82px;
					border-radius: 50%;
					object-fit: cover;
					filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
				}

				h1,
				h2,
				h3,
				h4,
				p {
					font-family: "Poppins";
					font-weight: 600;
					color: #222;
				}

				h1 {
					font-size: 28px;
					line-height: 22px;
				}

				h2 {
					font-size: 27px;
					line-height: 30px;
					color: #ed1e46;
				}

				h3 {
					font-weight: 500;
					font-size: 24px;
					line-height: 22px;
				}

				h4 {
					font-size: 22px;
					line-height: 22px;
				}

				p {
					font-weight: normal;
					font-size: 18px;
					line-height: 25px;
				}

				.participents-container {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					column-gap: 30px;
					row-gap: 20px;
				}

				.participants-nb {
					margin-left: 25px;
					color: #80cc72;
					white-space: nowrap;
				}

				.more {
					width: 82px;
					height: 82px;
					background-color: #ed1e46;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 18px;
					color: #fff;
				}

				.join-arty h1 {
					font-family: "Poppins";
					font-weight: bold;
					font-size: 38px;
					line-height: 40px;
					color: #fff;
					text-align: center;
				}

				.theme {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin-top: 10px;
				}

				@media only screen and (max-width: 1536px) {
					.participants-nb {
						margin-left: 0px;
					}
				}

				@media only screen and (max-width: 1220px) {
					.grid {
						grid-template-columns: 60% calc(40% - 30px);
					}

					.join-arty {
						grid-column: 1 / 3;
					}
				}

				@media only screen and (max-width: 1023px) {
					.grid {
						grid-template-columns: 1fr;
					}

					.join-arty {
						grid-column: 1 / 2;
					}
				}

				@media only screen and (max-width: 490px) {
					h1 {
						font-size: 24px;
						line-height: 22px;
					}
					h2,
					h3,
					h4 {
						font-size: 20px;
						line-height: 20px;
					}

					.join-arty h1 {
						font-size: 30px;
						line-height: 30px;
					}

					p {
						font-size: 14px;
					}
				}

				@media only screen and (max-width: 427px) {
					.participents-container {
						gap: 15px;
					}
				}
			`}</style>
		</>
	);
};

export default Details;
