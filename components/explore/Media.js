import { useState } from "react";
import { getImageUri } from "../../utils/funcs";
import Album from "../widgets/Album";

const Media = ({ media }) => {
	const [isAlbumVisible, setIsAlbumVisible] = useState(false);
	const [mediaIndex, setMediaIndex] = useState(0);

	return (
		<>
			<section>
				<div className='container'>
					<div className='grid-4'>
						{media.map(({ _id, type, url }, i) => (
							<div
								key={_id}
								className='media-container'
								onClick={() => {
									setMediaIndex(i);
									setIsAlbumVisible(true);
								}}>
								{type === "photo" ? (
									<img src={getImageUri(url)} />
								) : (
									<div style={{ position: "relative" }}>
										<video>
											<source src={getImageUri(url)} type='video/mp4' />
											Your browser does not support the video tag.
										</video>

										<img src='/img/video-circle.svg' alt='' className='icon-video' />
									</div>
								)}
							</div>
						))}
					</div>

					<div style={{ display: "flex", justifyContent: "center" }}>
						<a href='/#download'>
							<div className='btn'>Download the App for more Artworks</div>
						</a>
					</div>
				</div>

				<Album
					data={media}
					mediaIndex={mediaIndex}
					isAlbumVisible={isAlbumVisible}
					setIsAlbumVisible={setIsAlbumVisible}
				/>
			</section>

			<style jsx>{`
				section {
					padding: 60px 0px 100px;
				}

				.container {
					max-width: 1440px;
				}

				.grid-4 {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}

				.media-container {
					width: 100%;
					height: 360px;
					cursor: pointer;
					overflow: hidden;
					border-radius: 5px;
					transition: all 0.5s ease;
				}

				.media-container:hover {
					transform: scale(1.03);
				}

				.media-container:nth-child(1) {
					grid-area: 1 / 1 / span 2 / span 2;
					height: 736px;
				}

				.media-container:nth-child(16) {
					grid-area: 5 / 3 / span 2 / span 2;
					height: 736px;
				}

				.media-container:nth-child(27) {
					grid-area: 9 / 1 / span 2 / span 2;
					height: 736px;
				}

				img,
				video {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.icon-video,
				.highlighted .icon-video {
					width: 48px;
					height: 48px;
					position: absolute;
					top: 15px;
					left: 8px;
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
					margin-top: 120px;
				}

				.btn:hover {
					border: 1px solid #ed1e46;
					background: #fff;
					color: #ed1e46;
				}

				@media only screen and (max-width: 768px) {
					.media-container {
						height: 200px;
					}
					.media-container:nth-child(1) {
						height: 416px;
					}

					.media-container:nth-child(16) {
						height: 416px;
					}

					.media-container:nth-child(27) {
						height: 416px;
					}
				}

				@media only screen and (max-width: 600px) {
					.media-container {
						height: 140px;
					}
					.media-container:nth-child(1) {
						height: 296px;
					}

					.media-container:nth-child(16) {
						height: 296px;
					}

					.media-container:nth-child(27) {
						height: 296px;
					}
				}

				@media only screen and (max-width: 425px) {
					.grid-4 {
						grid-template-columns: repeat(3, 1fr);
					}
					.media-container:nth-child(1) {
						grid-area: 1 / 1 / span 2 / span 2;
					}

					.media-container:nth-child(11) {
						grid-area: 5 / 2 / span 2 / span 2;
						height: 296px;
					}

					.media-container:nth-child(16) {
						grid-area: auto;
						height: 140px;
					}

					.media-container:nth-child(27) {
						grid-area: auto;
						height: 140px;
					}
				}
			`}</style>
		</>
	);
};

export default Media;
