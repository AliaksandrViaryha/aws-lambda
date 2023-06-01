const axios = require('axios');

const FREE_API = 'https://jsonplaceholder.typicode.com/posts';

module.exports.handler = async (event) => {
  const response = await axios.get(`${FREE_API}`);
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
  const response = await axios.get(`${FREE_API}/${id}`);
  const post = response.data;

  return {
    body: JSON.stringify({
        body: post
    }),
    statusCode: 200,
  };
};