import request from './Request';
import { AsyncStorage } from 'react-native';

function getAllUsers() {
  return request({
    url: `/api/users`,
    method: 'GET'
  });
}

function getById(id) {
  return request({
    url: `/api/users/${id}`,
    method: 'GET'
  });
}

function getByUuid(uuid) {
  return request({
    url: `/api/users/uuid/${uuid}`,
    method: 'GET'
  });
}

function registerUser(nickname, uuid) {
  return request({
    url: `/api/users`,
    method: 'POST',
    data: {
      nickname: nickname,
      xp: 0,
      level_id: 1,
      uuid:uuid
    },
  });
}

function getUsageByDay(startDate,endDate) {
  return request({
    url: `/api/users/usageByDay/${startDate}/${endDate}`,
    method: 'GET'
  });
}

function updateUser(id, data){
  return request({
    url: `/api/users/${id}`,
    method: 'PUT',
    data: data,
  });
}

function getWeeklySavings(orgId){
  return request({
    url: `/api/users/weeklyPrice/${orgId}`,
    method: 'GET'
  });
}

const UserService = {
  getAllUsers,
  registerUser,
  getById,
  getByUuid,
  getUsageByDay,
  updateUser,
  getWeeklySavings
};

export default UserService;
