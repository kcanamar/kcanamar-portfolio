import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '@/components/Layout';
export default function Blog({posts, dev}){
    return (
        <Layout dev={dev}>
            <h1>Blog coming soon!</h1>
            {posts.map((post, idx) => {
                //extract slug and frontmatter
                const {slug, frontmatter} = post
                //extract frontmatter properties
                const {title, author, category, date, bannerImage, tags} = frontmatter

                return (
                    <div key={idx}>
                        <Link href={`/posts/${slug}`}>
                            <h1>{title}</h1>
                        </Link>
                        <h3>{author}</h3>
                        <h3>{date}</h3>
                    </div>
                )
            })}
        </Layout>
    )
}


export async function getStaticProps(){
    const res = await fetch(`https://portfolio-api-dr2t.onrender.com/api/about/`)
    const data = await res.json()
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        
        return {
          slug,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
          dev: data[0]
        },
    };
}