import request from './Request';
import { AsyncStorage } from 'react-native';

function getAllUsers() {
  return request({
    url: `/api/users`,
    method: 'GET',

  });
}

function registerUser(nickname, numOfAdults, numOfKids) {
  return request({
    url: `/api/users`,
    method: 'POST',
    data: {
      nickname: nickname,
      numOfAdults: numOfAdults,
      numOfKids: numOfKids,
      xp: 0,
      level_id: 1
    },
  });
}


const UserService = {
  getAllUsers,
  registerUser
};

export default UserService;
