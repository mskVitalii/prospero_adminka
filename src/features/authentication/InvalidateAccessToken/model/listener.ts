import {
  createListenerMiddleware,
  type TypedStartListening,
} from '@reduxjs/toolkit'
import { invalidateAccessToken } from '@shared/api'
import { logoutThunk } from '../../Logout/model/logout'
import { AppDispatch, AppState } from '@app/store'

export const invalidateAccessTokenListener = createListenerMiddleware()

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type TypedListening = TypedStartListening<AppState, AppDispatch>

export const startInvalidateAccessTokenListener =
  invalidateAccessTokenListener.startListening as TypedListening

startInvalidateAccessTokenListener({
  actionCreator: invalidateAccessToken,
  effect: async (_, api) => {
    // In the future here may be logic with refresh access token
    // @see https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#preventing-multiple-unauthorized-errors
    api.dispatch(logoutThunk())
  },
})
