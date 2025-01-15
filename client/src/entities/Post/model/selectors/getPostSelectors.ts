import { StateSchema } from '@/app/providers/StoreProvider'

export const getPostTitle = (state: StateSchema) => state.post.title
export const getPostBody = (state: StateSchema) => state.post.body
