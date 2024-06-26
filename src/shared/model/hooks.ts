import { useSelector, useDispatch, type TypedUseSelectorHook } from 'react-redux'
import type { AppState, AppDispatch } from '@app/store'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
