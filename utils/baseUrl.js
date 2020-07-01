const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://groundedhlc.com'
    : 'http://localhost:3000';

export default baseUrl;
