import { profile } from "console"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react"
export const authOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID || "",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID || "",
            clientSecret:process.env.GITHUB_CLIENT_SECRET || ""
        })
    ],
    callbacks:{
        jwt:async ({user,token}:any)=>{
            if(user){
                token.uid=user.id;
            }
            return token
        },
        // Type adding needed
        async session({token,session,user}:any){
            if(user){
                session.user.id = token.uid
                console.log(JSON.parse(user.user))
            }
            return session
        }
    }
}