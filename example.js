import Scraper from './fb-scraper.js';
const scraper = new Scraper();


/// Facebook Watch
var facebook_watch = await scraper.facebook("https://www.facebook.com/watch?v=212098707701631");
if (facebook_watch.success) {
    console.log("Video URL:", facebook_watch.url);
}
/* RETURN:
{
  success: true,
  url: 'https://video.fsdu36-1.fna.fbcdn.net/v/t42.1790-2/250355080_1141687019571924_6293877891421432899_n.mp4?_nc_cat=100&ccb=1-6&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=CO99pDFH514AX-SmhRF&_nc_rml=0&_nc_ht=video.fsdu36-1.fna&oh=00_AT8c-QYNDxLB3Ut8xylSCfmp4TW__h0YRU3kXup6yrlY4g&oe=627939BF'
}
*/


/// Facebook Post
var facebook_post = await scraper.facebook("https://www.facebook.com/groups/pcsruins/permalink/570761527756076/");
if (facebook_post.success) {
    console.log("Video URL:", facebook_post.url);
}
/* RETURN:
{
  success: true,
  url: 'https://video.fsdu36-1.fna.fbcdn.net/v/t42.1790-2/280055523_558868352626600_3616808264019125904_n.mp4?_nc_cat=104&ccb=1-6&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=bXDAhw41bYQAX-3yJbk&_nc_rml=0&_nc_ht=video.fsdu36-1.fna&oh=00_AT8Ce-Vxo8ZQUXJviSzdhDM1SUOksbX_U7ROAmG-SINFcg&oe=627935E0'
}
*/


/// Bad url example:
var facebook_bad = await scraper.facebook("https://www.facebook.com/stories/1271362122954757/UzpfSVNDOjM2NDEzMzIyODg2OTQ5OA==/?bucket_count=9&source=story_tray");
if (facebook_bad.success) {
    console.log(facebook_bad);
}
/* RETURN:
{
  success: false,
  message: 'Erro ao selecionar vídeo, a estrutura pode ter sido alterada!'
}
*/