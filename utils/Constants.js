const prod = {
  urls: {
    HABITS_URL: "https://TBD.herokuapp.com/habits",
    DAYS_URL: "https://TBD.herokuapp.com/days",
  },
};
const dev = {
  urls: {
    HABITS_URL: "http://localhost:3033/habits",
    DAYS_URL: "http://localhost:3033/days",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
