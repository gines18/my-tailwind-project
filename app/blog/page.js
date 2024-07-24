import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-8">
          <Link href={`/blog/${post.slug}`}>
            <span className="text-2xl font-semibold hover:underline">{post.frontmatter.title}</span>
          </Link>
          <p className="text-gray-500">{post.frontmatter.date}</p>
        </div>
      ))}
    </div>
  )
}

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDirectory)
  return files.map(filename => {
    const slug = filename.replace('.md', '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontmatter } = matter(fileContents)
    return { slug, frontmatter }
  })
}