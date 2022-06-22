import express from "express";
 
import { 
    getAllDataset,
    createDataset,
    getDatasetById,
    updateDataset,
    deleteDataset
} from "../controllers/dataset.js";
 
const router = express.Router();
 
router.get('/', getAllDataset);
router.get('/:id', getDatasetById);
router.post('/', createDataset);
router.patch('/:id', updateDataset);
router.delete('/:id', deleteDataset);
 
export default router;