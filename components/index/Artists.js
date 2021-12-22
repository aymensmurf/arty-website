import React from "react";
import Artist from "../widgets/Artist";
import ArtistsSeeMoreCard from "../widgets/ArtistsSeeMoreCard";

const Artists = ({ data }) => {
	return (
		<div className='visible-desktop'>
			<a name='artists'></a>

			<section>
				<div className='container'>
					<div className='artists-container grid'>
						{data.map(({ _id, name, avatar, username }, i) => {
							if (i === 3) {
								return (
									<React.Fragment key={_id}>
										<div className='special-card'>
											<ArtistsSeeMoreCard />
										</div>

										<Artist name={name} avatar={avatar} username={username} scaleOnHover />
									</React.Fragment>
								);
							}

							return <Artist key={_id} name={name} avatar={avatar} username={username} scaleOnHover />;
						})}
					</div>
				</div>
			</section>

			<style jsx>{`
				.artists-container {
					background: #f6f6f6;
					padding: 60px 68px;
					border-radius: 25px;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					gap: 16px;
				}

				.special-card {
					grid-column: 4 / 7;
				}

				@media only screen and (max-width: 1360px) {
					.grid {
						grid-template-columns: repeat(3, 1fr);
					}

					.special-card {
						grid-column: 2 / 4;
						grid-row: 1 / 1;
					}
				}

				@media only screen and (max-width: 600px) {
					.artists-container {
						padding: 60px 20px;
					}
				}
			`}</style>
		</div>
	);
};

export default Artists;
