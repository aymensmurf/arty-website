import { SERVER_URL } from "./consts";

export const getImageUri = uri => {
    if (
        uri &&
        (uri.startsWith('https://s.gravatar.com/') || uri.startsWith('file:///'))
    ) {
        return uri;
    }

    return `${SERVER_URL}/${uri}`;
};