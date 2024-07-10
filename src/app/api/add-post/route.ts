import { NextResponse } from "next/server"

// export async function POST(request){
//     const res = await request.json()
//     const {title, content} = res;
//      const result = await prisma.post.create({
//         data: {
//             title,
//             content,
//             published: true,
//             author: {create: {
//                 name: 'ryan'
//             }}
//         }
//      })

//     return NextResponse.json({result})
// }


import { PrismaClient } from "@prisma/client"

const db=new PrismaClient

// export default async function handle(req, res) {
//    const posts = await db.user.findMany()
//   res.json(posts)
// }

export async function GET(req, res) {
  const posts = await db.user.findMany()
  console.log('posts',posts);
  return Response.json(posts)

}


export async function POST(req, res) {
  const data=await req.json()
  const posts = await db.user.create({data:data})
  return Response.json(posts)

}