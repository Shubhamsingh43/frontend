const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:5001',
  },
  socket: {
    url: process.env.REACT_APP_SOCKET_URL || 'http://localhost:5001',
  },
};

export default config; 