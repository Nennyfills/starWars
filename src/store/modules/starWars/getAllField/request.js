import http from '../../../../utils/http';


/* Make api call and Return api response
 */
export default {
  getField: async ({ url }) => http.get(`${url}`),
};
