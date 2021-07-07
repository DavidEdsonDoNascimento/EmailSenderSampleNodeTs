
import { Router } from 'express';
import UserController from '../controllers/UserController';
import EmailService from '../services/EmailService';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Deu certo com ts-node-dev' })
});

router.get('/users', async (req, res) => {
    
    const users = await UserController.list();

    return res.status(200).json({ users })
})
.post('/users', async (req, res) => {
    console.log(req.body);
    const user = await UserController.create({ ...req.body });
    
    await EmailService.sendEmail({ ...user }, { ...req.body });

    return res.status(200).json({ message: 'Usuário criado com sucesso.' })
});

export default router;