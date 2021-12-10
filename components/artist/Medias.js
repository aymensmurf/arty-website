import { useState } from "react";
import Album from "../widgets/Album";
import Media from "../widgets/Media";

const Medias = ({ data }) => {
	const [isAlbumVisible, setIsAlbumVisible] = useState(false);
	const [mediaIndex, setMediaIndex] = useState(0);

	return (
		<>
			<div className="medias">
				{data.map(({ _id, url, type, createdAt }, i) => (
					<div
						key={_id}
						style={{ cursor: "pointer" }}
						className={i === 0 && "highlighted"}
						onClick={() => {
							setMediaIndex(i);
							setIsAlbumVisible(true);
						}}
					>
						<Media
							id={_id}
							url={url}
							type={type}
							createdAt={createdAt}
							isFullWidth
						/>
					</div>
				))}
			</div>

			<Album
				data={data}
				mediaIndex={mediaIndex}
				isAlbumVisible={isAlbumVisible}
				setIsAlbumVisible={setIsAlbumVisible}
			/>

			<style jsx>{`
				.medias {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}

				.highlighted {
					grid-column: 1 / 3;
				}

				@media only screen and (max-width: 1024px) {
					.medias {
						grid-template-columns: repeat(3, 1fr);
					}

					.highlighted {
						grid-column: 1 / 3;
					}
				}

				@media only screen and (max-width: 768px) {
					.medias {
						grid-template-columns: repeat(2, 1fr);
					}

					.highlighted {
						grid-column: 1 / 3;
					}
				}

				@media only screen and (max-width: 582px) {
					.medias {
						grid-template-columns: repeat(3, 1fr);
						gap: 5px;
					}

					.highlighted {
						grid-column: 1 / 2;
					}
				}
			`}</style>
		</>
	);
};

export default Medias;
