import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ToDo, ToDoList} from "../todos/todoSlice";
import { getallPayMents } from './PayMentsApi';



export interface PayMent {
    _id? : string,
    username:string,
    amount:Number,
    Object_user:string,
    Things:string,
    Date:string,
    Type:string
};

export interface payMents {
    PayMents: Array<PayMent>
}

const initialState: payMents = {
    PayMents : [
        {
            _id:"",
            username:"AungNyi",
            amount:0,
            Object_user:"",
            Things:"",
            Date:"",
            Type:""
        }
    ]
};

export const apiGetAllPayMent = createAsyncThunk(
    'PayMent/GetallPayMent',
    async () => {
        console.log("API get all payMents");
        const response = await getallPayMents();

        console.log("All payMent ",response.data);
        return response.data;
    }
);







export const PayMentSlice = createSlice({
    name: 'PayMent',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllPayMent.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.PayMents = action.payload;

            })
    }
});
export const { addUsers } = PayMentSlice.actions;
export const selectPayMents = (state: RootState) => state.payMent.PayMents;
// export const selectPayMentById =  (state: RootState,_id:string) => state.user.users.filter(user=>user._id ==_id)[0];
export default PayMentSlice.reducer;