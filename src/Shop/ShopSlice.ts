import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import {ToDo, ToDoList} from "../features/todos/todoSlice";
import {getAllFood, saveFood,GetFoodById, GetFoodByName, DeleteFood, serchFoodByTaste, UpdateFood} from "./ShopApi";

export interface Food {
    _id? : string,
    Food_name: string,
    Prices: string,
    expire_date:string,
    FoodImage:string,
    typeOfTaste:string,
    age_permisssion:string,
    Brand:string,
    Ingredients:string,
    Rating:string,
    textStyle:string,
    country:string,
    ColorForStyle:string,
    like:number
};
export interface Foods {
    food: Array<Food>
}

const initialState: Foods = {
    food : [
        {
            _id : "1",
            Food_name:"",
            Prices:"",
            expire_date:"",
            FoodImage:"",
            typeOfTaste:"",
            age_permisssion:"",
            Brand:"",
            Ingredients:"",
            Rating:"",
            textStyle:"",
            country:"",
            ColorForStyle:"",
            like:0
        }
    ]
};
export const apiGetAllFood = createAsyncThunk(
    'movie/getAllFood',
    async () => {
        console.log("API get all foods");
        const response = await getAllFood();

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const apiSaveFood = createAsyncThunk(
    'movie/saveFood',
    async (food:Food) => {
        console.log("API save  food");
        console.log(food)
        const response = await saveFood(food);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const getFooById = createAsyncThunk(
    'movie/GetFoodById',
    async (id:any) => {
        console.log("API get  food by id");
        const response = await GetFoodById(id);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const getFooByTaste = createAsyncThunk(
    'movie/GetFoodByTaste',
    async (taste:any) => {
        console.log("API get  food by Taste");
        const response = await serchFoodByTaste(taste);

        console.log("foods by taste ",response.data);
        return response.data;
    }
);
export const getFooByName = createAsyncThunk(
    'movie/GetFoodByName',
    async (Name:any) => {
        console.log("API get  food by Name");
        const response = await GetFoodByName(Name);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const FoodUpdate = createAsyncThunk(
    'movie/FoodUpdate',
    async (food:Food) => {
        console.log("API updateFood");
        const response = await UpdateFood(food);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const DeleteFoods = createAsyncThunk(
    'movie/DeleteFood',
    async (food:any) => {
        console.log("API get  food by Name");
        const response = await DeleteFood(food);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllFood.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.food = action.payload;

            })
            .addCase(apiSaveFood.fulfilled, (state, action) => {
                console.log("Api save food fulfilled ", action.payload);
                state.food = [...state.food, action.payload];

            })
            .addCase(getFooById.fulfilled, (state, action) => {
                console.log("Api get food by id fulfilled ", action.payload);
                state.food = [...state.food, action.payload];

            })

        }
    }
);

export const { addMovie } = movieSlice.actions;
export const selectFood = (state: RootState) => state.food.food;
export const selectFoodById =  (state: RootState,foodID:string) => state.food.food.filter(food=>food._id ==foodID)[0];
export const selectFoodByName =  (state: RootState,foodName:string) => state.food.food.filter(food=>food.Food_name ==foodName)[0];
export default movieSlice.reducer;