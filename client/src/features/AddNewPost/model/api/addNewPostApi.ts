import { IPost } from '@/entities/Post'
import { rtkApi } from '@/shared/api/rtkApi'

interface AddNewPostProps extends Omit<IPost, 'id'> {}

export const addNewPostApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addNewPost: build.mutation<IPost, AddNewPostProps>({
            query: (value) => ({
                url: '/posts',
                method: 'POST',
                body: value,
            }),
        }),
    }),
})
export const useAddNewPost = addNewPostApi.useAddNewPostMutation
