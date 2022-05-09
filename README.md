# FacebookVideoScraper
Get video url from any facebook video url.

# Example
```
import Scraper from './fb-scraper.js';
const scraper = new Scraper();

var facebook = await scraper.facebook("https://www.facebook.com/groups/pcsruins/permalink/570761527756076/");
if (facebook.success) {
    console.log("Video URL:", facebook.url);
}

```
