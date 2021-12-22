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
							style={{
								width: MEDIA_POSITIONS[i].w,
								height: MEDIA_POSITIONS[i].h,
								transform: `translateX(${Math.floor(Math.random() * (100 - -40 + 1)) + -40}%) translateY(${
									Math.floor(Math.random() * (100 - -40 + 1)) + -40
								}%)`,
							}}
						/>
					))}
				</div>

				<div style={{ display: "flex", justifyContent: "center" }}>
					<a href='/explore'>
						<div className='btn'>Explore Now</div>
					</a>
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

				h1 {
					font-family: "Poppins";
					font-weight: bold;
					font-size: 58px;
					line-height: 54px;
					text-align: center;
					color: #ed1e46;
				}

				.media-container {
					margin-top: 50px;
					position: relative;
					min-height: 450px;
					margin-bottom: 96px;
					display: flex;
					align-items: center;
					justifycontent: center;
				}

				img {
					// position: absolute;
					object-fit: cover;
					border-radius: 10px;
					box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.14);
					cursor: pointer;
					transition: all 0.5s ease;
				}

				img:hover {
					transform: scale(1.1);
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
