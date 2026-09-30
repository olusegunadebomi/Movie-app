import { fetchSeries } from "../Services/Data";

export async function SeriesLoaders() {
  const series = await fetchSeries();
  return series;
}
