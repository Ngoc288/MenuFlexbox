// export const API_BASE = 'http://192.168.1.31:8888';
export const API_BASE = 'http://api.famtechvn.com';
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjkyLCJpYXQiOjE1MzY1NzQ1NTMsImV4cCI6MTUzNjY2MDk1M30.tGTpj4AGNeHHWbKDVhGdLGQUIrklVW_F1xNwc7ZX2PI';
/********************************
 * CCONFIG imgae
 *********************************/


export const MEMBER_IMG = `${API_BASE}/uploads/member.png`;
export const ADD_MEMBER_IMG = `${API_BASE}/uploads/icon-plus.png`;
/********************************
 * CCONFIG DATE
 *********************************/

export const DATE_FULL_SLASH = 'YYYY/MM/DD HH:mm:ss';
export const DATE_SIMPLE_SLASH = 'YYYY/MM/DD';
/********************************
 * DASHBOARD  APIs
 *********************************/
export const CURRENTSTATICS = `${API_BASE}/admin/currentstatistics`
export const GENERALSTATISTIC = `${API_BASE}/admin/statistics`


/********************************
 * TRANSACTIONS  APIs
 *********************************/
export const TRANSACTIONS_GET = `${API_BASE}/admin/userwithdrawal`
export const APPROVE_WITHDRAWAL = `${API_BASE}/admin/approvewithdrawal`


/********************************
 * AUTHEN APIs
 *********************************/
export const USERSTATISTIC = `${API_BASE}/admin/userstatistics`
export const USERS_NETWORK = `${API_BASE}/admin/usernetwork`
/********************************
 * AUTHEN APIs
 *********************************/
export const LOGIN = `${API_BASE}/admin/login`
export const REGISTRATION = `${API_BASE}/register`
export const FORGOT = `${API_BASE}/forgot`
export const NETWORK_SHOW_COUNTRY = `${API_BASE}/public/countries`


/********************************
 * ACCOUNT APIs
 *********************************/
export const TWO_FACTOR_SETUP = `${API_BASE}/two-factor/setup`
export const USERS_GET = `${API_BASE}/admin/users`
export const USERS_EDIT_ACCOUNT = `${API_BASE}/admin/edituser`
export const USERS_BLOCK_ACCOUNT = `${API_BASE}/admin/lockuser`
export const USERS_UNBLOCK_ACCOUNT = `${API_BASE}/admin/unlockuser`
export const USERS_REMOVE_ACCOUNT = `${API_BASE}/admin/removeuser`

/********************************
 * INVESTMENT APIs
 *********************************/

export const INVESTMENT_GET = `${API_BASE}/admin/lending`


/********************************
 * WALLET APIs
 *********************************/

export const WALLET_GET = `${API_BASE}/admin/userwallets`
export const WALLET_EDIT = `${API_BASE}/admin/editbalance`
 

/********************************
 * ADMIN WALLET APIs
 *********************************/

export const ADMIN_WALLET_GET = `${API_BASE}/admin/adminwallets`
export const ADMIN_WALLET_NEW = `${API_BASE}/admin/newadminwallet`
export const WITHDRAWAL = `${API_BASE}/admin/withdraw`

/********************************
 * GAMES APIs
 *********************************/
export const GAMES_GET = `${API_BASE}/admin/games`
export const GAMES_EDIT = `${API_BASE}/admin/editgame`
export const GAMES_ADD = `${API_BASE}/admin/newgame`
export const GAMES_REMOVE = `${API_BASE}/admin/removegame`


/********************************
 * SETTINGS APIs
 *********************************/
export const USERS_GET_PROFILE = `${API_BASE}/user/profile`
export const GET_SETTING = `${API_BASE}/admin/settings`
export const UPDATE_SETTING = `${API_BASE}/admin/editsetting`

/********************************
 * PAIRING BONUS APIs
 *********************************/
export const GET_PAIRING_BONUS = `${API_BASE}/admin/pairingmethods`
export const ADD_PAIRING_BONUS = `${API_BASE}/admin/addpairingmethod`
export const EDIT_PAIRING_BONUS = `${API_BASE}/admin/editpairingmethod`
export const REMOVE_PAIRING_BONUS = `${API_BASE}/admin/removepairingmethod`
export const EDIT_PAIRING_ROUND = `${API_BASE}/admin/editpairinground`


/********************************
 * LENDING PACKAGE APIs
 *********************************/
export const GET_LENDING_PACKAGE = `${API_BASE}/public/packages`
export const ADD_LENDING_PACKAGE = `${API_BASE}/admin/addpackage`
export const EDIT_LENDING_PACKAGE = `${API_BASE}/admin/editpackage`
export const REMOVE_LENDING_PACKAGE = `${API_BASE}/admin/removepackage`

/********************************
* MATCHING BONUS APIs
*********************************/
export const GET_MATCHING_BONUS = `${API_BASE}/admin/matchingmethods`
export const ADD_MATCHING_BONUS = `${API_BASE}/admin/addmatchingcondition`
export const EDIT_MATCHING_BONUS = `${API_BASE}/admin/editmatchingcondition`
export const REMOVE_MATCHING_BONUS = `${API_BASE}/admin/removematchingcondition`
export const EDIT_MATCHING_ROUND = `${API_BASE}/admin/editmatchinground`



/********************************
 * SETTINGS - TWO FACTOR APIs
 *********************************/
// export const TWO_FACTOR_SETUP = `${API_BASE}/two-factor/setup`
export const TWO_FACTOR_SETTING = `${API_BASE}/user/settings`
export const TWO_FACTOR_VERIFY = `${API_BASE}/user/updatetwofa`
export const TWO_FACTOR_DISABLE = `${API_BASE}/user/updateExternal`
// export const TWO_FACTOR_OTP = `${API_BASE}/two-factor/setup`