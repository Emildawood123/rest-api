import { createUser, getUserByEmail } from '../db/user'
import { Request, Response, NextFunction } from 'express'
import { auth, random } from '../helpers'
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).send("the email or password or both is empty")
        }
        const checkEmail = await getUserByEmail(email).select('+authentication.salt +authentication.password')
        if (!checkEmail) {
            return res.status(401).send("email is not exist")
        }
        const expectedHash = auth(password, checkEmail.authentication.salt)
        console.log(checkEmail.authentication)
        console.log(expectedHash)
        if (checkEmail.authentication.password !== expectedHash) {
            return res.status(403).send("password is not correct")
        }
        const salt = random()
        checkEmail.authentication.sessionToken = auth(checkEmail._id.toString(), salt)
        res.cookie("EMIL-REST", checkEmail.authentication.sessionToken, { domain: 'localhost', path: '/' })
        await checkEmail.save()
        return res.status(201).json(checkEmail).end()

    } catch {
        return res.status(401).json({"error": "maybe you are hacker"})
    }
}
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, username } = req.body
        if (!email || !password || !username) {
            return res.sendStatus(400)
        }
        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            console.log("exist")
            return res.sendStatus(400)
        }
        const salt = random()
        const user = await createUser({
            email,
            username,
            authentication: {
                salt: salt,
                password: auth(password, salt),
            }
        })
         return res.status(200).json(user).end()
    } catch (error) {
        console.log(`error: ${error}`)
        next(error)
    }
}
