import { gql } from '@apollo/client'

export const GET_USER_BY_USERNAME = gql`
    query GetUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            _id
            name
            username
            genres
            instruments
            paintings
            paintingtools
            dances
            theatres
            photographies
            skills
            sculptures
            architectures
            literatures
            calligraphy
            handcrafts
            sandarts
            photographytools
            phoneNumber
            location
            avatar
            soundcloud
            youtube
            spotify
            description
            media {
                _id
                url
                type
                createdAt
            }
            workshops {
                _id
                title
                banner
                slug
            }
        }
    }
`