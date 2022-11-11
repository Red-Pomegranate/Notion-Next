import LayoutBase from './LayoutBase'
import BlogPostListScroll from './components/BlogPostListScroll'

export const LayoutCategory = props => {
  const { category } = props
  const slotTop = <div className='flex items-center font-sans p-8'><div className='text-xl'><i className='mr-2 fas fa-th'/>分类：</div>{category}</div>

  return <LayoutBase {...props} slotTop={slotTop}>
    <BlogPostListScroll {...props} />
  </LayoutBase>
}
