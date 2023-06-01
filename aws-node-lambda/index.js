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

module.exports.getOne = async (event) => {
  const id = event.pathParameters.id;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = response.data;

  return {
    body: JSON.stringify({
        body: post
    }),
    statusCode: 200,
  };
};