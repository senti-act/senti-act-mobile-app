import axios from 'axios';

var baseApiAddress = 'https://dev.services.senti.cloud/core/v2/auth/organisation';

const request = async function (options) {
  const client = axios.create({
    baseURL: baseApiAddress
  });

  const onSuccess = function (response) {
    // console.log(response)
    return response.data;
  };

  const onError = function (error) {
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
    } else {
      // Something else happened while setting up the request
      // triggered the error
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

function auth(orgNickname,username,password) {
    return request({
      url: `/`,
      method: 'POST',
      data:{
        orgNickname:orgNickname,
        username:username,
        password:password
      }
    });
  }
  
  const Auth = {
    auth
  };
  
  export default Auth;