import prisma from '@moneymingle/db/client'
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions = {
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                phone: {
                    label: 'Phone',
                    type: 'text',
                    placeholder: 'Enter your phone number',
                    required:true
                },
                password:{
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter your password'
                }
            },
            // Adding User credentials type
            async authorize(credentials:any){
                const hashedPassword = await bcrypt.hash(credentials.password,10)
                const exsistingUser = await prisma.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                });
                if(exsistingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password,exsistingUser.password);
                    if(passwordValidation){
                        return {
                            id:exsistingUser.id,
                            name:exsistingUser.name,
                            email:exsistingUser.email
                        }
                    }
                    return null
                };
                try {
                    const user = await prisma.user.create({
                        data:{
                            number:credentials.phone,
                            email:credentials.email,
                            password:hashedPassword
                        }
                    })
                    return {
                        id:user.id,
                        name:user.name,
                        email:user.email
                    }
                } catch (e) {
                    console.log(e)
                }

                // If Rejected
                return null
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET || "Jai Shree Ram",
    callbacks:{
        // Type adding needed
        async session({token,session}:any){
            session.user.id = token.sub

            return session
        }
    }
}