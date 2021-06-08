const { Router } = require("express");
const axios = require('axios');
require('dotenv').config();
const youtubeRouter = Router();

const youtubeApi = process.env.YOUTUBE_API_KEY;

youtubeRouter.get('/:query', (req, res) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=howtomake${req.params.query}drink&channelType=any&key=${youtubeApi}`;
  return axios(url)
    .then(({ data }) => data.items[0].id.videoId)
    .then((data) => res.status(200).send(data))
    .catch();
})




module.exports = { youtubeRouter };