import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    courses:[]
};

export const coursesSlice = createSlice({
    name:"courses",
    initialState,
    reducers : {
        setCourses : (state,action)=>{
            state.courses=action.payload;
            // console.log(state.courses);
        }

    },
});
 
export const {setCourses} = coursesSlice.actions; // this will go to components

export default coursesSlice.reducer // this will go to store