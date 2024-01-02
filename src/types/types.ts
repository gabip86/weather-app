export type Forecast = {
  id: number,
  day: string,
  temp: number,
  desc: string,
}

export type City = {
  id: number,
  name: string,
  forecasts: Forecast[],
}
