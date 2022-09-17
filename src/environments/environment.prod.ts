export const environment = {
  production: true,
  apiUrl: 'https://thiago-money-api.herokuapp.com',
  tokenAllowedDomains: [ /thiago-money-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
