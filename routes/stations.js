import express from 'express';
import { Station, Train } from '../models/index.js'; // ✅ Correct import

const router = express.Router();

// Get all stations
router.get('/', async (req, res) => {
  try {
    const stations = await Station.findAll({ include: [{ model: Train, as: 'trains' }] });
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stations', error });
  }
});

// Get a station by ID
router.get('/:id', async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id, { include: [{ model: Train, as: 'trains' }] });
    if (!station) {
      return res.status(404).json({ message: 'Station not found' });
    }
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching station', error });
  }
});

// Create a new station
router.post('/', async (req, res) => {
  try {
    const newStation = await Station.create(req.body);
    res.status(201).json(newStation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating station', error });
  }
});

// Update a station
router.put('/:id', async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) {
      return res.status(404).json({ message: 'Station not found' });
    }
    await station.update(req.body);
    res.json(station);
  } catch (error) {
    res.status(400).json({ message: 'Error updating station', error });
  }
});

// Delete a station
router.delete('/:id', async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) {
      return res.status(404).json({ message: 'Station not found' });
    }
    await station.destroy();
    res.json({ message: 'Station deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting station', error });
  }
});

export default router;
