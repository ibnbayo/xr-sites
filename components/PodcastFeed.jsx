import React from 'react';
import Parser from 'rss-parser';

function PodcastFeed() {
  const [feed, setFeed] = React.useState(null);

  React.useEffect(() => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    // Create a new RSS parser instance
    const parser = new Parser();

    // Fetch and parse the RSS feed
    parser.parseURL(CORS_PROXY+'https://media.rss.com/xratlas/feed.xml')
    .then(feedData => {
      setFeed(feedData);
    });
  }, []);

  // Check if the feed has been parsed yet
  if (!feed) {
    return <p>Loading...</p>;
  }

  // Render the podcast episodes
  return (
    <div>
      {feed.items.map(item => (
        <div key={item.guid}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <audio src={item.enclosure.url} controls />
        </div>
      ))}
    </div>
  );
}

export default PodcastFeed;
