import { gql } from '@apollo/client';

export const GET_FEATURED_WORKSHOPS = gql`
    query GetFeaturedWorkshops {
        getFeaturedWorkshops {
            _id
            title
            banner
            slug
            host {
                _id
                name
                avatar
                username
            }
        }
    }
`

export const GET_WORKSHOP_BY_SLUG = gql`
    query GetWorkshopBySlug($slug: String!) {
        getWorkshopBySlug(slug: $slug) {
            _id
            title
            banner
            slug
            start
            end
            description
            nbrparticipants
            host {
                _id
                name
                avatar
                username
            }
            participants {
                user {
                  username
                  name
                  avatar
                }
            }

            instruments
            paintings
            paintingtools
            dances
            theatres
            photographies
            genres
            skills
            sculptures
            architectures
            literatures
            calligraphy
            handcrafts
            sandarts
            photographytools
        }
    }
`