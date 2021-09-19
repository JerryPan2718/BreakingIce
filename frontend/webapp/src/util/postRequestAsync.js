const BASE_URL = "http://50.18.40.147:4000";

const postRequestAsync = async (endpoint, body) => {
  const res = await fetch(BASE_URL + "/" + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
};

export default postRequestAsync;
