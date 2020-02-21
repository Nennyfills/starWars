import http from './index';

describe('HTTP client', () => {
  it('should have a base url attached', () => {
    expect(http.defaults.baseURL).toBeDefined();
  });
});
