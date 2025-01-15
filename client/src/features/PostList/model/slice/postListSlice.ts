import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostListSchema } from '../types/postList'

const initialState: PostListSchema = {
    hasMore: true,
    selectedPostsId: [],
}

export const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        },
        setSelectedPostsId: (state, action: PayloadAction<number>) => {
            if (state.selectedPostsId.includes(action.payload)) {
                state.selectedPostsId = state.selectedPostsId.filter(
                    (id) => id !== action.payload,
                )
            } else {
                state.selectedPostsId = [
                    ...state.selectedPostsId,
                    action.payload,
                ]
            }
        },
        setClearSeletedPostsId: (state) => {
            state.selectedPostsId = []
        },
    },
})

export const { actions: postListActions } = postListSlice
export const { reducer: postListReducer } = postListSlice
