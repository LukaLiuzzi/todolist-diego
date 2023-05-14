import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Received');
});

router.get('/', (req, res) => {
    res.send('Received');
});

export default router;