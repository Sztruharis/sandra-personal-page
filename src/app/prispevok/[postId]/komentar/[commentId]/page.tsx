// src/app/prispevok/[postId]/komentar/[commentId]/page.tsx

export const metadata = {title: "Detail komentára | Sandrapp"};

export default function CommentDetails({params}: {
  params: {
    postId:string
    commentId:string 
          }
}) {
    
    const {commentId} = params
    
  return (
    <h1>Detail komentára {commentId} z príspevku {params.postId}</h1>
  );
}  