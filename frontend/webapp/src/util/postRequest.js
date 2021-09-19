const BASE_URL = "http://50.18.40.147:4000"; 

function postRequest(endpoint, body, cb) {
    fetch(BASE_URL + '/' + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
      .then(resJSON => cb(resJSON));
}

export default postRequest;