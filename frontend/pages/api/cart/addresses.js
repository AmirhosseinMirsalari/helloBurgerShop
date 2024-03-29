import { handleError } from "lib/helper";
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'GET') {

        if (!req.cookies.token) {
            res.status(403).json({ message: 'ابتدا وارد حساب کاربری خود شوید' })
            return
        }

        try {
            const resApi = await axios.get('/user/addresses', {
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });

            res.status(200).json(resApi.data.data)

        } catch (err) {
            res.status(422).json({ message: { 'err': [handleError(err)] } })
        }

    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}