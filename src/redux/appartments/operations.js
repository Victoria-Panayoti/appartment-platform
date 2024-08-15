import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://appartments-platform-be.onrender.com/api/";


export const fetchAppartments = createAsyncThunk("appartments/fetchAll",
    async (_, thunkAPI) => {
        try{const responce = await axios.get("appartments");
            return responce.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
        
}
)