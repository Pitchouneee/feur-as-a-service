import express from 'express';
import { shouldFeur } from '../feur-core.js';

const router = express.Router();

router.post('/', (req, res) => {
    const content = req.body.message?.text;
    
    if (content && shouldFeur(content)) {
        return res.json({ text: 'feur' });
    }
    res.status(200).send();
});

export default router;
