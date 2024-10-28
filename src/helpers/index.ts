import crypto from 'crypto'
const SECRET = "EMIL-REST"
export const random = () => crypto.randomBytes(128).toString('base64')
export const auth = (password: String, salt: string) => {
    return crypto.createHmac("sha256", [password, salt].join('/')).update(SECRET).digest('hex')
}
