import { gql } from "@apollo/client";

export const GET_ALL_MEDIA_PAGINATED = gql`
	query getAllMediaPaginated($type: String, $page: Int, $limit: Int) {
		getAllMediaPaginated(type: $type, limit: $limit, page: $page) {
			media {
				_id
				url
				type
				createdAt
				sparks {
					_id
					clicks
				}
				user {
					_id
					name
					avatar
					username
				}
			}
			totalPages
			currentPage
		}
	}
`;
