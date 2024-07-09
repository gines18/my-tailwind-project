// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// export default prisma

// export async function main() {
// const user = await prisma.user.create({
//     data: {
//         name: "John Doe",
//         email: "john.doe@example.com",
//     }
// })
// const users = await prisma.user.findMany();

// }

// create and article 
// const article = await prisma.article.create({
//     data: {
//         title: "My first article",
//         body: "this is johns first article",
//         author: {
//             connect: {
//                 id: 2,
//             }
//         }
//     }
// });
// console.log(article)

// const article = await prisma.article.findMany();

//create user and article and associate them
// const user = await prisma.user.create({
//     data: {
//         name: "John Doe",
//         email: "john.doe4@example.com",
//         articles: {
//             create: {
//                 title: "Saras first article",
//                 body: "this is saras first article",
//             },
//         },
//     },
// });
// console.log(user)

  


main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});