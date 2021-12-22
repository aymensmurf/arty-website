import { useState } from "react";
import { MEDIA_POSITIONS } from "../../utils/consts";
import { getImageUri } from "../../utils/funcs";
import Album from "../widgets/Album";

const Media = ({ media }) => {
	const [isAlbumVisible, setIsAlbumVisible] = useState(false);
	const [mediaIndex, setMediaIndex] = useState(0);

	return (
		<>
			<section>
				<div className='container'>
					<div className='inner-container'>
						<h1>Discover New Artists and artworks</h1>

						<div className='media-container'>
							{media.map(({ _id, url }, i) => (
								<img
									key={_id}
									onClick={() => {
										setMediaIndex(i);
										setIsAlbumVisible(true);
									}}
									src={getImageUri(url)}
									style={{ gridArea: i === 3 ? "1 / 3 / span 2 / span 2" : null, height: i === 3 ? 408 : 198 }}
								/>
							))}
						</div>

						<div style={{ display: "flex", justifyContent: "center" }}>
							<a href='/explore'>
								<div className='btn'>Explore Now</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<Album
				data={media}
				mediaIndex={mediaIndex}
				isAlbumVisible={isAlbumVisible}
				setIsAlbumVisible={setIsAlbumVisible}
			/>

			<style jsx>{`
				section {
					margin-bottom: 76px;
				}

				.container {
					padding: 0px 100px;
				}

				.inner-container {
					background: #fce9ff;
					border-radius: 31px;
					padding: 55px 136px;
				}

				h1 {
					font-family: "Poppins";
					font-weight: bold;
					font-size: 58px;
					line-height: 54px;
					text-align: center;
					color: #ed1e46;
				}

				.media-container {
					margin-top: 90px;
					margin-bottom: 75px;
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					gap: 12px;
				}

				img {
					width: 100%;
					object-fit: cover;
					border-radius: 10px;
					transition: all 0.5s ease;
					cursor: pointer;
				}

				img:hover {
					transform: scale(1.03);
				}

				.btn {
					width: fit-content;
					border-radius: 38px;
					background: #ed1e46;
					padding: 12px 44px;
					font-family: "Poppins";
					font-weight: bold;
					font-size: 18px;
					text-align: center;
					color: #fff;
					transition: all 300ms ease;
					border: 1px solid #ed1e46;
				}

				.btn:hover {
					border: 1px solid #ed1e46;
					background: transparent;
					color: #ed1e46;
				}

				@media only screen and (max-width: 1440px) {
					.inner-container {
						padding: 55px 60px;
					}
				}

				@media only screen and (max-width: 1024px) {
					.container {
						padding: 0px 68px;
					}

					.inner-container {
						padding: 55px 30px;
					}
				}

				@media only screen and (max-width: 600px) {
					.container {
						padding: 0px 20px;
					}

					.inner-container {
						padding: 55px 20px;
					}

					h1 {
						font-size: 40px;
						line-height: 40px;
					}
				}
			`}</style>
		</>
	);
};

export default Media;
