import { deleteUserById, getUserById, getUsers } from '../db/user'
import express from 'express'
export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers()
        return res.status(200).send(users)
    } catch (error){
        return res.status(400)
    }
}
export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params
        const user = getUserById(id)
        if (!user) {
            return res.sendStatus(400)
        }
        const deleteUser = await deleteUserById(id)
        return res.status(200).json(deleteUser)
    } catch (error ){
        return res.status(400)
    }
}
export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const {username} = req.body
        const user = await getUserById(id)
        if (!user) {
            return res.status(400)
        }
        user.username = username
        return res.status(200).json(user).end()
    } catch (error) {
        return res.sendStatus(400)
    }
}
