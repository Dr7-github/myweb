import { getAllPostSlug, getPostData } from "../../components/Post"
import Link from "next/link"

export default function PostPage({postData}){
    return (
        <div className="blog-wrapper">            
            <div className="blog-content">
                <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    const paths = getAllPostSlug()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.slug)

    return {
        props: {
            postData
        }
    }
}
