import { gql } from "@apollo/client";

export const GET_ALL_MEDIA_PAGINATED = gql`
	query getAllMediaPaginated {
		getAllMediaPaginated(type: "photo", limit: 20) {
			media {
				_id
				url
				type
				createdAt
				sparks {
					_id
					clicks
				}
			}
			totalPages
			currentPage
		}
	}
`;
