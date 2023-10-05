import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Portfolio - ${process.env.APP_NAME}`
}

const Portfolio = () => {
  return <div>Portfolio</div>
}

export default Portfolio
