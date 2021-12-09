import { useEffect, useState } from "react";
import { getImageUri } from "../../utils/funcs";

const Album = ({ data, mediaIndex, isAlbumVisible, setIsAlbumVisible }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(mediaIndex);
	}, [mediaIndex]);

	const handleNext = () => {
		if (index >= data.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	const handlePrev = () => {
		if (index <= 0) {
			setIndex(data.length - 1);
		} else {
			setIndex(index - 1);
		}
	};

	const handleClose = () => {
		setIsAlbumVisible(false);
		setTimeout(() => {
			setIndex(mediaIndex);
		}, 600);
	};

	return (
		<>
			<div className="album-container">
				<div className="album-overlay" onClick={handleClose} />

				<div className="album-inner-block">
					<div className="btn" onClick={handlePrev}>
						<img src="/img/arrow-left.svg" alt="Arrow left" className="icon" />
					</div>

					<div className="content">
						{Array.isArray(data) &&
							data.length > 0 &&
							data[index] &&
							(data[index].type === "photo" ? (
								<img src={getImageUri(data[index].url)} />
							) : (
								<video
									width="100%"
									height="100%"
									style={{ pointerEvents: "all" }}
									controls
								>
									<source src={getImageUri(data[index].url)} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							))}
					</div>

					<div className="btn" onClick={handleNext}>
						<img
							src="/img/arrow-right.svg"
							alt="Arrow right"
							className="icon"
						/>
					</div>

					<div
						className="btn"
						style={{ position: "absolute", top: 0, right: 0 }}
					>
						<img
							src="/img/close.svg"
							alt="Close"
							className="icon"
							style={{ width: 60, height: 60 }}
							onClick={handleClose}
						/>
					</div>
				</div>
			</div>

			<style>{`
				body {
					width: 100%;
					overflow-y: ${isAlbumVisible ? "hidden" : "auto"};
					position: ${isAlbumVisible ? "fixed" : "relative"};
				}
			`}</style>

			<style jsx>{`
				.album-container {
					position: fixed;
					bottom: 0;
					left: 0;
					z-index: 100;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					flex-wrap: nowrap;
					transition: all 300ms ease;
					width: 100vw;
					height: ${isAlbumVisible ? "100vh" : "0vh"};
				}

				.album-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.8);
					visibility: inherit;
					transition: opacity 300ms ease;
					opacity: ${isAlbumVisible ? "1" : "0"};
				}

				.album-inner-block {
					position: relative;
					margin: 0 auto;
					width: 90vw;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					pointer-events: none;
					transition: height 600ms ease;
					height: ${isAlbumVisible ? "96vh" : "0px"};
				}

				.content {
					width: 100%;
					height: 100%;
				}

				.btn {
					height: 60px;
					width: 60px;
					min-height: 60px;
					min-width: 60px;
					border-radius: 30px;
					background-color: rgba(0, 0, 0, 0.2);
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					pointer-events: all;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}

				.icon {
					width: 30px;
					height: 30px;
					object-fit: contain;
					filter: invert(1);
				}
			`}</style>
		</>
	);
};

export default Album;
