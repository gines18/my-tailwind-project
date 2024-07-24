import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function BlogPost({ params }) {
  const { slug } = params
  const { frontmatter, content } = getPostContent(slug)

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-4">{frontmatter.date}</p>
      <div 
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  )
}

function getPostContent(slug) {
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)
  return { frontmatter, content }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDirectory)
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
}