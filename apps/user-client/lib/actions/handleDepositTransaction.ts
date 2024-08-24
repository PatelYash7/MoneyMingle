'use server'
import jwt from 'jsonwebtoken';

export const handleDepositTransaction= async ({amount,provider,id}:{amount:number,provider:string,id?:string})=>{
    if(amount>0 && id && provider){
        const secret=String(id)
        console.log(secret)
        if (!secret) {
            throw new Error('Missing secret key');
        }
        const token = await jwt.sign({amount,provider},secret.toString(),{expiresIn:60*10})
        return token
    }
}