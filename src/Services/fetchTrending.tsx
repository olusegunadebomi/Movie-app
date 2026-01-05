// import { fetchMoviesByPage } from "./Data";

// const TRENDING_KEYWORDS = [
//   "Avengers",
//   "Batman",
//   "Spider-Man",
//   "Star Wars",
//   "Avatar",
// ];

// export async function fetchTrendingMovies() {
//   let allResults: any[] = [];

//   for (const keyword of TRENDING_KEYWORDS) {
//     const results = await fetchMoviesByPage(keyword, 1);
//     if (results.length > 0) {
//       allResults.push(...results);
//     }
//   }

//   // shuffle results
//   return allResults.sort(() => 0.5 - Math.random());
// }
// export default fetchTrendingMovies;
