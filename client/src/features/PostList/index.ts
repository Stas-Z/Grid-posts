export { useDeletePosts } from './model/api/postListApi'

export { getSelectedPosts } from './model/selectors/getPostListSelector'

export { postListApi } from './model/api/postListApi'

export { getPostListHasMore } from './model/selectors/getPostListSelector'

export { postListReducer, postListActions } from './model/slice/postListSlice'

export { PostList } from './ui/PostList/PostList'

export type { PostListSchema } from './model/types/postList'
