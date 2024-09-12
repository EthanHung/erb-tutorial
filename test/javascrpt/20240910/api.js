function getApiCall (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(function (response) {
          if (response.status !== 200) {
              reject('Error exist! check your server');
          }
  
          return response.json();
      })
      .then(function (data) {
          resolve(data);
      });
    });
}