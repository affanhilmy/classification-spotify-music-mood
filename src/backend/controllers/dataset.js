import Dataset from "../models/datasetModel.js";
 
export const getAllDataset = async (req, res) => {
    try {
        const dataset = await Dataset.findAll();
        res.json(dataset);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getDatasetById = async (req, res) => {
    try {
        const product = await Dataset.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(dataset[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createDataset = async (req, res) => {
    try {
        await Dataset.create(req.body);
        res.json({
            "message": "Dataset Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateDataset = async (req, res) => {
    try {
        await Dataset.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Dataset Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteDataset = async (req, res) => {
    try {
        await Dataset.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Dataset Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}