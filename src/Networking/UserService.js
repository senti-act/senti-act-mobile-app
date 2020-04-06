import request from './Request';

function getAllUsers() {
  return request({
    url: `/api/users`,
    method: 'GET',
  });
}

const UserService = {
    getAllUsers,
};

export default UserService;
