import request from './Request';

function GetAllTips() {
    return request({
      url: '/api/tips',
      method: 'GET',
    });
  }
  
  function GetTipsByCategoryId(category_id) {
    return request({
      url: `/api/tips/${category_id}`,
      method: 'GET',
    });
  }

  function SubmitTip(category_id, title, description, user_id, anonymous){
    return request({
        url: `/api/tips/`,
        method: 'POST',
        data: {
            user_id : user_id,
            category_id : category_id,
            title : title,
            description : description,
            approved : 0,
            anonymous : anonymous
        },
    });
  }

  const TipsService = {
    GetAllTips,
    GetTipsByCategoryId,
    SubmitTip,
  };

  export default TipsService;