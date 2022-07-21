// import axios from 'axios'
// import { JSDOM } from 'jsdom'
// import { Readability } from '@mozilla/readability'

// // First lets get some search data from News API

// // Build the URL we are going request. This will get articles related to Apple and sort them newest first


// export function getFullArticle() {
//     let url = `https://newsapi.org/v2/top-headlines?country=us' +
//     'q=Apple&' +
//     'sortBy=publishedAt&' +
//     'apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    
//     // Make the request with axios' get() function
//     axios.get(url).then(function(r1) {
//       let firstResult = r1.data.articles[0];
//       axios.get(firstResult.url).then(function(r2) {
//         let dom = new JSDOM(r2.data, {
//           url: firstResult.url
//         });
//         let article = new Readability(dom.window.document).parse();
//         console.log(article.textContent);
//       })
//     })
// }