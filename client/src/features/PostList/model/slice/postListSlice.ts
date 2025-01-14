import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostListSchema } from '../types/postList'

const initialState: PostListSchema = {
    hasMore: true,
}

export const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        },
    },
})

export const { actions: postListActions } = postListSlice
export const { reducer: postListReducer } = postListSlice
