// src/app/[id]/page.tsx

export const metadata = {title: "Detail profilu | Sandrapp"};

export default function ProfileID({params}:
  {params:{id:string};}) {

  return (
    <h1>Detail profilu {params.id}</h1>
  );
}