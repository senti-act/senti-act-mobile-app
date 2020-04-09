import request from './Request';

function getForUser(id) {
  return request({
    url: `/api/user/achievement/${id}`,
    method: 'GET',
  });
}

const AchievementService = {
    getForUser
};

export default AchievementService;
