import { useEffect, useState } from "react";
import { WORDS } from "../../utils/consts";

const Init = ({ pressed, setPressedTrue }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		handleCick();
		ballFollowMouse();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (index > WORDS.length - 2) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [index]);

	const handleCick = () => {
		const ball = document.querySelector(".ball");

		ball.addEventListener("mousedown", (e) => {
			const whilePressing = setTimeout(function () {
				setPressedTrue();
			}, 500);

			ball.addEventListener("mouseup", () => {
				clearTimeout(whilePressing);
			});
		});
	};

	const ballFollowMouse = () => {
		const init = document.querySelector(".init");
		const ball = document.querySelector(".ball");

		let mouseX = 0;
		let mouseY = 0;
		let ballX = 0;
		let ballY = 0;
		let speed = 0.2;

		function animate() {
			let distX = mouseX - ballX;
			let distY = mouseY - ballY;

			ballX = ballX + distX * speed;
			ballY = ballY + distY * speed;

			ball.style.left = ballX + "px";
			ball.style.top = ballY + "px";

			requestAnimationFrame(animate);
		}
		animate();

		init.addEventListener("mousemove", function (e) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
	};

	return (
		<>
			<section className='init'>
				<div className='container'>
					<img src='/img/logo-white.svg' alt='Jam' style={{ width: 200, height: 87, objectFit: "contain" }} />

					<div className='' style={{ position: "relative", marginTop: 20, overflow: "hidden", paddingBottom: 20 }}>
						<h1 style={{ backgroundColor: "#151515", position: "relative", zIndex: 2 }}>Where everything is</h1>
						<h1 className='word-container' style={{ zIndex: 1, color: "#fff" }}>
							{WORDS[index]}
						</h1>
					</div>

					<div className='instruction'>
						<div
							style={{
								padding: 24,
								border: "1px solid #fff",
								borderRadius: "50%",
								width: 210,
								height: 210,
								textAlign: "center",
								overflow: "hidden",
							}}>
							<img src='/img/audio.svg' alt='Audio' style={{ width: 47, height: 47 }} />
							<p>Put your headphones on for a better experience.</p>
						</div>
					</div>
				</div>

				<div className='ball'>
					<h4 style={{ position: "relative", zIndex: 1 }}>Click & Hold</h4>
					<div className='inner-ball'></div>
				</div>
			</section>

			<style jsx>{`
				section {
					position: relative;
					background-color: #151515;
					min-height: 100vh;
					height: 100vh;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					-ms-overflow-style: none;
					scrollbar-width: none;
					overflow-y: auto;
					overflow-x: hidden;
				}

				section::-webkit-scrollbar {
					display: none;
				}

				.container {
					height: 100%;
					padding: 20px 100px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					position: relative;
				}

				h1 {
					-webkit-text-stroke-color: #fff;
					-webkit-text-stroke-width: 1px;
					color: transparent;
					font-family: Republica;
					font-size: 110px;
					line-height: 147px;
					text-align: center;
				}

				h5 {
					color: #fff;
					font-size: 27px;
				}

				p {
					color: #fff;
					margin-top: 10px;
				}

				.social-media i {
					color: #fff;
					font-size: 20px;
					margin-right: 32px;
				}
				.social-media i:hover {
					color: red;
					font-size: 20px;
					margin-right: 32px;
				}

				.ball {
					width: 200px;
					height: 200px;
					background-color: #fff;
					border-radius: 50%;
					position: absolute;
					top: 0;
					left: 0;
					mix-blend-mode: difference;
					transform: translate(-50%, -50%);
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: none;
					text-align: center;
					user-select: none;
					z-index: 99;
				}

				.ball .inner-ball {
					width: 200px;
					height: 200px;
					background-color: white;
					border-radius: 50%;
					position: absolute;
					transition: all 1000ms ease;
				}

				.ball:active .inner-ball {
					width: 2800px;
					height: 2800px;
					background-color: white;
				}

				.ball h4 {
					font-size: 22px;
				}

				.instruction {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					margin-top: 20;
				}

				@media only screen and (max-width: 1439px) {
					.container {
						padding: 40px 50px;
					}
				}

				@media only screen and (max-width: 1040px) {
					h1 {
						font-size: 75px;
						line-height: 85px;
					}
				}

				@media only screen and (max-height: 844px) {
					.instruction {
						display: none;
						clear: both;
					}
				}
			`}</style>
		</>
	);
};

export default Init;
