import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PostSchema } from '../types/post'

export const initialState: PostSchema = {
    title: '',
    body: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setBody: (state, action: PayloadAction<string>) => {
            state.body = action.payload
        },
    },
})

export const { actions: postActions } = postSlice
export const { reducer: postReducer } = postSlice
