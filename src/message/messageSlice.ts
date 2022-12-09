import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import {ToDo, ToDoList} from "../features/todos/todoSlice"
import {deleteMessage, getAllMessage,saveMessage} from "./messageApi";

export interface Message_ {
    _id? : string,
    username:string,
    FoodName:string,
    count:string,
    cost:string,
    date:string,
    Message:string,
    image_adress: string

};
export interface MessageList {
    message: Array<Message_>
}

const initialState: MessageList = {
    message : [
        {
            _id : "1",
            username:"",
            FoodName:"",
            count:"",
            cost:"",
            date:"",
            Message:"",
            image_adress:""
        }
    ]
};
export const apiGetAllMessage = createAsyncThunk(
    'movie/getAllMessage',
    async () => {
        console.log("API get all message");
        const response = await getAllMessage();
        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const apiSaveMessage = createAsyncThunk(
    'movie/saveMessage',
    async (message:Message_) => {
        console.log("API save  movie");
        const response = await saveMessage(message);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const apiDeleteMessage = createAsyncThunk(
    'movie/deleteMessage',
    async (message:Message_) => {
        console.log("API delete  message");
        const response = await deleteMessage(message);

        console.log("delete message json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllMessage.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.message = action.payload;

            })
            .addCase(apiSaveMessage.fulfilled, (state, action) => {
                console.log("Api save message fulfilled ", action.payload);
                state.message = [...state.message, action.payload];

            })
    }
});

export const { addMovie } = movieSlice.actions;
export const selectMessage = (state: RootState) => state.message.message;
export const selectMessageById =  (state: RootState,MID:string) => state.message.message.filter(message=>message._id ==MID)[0];
export default movieSlice.reducer;