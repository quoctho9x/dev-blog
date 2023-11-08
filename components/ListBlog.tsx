'use client';
import BlogReview from "./BlogReview";

const ListBlog = (props:any) => {
    const blogData = props?.blogs;
    // console.log('props: ', props);

    return (
        <section className="flex flex-col items-center text-[1.15rem] mt-12">
            {/* <div className=" flex gap-3 mb-12"></div> */}
            {blogData.map((blog:any, index:number) => {
                return (
                    <BlogReview key={index} blog={blog} />
                )
            })
            }
        </section>
    );
}
export default ListBlog;