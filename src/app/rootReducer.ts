import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice'
import repoDetailsReducer from 'features/repoSearch/repoDetailsSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
