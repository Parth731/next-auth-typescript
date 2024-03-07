// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";

import NextAuth from "next-auth/next";
import { options } from "./app/api/auth/[...nextauth]/options";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

// const { auth } = NextAuth(options);

// console.log(auth);

// export default auth((req: any) => {
//   console.log(req);
// });

export const config = { matcher: ["/extra", "/dashboard"] };
