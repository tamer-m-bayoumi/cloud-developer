import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  app.get("/filteredimage/", async (req, res) => {
    const image_url = req.query.image_url.toString();
    if (!image_url)
      return res.status(400).send("Image url is missing");

    if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image_url))
      return res.status(400).send("Invalid image url");

    const filteredPath = await filterImageFromURL(image_url);
    res.sendFile(filteredPath);
    res.on("finish", () => deleteLocalFiles([filteredPath]));
  });


  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });


  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();