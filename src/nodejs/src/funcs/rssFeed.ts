import fs from 'node:fs';
import { Feed, Item } from 'feed';

const API_KEY = "DALWPaQapfNrUga4wnMVEtNj";
const FEED_TITLE = "DEV.to Read";
const FEED_DESCRIPTION = "The top reads from DEV.to";
const FEED_ID = "https://dev.to/matthew-rackley";
const FEED_AUTHOR = {
  name: "Matthew Rackley",
  email: "matthew.rackley17@gmail.com",
  link: FEED_ID
};
const FEED_TYPE = 'rss2';

const FEED_OUTPUT_FILE = {
  rss2: "feed.xml",
  atom1: "atom.xml",
  json1: "feed.json"
};
const API_URL_READING_LIST = 'https://dev.to/api/readinglist';

const FEED_FAVICON = 'https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico';
const FEED_OUTPUT_PATH = 'build';

const fetchReadingList = () => fetch(
  API_URL_READING_LIST, {
    headers: {
      accept: 'application/vnd.forem.api-v1+json',
      'api-key': API_KEY,
      'content-type': 'application/json',
    }
  }
).then(
  response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`Not able to download reading list articles: ${response.statusText} [${response.status}]`);
  }
);
interface Article {
  article: Item & { url: string; published_at: string; cover_image: string; social_image: string; }
}
const createRSSFeed = (data: Article[]) => {
  const feed = new Feed({
    title: FEED_TITLE,
    description: FEED_DESCRIPTION,
    id: FEED_ID,
    link: FEED_ID,
    favicon: FEED_FAVICON,
    author: FEED_AUTHOR,
    copyright: 'MIT',

  });

  data.forEach((item) => {
    const feedItem: Item = {
      title: item.article.title,
      id: item.article.url,
      link: item.article.url,
      description: item.article.description,
      date: new Date(item.article.published_at)
    };

    if (item.article.cover_image) {
      feedItem.image = item.article.cover_image;
    } else if (item.article.social_image) {
      feedItem.image = item.article.social_image;
    }

    feed.addItem(feedItem);
  });

  return feed[FEED_TYPE]();
};

const writeRSSFeed = (feed: string) => {
  const outputPath = `${FEED_OUTPUT_PATH}/${FEED_OUTPUT_FILE[FEED_TYPE]}`;
  try {
    if (fs.existsSync(FEED_OUTPUT_PATH) === false) {
      fs.mkdirSync(FEED_OUTPUT_PATH);
    }
    fs.writeFileSync(outputPath, feed);
  } catch (e) {
    throw new Error(`Was not able to write feed to "${outputPath}":\r\n${e}`);
  };
};
