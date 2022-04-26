import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types'

export class Authentication{
    generationToken = (payload: authenticationData) =>{
        return jwt.sign(payload, process.env.JWT as string,{
            expiresIn: "5h"
        })
    }
    getTokenData = (token:string) =>{
        try {
            const tokenData = jwt.verify(
                token, process.env.JWT as string
            ) as authenticationData
            return tokenData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}