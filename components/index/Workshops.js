import Workshop from "../widgets/Workshop";
import WorkshopsSeeMoreCard from "../widgets/WorkshopsSeeMoreCard";

const Workshops = ({ data }) => {
	return (
		<>
			<a name='workshops'></a>

			<section>
				<div className='container grid'>
					<div className='special-card'>
						<WorkshopsSeeMoreCard />
					</div>

					{data.map(({ _id, title, slug, banner, host }) => (
						<Workshop key={_id} title={title} banner={banner} slug={slug} host={host.username} />
					))}
				</div>
			</section>

			<style jsx>{`
				section {
					margin-bottom: 76px;
				}

				.container {
					background: #f6f6f6;
					padding: 60px 68px;
					border-radius: 25px;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}

				.special-card {
					grid-column: 1 / 3;
				}

				@media only screen and (max-width: 1024px) {
					.grid {
						grid-template-columns: repeat(2, 1fr);
					}
				}

				@media only screen and (max-width: 767px) {
					.grid {
						grid-template-columns: 1fr;
					}

					.special-card {
						grid-column: 1 / 2;
					}
				}
			`}</style>
		</>
	);
};

export default Workshops;
