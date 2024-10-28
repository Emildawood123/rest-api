import { getUserBySessionToken } from "../db/user";
import express, { NextFunction } from "express";
import { get, identity, merge } from "lodash"
export const isOwner = async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const currentUserId = get(req, "identity._id") as String
        if (!currentUserId) {
            return res.sendStatus(400)
        }
        if (currentUserId != id) {
            return res.sendStatus(400)
        }
        return next()
    } catch {
        return res.sendStatus(400)
    }
}
export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessiontoken = req.cookies['EMIL-REST']
        console.log(sessiontoken)
        if (!sessiontoken) {
            return res.sendStatus(403)
        }
        const user = await getUserBySessionToken(sessiontoken)
        console.log(user)
        if (!user) {
            return res.sendStatus(403)
        }
        merge(req, {identity: user})
        return next()
    } catch(error) {
        return res.sendStatus(403)
    }
}
