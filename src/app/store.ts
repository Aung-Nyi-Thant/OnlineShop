import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import movieReducer from '../features/movie/movieSlice';
import reviewReducer from '../features/review/reviewSlice';
import usersReducer from "../features/Login/UsersSlice"
import foodsReducer from "../Shop/ShopSlice"
import messageReducer from"../message/messageSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    movie: movieReducer,
    review : reviewReducer,
    user: usersReducer,
    food: foodsReducer,
    message:messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
