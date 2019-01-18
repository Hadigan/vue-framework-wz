import fetch from 'utils/fetch';

export function getGameRoomInfo(gameType, roomIndex) {
    return fetch({
        url: '/gameRoomInfo',
        method: 'get',
        params: {gameType, roomIndex}
    })
}

export function postGameRoomInfo(gameType, roomInfo) {
    const data = {
        gameType,
        roomInfo
    }
    return fetch({
        url: 'gameRoomInfo',
        method: 'post',
        data
    })
}
