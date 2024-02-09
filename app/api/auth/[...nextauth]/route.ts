import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github"

const authOptions:NextAuthOptions = {

    providers:[
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID ?? "",
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
        })
    ]
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
