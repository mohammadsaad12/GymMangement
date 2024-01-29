const Trainer = require('../models/trainer');

const trainerController = {
  getAllTrainers: async (req, res, next) => {
    try {
      const trainers = await Trainer.find();
      res.json(trainers);
    } catch (error) {
      next(error);
    }
  },

  createTrainer: async (req, res, next) => {
    try {
      const newTrainer = new Trainer(req.body);
      await newTrainer.save();
      console.log("Trainer Added Successfully with Data:", newTrainer);
      res.status(201).json({
        message: "Trainer Added Successfully with Data",
        data: newTrainer,
      });
    } catch (error) {
      next(error);
    }
  },

  getTrainerById: async (req, res, next) => {
    try {
      const trainer = await Trainer.findById(req.params.id);
      if (!trainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
      console.log("Trainer Retrieved Successfully:", trainer);
      res.json(trainer);
    } catch (error) {
      next(error);
    }
  },

  updateTrainer: async (req, res, next) => {
    try {
      const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTrainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
      console.log("Trainer Updated Successfully with Data:", updatedTrainer);
      res.json({ message: 'Trainer Updated successfully' , updatedTrainer });
    } catch (error) {
      next(error);
    }
  },

  deleteTrainer: async (req, res, next) => {
    try {
      const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);
      if (!deletedTrainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
      console.log("Trainer Deleted Successfully:", deletedTrainer);
      res.json({ message: 'Trainer deleted successfully' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = trainerController;
