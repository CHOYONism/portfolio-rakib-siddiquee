import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Blogs - ${process.env.APP_NAME}`
}

const Blogs = () => {
  return <div>Blogs</div>
}

export default Blogs
