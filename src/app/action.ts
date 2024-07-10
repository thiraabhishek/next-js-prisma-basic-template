'use server'
import { PrismaClient } from "@prisma/client"

const db=new PrismaClient

export async function publishPost(): Promise<void> {
    const user = await db.user.create({
      data: {
        name: 'Alice3',
        email: 'alice3@prisma.io',
      },
    })
    console.log(user)
  }