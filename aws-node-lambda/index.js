const axios = require('axios');

module.exports.handler = async (event) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return {
    body: JSON.stringify({
        body: posts
    }),
    statusCode: 200,
  };
};
