import http from '../../../../utils/http';


/* Make api call and Return api response
 */
export default {
  getPeople: async ({ pageNumber }) => http.get(`people/?page=${pageNumber}`),
};
