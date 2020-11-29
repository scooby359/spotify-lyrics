import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    // URL of the identity provider
    loginUrl: 'https://accounts.spotify.com/authorize',

    // Redirect URL
    redirectUri: 'http://localhost:4200/index.html',

    // SPA client ID
    clientId: '',

    // Scope
    scope: 'user-read-currently-playing',

    // Type of response required
    responseType: 'token',

    // Use OIDC flow (forces openid scope)
    oidc: false,

    // Remove access token has from url on login callback
    clearHashAfterLogin: true,
};
