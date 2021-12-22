import { useEffect, useState } from "react";
import { getImageUri, timeToReadbleTime } from "../../utils/funcs";

const Album = ({ data, mediaIndex, showUser = true, isAlbumVisible, setIsAlbumVisible }) => {
	console.log(`data`, data);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(mediaIndex);
	}, [mediaIndex]);

	useEffect(() => {
		document.addEventListener("touchstart", handleTouchStart, false);
		document.addEventListener("touchmove", handleTouchMove, false);

		var xDown = null;
		var yDown = null;

		function getTouches(evt) {
			return (
				evt.touches || // browser API
				evt.originalEvent.touches
			); // jQuery
		}

		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
			if (!xDown || !yDown) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				/*most significant*/
				if (xDiff > 0) {
					/* left swipe */
					handleNext();
				} else {
					/* right swipe */
					handlePrev();
				}
			} else {
				if (yDiff > 0) {
					/* up swipe */
				} else {
					/* down swipe */
				}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		}

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchmove", handleTouchMove);
		};
	}, [index]);

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
			<div className='album-container'>
				<div className='album-overlay' onClick={handleClose} />

				<div className='album-inner-block'>
					{showUser && data[index].user && (
						<a href={`/${data[index]?.user?.username}`}>
							<div className='user'>
								<img src={getImageUri(data[index]?.user?.avatar)} alt={data[index]?.user?.name} />

								<div className='details'>
									<p>{data[index]?.user?.name}</p>
									<p>{timeToReadbleTime(data[index]?.createdAt)}</p>
								</div>
							</div>
						</a>
					)}

					<div className='btn btn-arrow-left' onClick={handlePrev}>
						<img src='/img/arrow-left.svg' alt='Arrow left' className='icon' />
					</div>

					<div className='content' id='content'>
						{Array.isArray(data) &&
							data.length > 0 &&
							data[index] &&
							(data[index].type === "photo" ? (
								<img src={getImageUri(data[index].url)} />
							) : (
								<video width='100%' height='100%' style={{ pointerEvents: "all" }} controls>
									<source src={getImageUri(data[index].url)} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							))}
					</div>

					<div className='btn btn-arrow-right' onClick={handleNext}>
						<img src='/img/arrow-right.svg' alt='Arrow right' className='icon' />
					</div>

					<div className='btn btn-close' style={{ position: "absolute", top: 10, right: 10 }}>
						<img
							src='/img/close.svg'
							alt='Close'
							className='icon'
							style={{ width: 30, height: 30 }}
							onClick={handleClose}
						/>
					</div>

					<div className={`sparks ${data[index]?.sparks.length > 0 ? "active" : "inactive"}`}>
						<p>{data[index].sparks.reduce((prev, current) => prev + current.clicks, 0)} Sparks</p>
						<img src='/img/sparks.svg' alt='Spark' style={{ height: 28, width: 28, objectFit: "contain" }} />
					</div>
				</div>
			</div>

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
					background-color: rgba(0, 0, 0, 0.9);
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
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 1;
				}

				.user {
					position: absolute;
					top: 10px;
					left: 10px;
					display: flex;
					align-items: center;
					gap: 15px;
					z-index: 2;
					cursor: pointer;
					pointer-events: all;
				}

				.user img {
					width: 60px;
					height: 60px;
					border-radius: 40px;
					object-fit: cover;
				}

				.user .details {
					padding: 10px 14px;
					background-color: #2c2c2c;
					gap: 8px;
					border-radius: 20px;
				}

				.user .details p:nth-child(1) {
					color: #fff;
					font-size: 16px;
					font-weight: bold;
				}

				.user .details p:nth-child(2) {
					color: #fff;
					font-size: 11px;
					margin-top: 6px;
				}

				.btn {
					height: 50px;
					width: 50px;
					border-radius: 30px;
					background-color: rgba(0, 0, 0, 0.2);
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					pointer-events: all;
					position: absolute;
					z-index: 2;
				}

				.btn-arrow-left {
					left: 0;
				}

				.btn-arrow-right {
					right: 0;
				}

				.btn-close {
					height: 40px;
					width: 40px;
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

				.sparks {
					padding: 10px 14px;
					background-color: #2c2c2c;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					border-radius: 100px;
					position: absolute;
					left: 50%;
					z-index: 2;
					transform: translate(-50%, -50%);
					transition: all 400ms ease;
					bottom: ${isAlbumVisible ? "0px" : "-200px"};
				}

				.sparks.active {
					bottom: 0px;
				}

				.sparks.inactive {
					bottom: -200px;
				}

				.sparks p {
					color: #fff;
					font-size: 14px;
				}

				@media only screen and (max-width: 582px) {
					.btn {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

export default Album;
