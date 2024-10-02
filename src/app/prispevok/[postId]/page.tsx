// src/app/prispevok/[postId]/page.tsx


export const metadata = {title: "Detail príspevok | Sandrapp"};

export default function PostID({params}:
  {params:{postId:string};}) {

  return (
    <h1>Detail príspevku {params.postId}</h1>
  );
}