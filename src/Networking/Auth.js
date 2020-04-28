import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

var baseApiAddress = 'https://dev.services.senti.cloud/core/v2/auth';

const request = async function (options, isHeader=true) {

  let authHeader = null;

  if (isHeader){
    authHeader = await AsyncStorage.getItem('token')
  }
  // var token= await AsyncStorage.getItem('token')
  const client = axios.create({
    baseURL: baseApiAddress,
    headers: {
      'Authorization': 'Bearer ' + authHeader,
    },
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
      url: `/organisation`,
      method: 'POST',
      data:{
        orgNickname:orgNickname,
        username:username,
        password:password
      }
    });
  }

  async function getMe() {
    //var token= await AsyncStorage.getItem('token')
    return request({
      url: `/user`,
      method: 'GET',
      // headers: {
      //   Authorization: 'Bearer ' + token,
      // },
    });
  }
  
  const Auth = {
    auth,
    getMe
  };
  
  export default Auth;