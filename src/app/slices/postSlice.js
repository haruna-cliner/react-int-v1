import {createAsyncThunk, createSlice, isAnyOf} from "@reduxjs/toolkit";
import postApi from "../../api/postApi";
import toast from "../../services/toast";

const initialState = {
    list: [],
    loading: true
};

export const fetchPosts = createAsyncThunk("posts/fetch", async (page = 1) => {
    const response = await postApi.get(page);
    return [page, response.data];
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                const [page, posts] = action.payload;
                if (page === 1) {
                    state.list = posts
                } else {
                    state.list = [...state.list, ...posts];
                }
            })
            .addMatcher(isAnyOf(fetchPosts.rejected), state => {
                state.loading = false;
                toast.error("Process failed.")
            })
    }
});


export const selectPosts = state => state.posts.list;
export default postSlice.reducer;
