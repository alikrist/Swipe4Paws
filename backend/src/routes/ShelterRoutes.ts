import ShelterController from "../controllers/ShelterController";
import app from "../config/server";
import { Router } from "express";

const shelterRoutes = Router();
const shelterController = new ShelterController();

// Defines the routes
shelterRoutes.get('/', (req, res) => shelterController.getAllShelters(req, res)); 
shelterRoutes.post('/register', (req,res) => shelterController.createShelter(req,res));

export default shelterRoutes;