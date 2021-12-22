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
								className={`media-container ${(i === 0 || i === 15 || i === 26) && "highlighted"}`}
								style={{
									gridArea:
										i === 0
											? `1 / 1 / span 2 / span 2`
											: i === 15
											? `5 / 3 / span 2 / span 2`
											: i === 26
											? `9 / 1 / span 2 / span 2`
											: null,
								}}
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
				</div>

				<div style={{ display: "flex", justifyContent: "center" }}>
					<a href='/#download'>
						<div className='btn'>For more artworks download the app</div>
					</a>
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

				.grid-4 {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}

				.media-container {
					width: 100%;
					height: 448px;
					cursor: pointer;
					overflow: hidden;
					border-radius: 5px;
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

				.highlighted {
					height: 100%;
				}

				.btn {
					width: fit-content;
					border-radius: 38px;
					background: #ed1e46;
					padding: 25px 44px;
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
			`}</style>
		</>
	);
};

export default Media;
