import HttpPromise from "./http_promise";

// calls Backend API: add
const CalculateSum = (data) => {
  return HttpPromise({
    method: "POST",
    url: "/add",
    params: {
      string_cal: {
        input_string: data,
      },
    },
  });
};

export default CalculateSum;
