# FacebookVideoScraper
Get video url from any facebook video url.

# Example
```
import Scraper from './fb-scraper.js';
const scraper = new Scraper();

var facebook = await scraper.facebook("https://www.facebook.com/watch?v=212098707701631");
if (facebook.success) {
    console.log("Video URL:", facebook_watch.url);
}

```
