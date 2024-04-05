/**
 * @file index.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import express from 'express';
import fs from 'node:fs';
import path from 'node:path';

const app = express();
const rootPath = path.join(__dirname, '../../'); // Adjust the path to your specific directory
const reactComponentsPath = path.join(rootPath, 'app/preview');

app.use(express.static(rootPath));

// Endpoint to get a list of files in the React components directory
app.get('/api/files', (req, res) => {
  // Read the directory contents
  fs.readdir(reactComponentsPath, (err, files) => {
    if (err) {
      // Send an HTTP 500 response if there's an error
      res.status(500).send('Unable to scan directory: ' + err);
    } else {
      // Send the list of files as a JSON response
      res.json({ directory: reactComponentsPath, files: files });
    }
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
