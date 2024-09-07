import express from 'express';
import { registerCompany, getCompany, getCompanyById, updateCompany } from '../controllers/company.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.use(isAuthenticated);

router.route('/register').post(registerCompany);
router.route('/get').get(getCompany);
router.route('/get/:id').get(getCompanyById);
router.route('/update/:id').put(singleUpload, updateCompany);

export default router;
