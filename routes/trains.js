import express from 'express';
import { Train, Station } from '../models/index.js'; 
import { authorization } from '../middleware/authMiddleware.js'; 
import { isAdmin } from '../middleware/adminMiddleware.js'; 

const router = express.Router();

/**
 * ✅ Get all trains (Only authenticated users)
 */
router.get('/', authorization, async (req, res) => {
  try {
    const trains = await Train.findAll({ include: [{ model: Station, as: 'station' }] });
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trains', error });
  }
});

/**
 * ✅ Get a specific train by ID (Only authenticated users)
 */
router.get('/:id', authorization, async (req, res) => {
  try {
    const train = await Train.findByPk(req.params.id, { include: [{ model: Station, as: 'station' }] });
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.json(train);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching train', error });
  }
});

/**
 * ✅ Create a new train (Only admins)
 */
router.post('/', authorization, isAdmin, async (req, res) => {
  try {
    const newTrain = await Train.create(req.body);
    res.status(201).json(newTrain);
  } catch (error) {
    res.status(400).json({ message: 'Error creating train', error });
  }
});

/**
 * ✅ Update a train (Only admins)
 */
router.put('/:id', authorization, isAdmin, async (req, res) => {
  try {
    const train = await Train.findByPk(req.params.id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    await train.update(req.body);
    res.json(train);
  } catch (error) {
    res.status(400).json({ message: 'Error updating train', error });
  }
});

/**
 * ✅ Delete a train (Only admins)
 */
router.delete('/:id', authorization, isAdmin, async (req, res) => {
  try {
    const train = await Train.findByPk(req.params.id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    await train.destroy();
    res.json({ message: 'Train deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting train', error });
  }
});

export default router;
