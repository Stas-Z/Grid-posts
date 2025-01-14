import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostPageSchema } from '../types/postPage'

const initialState: PostPageSchema = {
    page: 1,
}

export const postPageSlice = createSlice({
    name: 'postPage',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
})

export const { actions: postPageActions } = postPageSlice
export const { reducer: postPageReducer } = postPageSlice
