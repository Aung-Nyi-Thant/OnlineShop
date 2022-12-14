import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ToDo, ToDoList} from "../todos/todoSlice";
import {getallUsers,saveUsers,Login, registerUser, UpdateAccount, DeleteUser} from "./LoginApi";

export interface Users {
    // _id? : string,
    // title: string,
    // year: number,
    // image_adress:string,
    // background_img:string,
    // color:string,
    // summary:string
    _id? : string,
    username:string,
    password:string,
    email:string,
    age:string,
    money:number,
    totalMoney:string,
    type_:string
};
export interface User1 {
    _id? : string,
    userName:string,
    password:string,
    email:string,
    age:string,
    money:number,
    totalMoney:string,
    type_:string
}
export interface users {
    users: Array<Users>
}

const initialState: users = {
    users : [
        {
            _id:"",
            username:"AungNyi",
            password:"accmobile",
            email:"",
            age:"",
            totalMoney:"",
            money:0,
            type_:""
        }
    ]
};
export const apiGetAllUsers = createAsyncThunk(
    'movie/GetallUser',
    async () => {
        console.log("API get all users");
        const response = await getallUsers();

        console.log("All users ",response.data);
        return response.data;
    }
);
export const apiSaveUsers = createAsyncThunk(
    'movie/saveMovie',
    async (users:Users) => {
        console.log("API save  movie");
        const response = await saveUsers(users);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const UpdateAccount_ = createAsyncThunk(
    'movie/saveMovie',
    async (users:Users) => {
        console.log("API update  account");
        const response = await UpdateAccount(users);

        console.log("Update account json ",response.data);
        return response.data;
    }
);
export const login = createAsyncThunk(
    'movie/saveMovie',
    async (users:Users) => {
        console.log("API save  movie");
        const response_ = await Login(users);

        console.log("save movie json ",response_.data);
        return response_.data;
    }
);
export const DeleteUser_ = createAsyncThunk(
    'movie/saveMovie',
    async (users:Users) => {
        console.log("API save  movie");
        const response_ = await DeleteUser(users);

        console.log("save movie json ",response_.data);
        return response_.data;
    }
);
export const movieSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllUsers.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.users = action.payload;

            })
            .addCase(login.fulfilled, (state, action) => {
                console.log("Api save users fulfilled ", action.payload);
                state.users = [...state.users, action.payload];

            })
    }
});

export const { addUsers } = movieSlice.actions;
export const selectUser = (state: RootState) => state.user.users;
export const selectUserById =  (state: RootState,_id:string) => state.user.users.filter(user=>user._id ==_id)[0];
export default movieSlice.reducer;