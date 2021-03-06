import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            medium_cover_image
            rating
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query getMovieDetails($movieId: Int!) {
        movie(id: $movieId) {
            title
            medium_cover_image
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId) {
            id
            title
            medium_cover_image
            rating
        }
    }
`;
