import { combineReducers } from 'redux';

import getAllPeople from './modules/starWars/getAllPeople';
import getAllField from './modules/starWars/getAllField';

export default combineReducers({
  getAllPeople,
  getAllField,
});
