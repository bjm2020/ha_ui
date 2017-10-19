// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// Navigation
import Dashboard from './src/components/Dashboard'
import Lighting from './src/components/Lighting'
import Settings from './src/components/Settings'
import TabBar from '.src/navigators/tabBar/navigationConfiguration'
// Middleware
const middleware = () => {
  return applyMiddleware(logger())
}
export default createStore(
  combineReducers({
    tabBar: (state,action) => TabBar.router.getStateForAction(action,state),
tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
  }),
  middleware(),
)
