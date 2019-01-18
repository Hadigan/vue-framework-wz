import fetch from 'utils/fetch';

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export function getUserList(offset, limit) {
    return fetch({
      url: '/users',
      method: 'get',
      params: {offset, limit}
    });
}

export function getUserCounts() {
  return fetch({
    url: '/userCount',
    method: 'get',
    params: {}
  })
}

export function getUser(userId) {
  return fetch({
    url: '/user',
    method: 'get',
    params: {userId}
  })
}
