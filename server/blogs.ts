import { discussionGql, discussionDetailGql } from "./gql";

const API_URL = 'https://api.github.com/graphql';
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID;

export async function getBlogs() {
    const response = await fetch(API_URL, {
        cache: 'force-cache',
        method: 'post',
        headers: {
            Authorization: `token ${GH_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: discussionGql(DISCUSSION_CATEGORY_ID) })
    })
    let res = await response.json();
    const discussions = res?.data?.repository?.discussions?.nodes;
    const posts = discussions?.map((discussion:any) => {
        const {
            title,
            author,
            createdAt,
            lastEditedAt: lastEdited,
            number: id,
            bodyHTML: html,
            bodyText,
            labels,
            url: discussionUrl,
        } = discussion
        const url = `/blog/${id}`
        const authorUrl = author.url
        const authorName = author.login
        const authorAvatar = author.avatarUrl
        const tags = labels.nodes.map((tag:any) => { return tag.name })
        const post = {
            id,
            url,
            discussionUrl,
            title,
            html,
            bodyText,
            tags,
            createdAt,
            lastEdited,
            author: { url: authorUrl, name: authorName, avatar: authorAvatar },
        }
        return post
    })
    //  console.log('response', posts);
    return posts
}


export async function getBlogDetail(blogId:number) {
    const response = await fetch(API_URL, {
        cache: 'force-cache',
        method: 'post',
        headers: {
            Authorization: `token ${GH_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: discussionDetailGql(blogId) })
    })
    let res = await response.json();
    let discussion = res.data.repository.discussion;
    // console.log('response_discussion', discussion);
    return discussion;
}
