import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all ads
export async function getAllGames() {
    return await api.get(host + '/data/games?sortBy=_createdOn%20desc');
}

export async function getLatestGames() {
    return await api.get(host + '/data/games?sortBy=_createdOn%20desc&distinct=category');
}

// get ad by id
export async function getGameById(id) {
    return await api.get(host + `/data/games/${id}`);
}

// create ad
export async function createGame(listing) {
    return await api.post(host + '/data/games', listing);
}

// edit ad by id
export async function editGameById(id, listing) {
    return await api.put(host + `/data/games/${id}`, listing);
}

// delete ad by id
export async function deleteGameById(id) {
    return await api.del(host + `/data/games/${id}`)
}

// get my ads
export async function getMyGame(userId) {
    return await api.get(host + `/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donationGame(gameId) {
    return await api.post(host + `/data/donation`, gameId);
}

export async function getTotalDonationCount(gameId) {
    return await api.get(host + `/data/donation?where=gameId%3D%22${gameId}%22&distinct=_ownerId&count`);
}


export async function didUserDonation(gameId, userId){
    return await api.get(host + `/data/donation?where=gameId%3D%22${gameId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}