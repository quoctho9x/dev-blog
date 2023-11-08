import BlogHeader from "@/components/BlogHeader";
import { getBlogDetail } from "@/server/blogs";
import parse from 'html-react-parser';
import detail from './id.module.css';

export default function BlogPost({ params }: { params: { slug: string, id:string } }) {
  // const blogDetail = await getBlogDetail(parseInt(params?.id));
  // console.log('blogDetail: ',blogDetail);
  
  return (
    <section className="layout">
      {/* <div className=" max-w-[50%]">
        <h1 className=" text-center my-10 text-[2rem] font-bold">
          {blogDetail?.title}
        </h1>
        <div className=" flex justify-center flex-col mb-4">
        <BlogHeader blogData={blogDetail} />
        <div className={`${detail.html}`}>
          {parse(blogDetail?.bodyHTML)}
        </div>
        </div>
      </div> */}
    </section>
  )
}