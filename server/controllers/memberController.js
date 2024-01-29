const Member = require('../models/member');

const memberController = {
  getAllMembers: async (req, res, next) => {
    try {
      const members = await Member.find();
      res.json(members);
    } catch (error) {
      next(error);
    }
  },

  createMember: async (req, res, next) => {
    try {
      const newMember = new Member(req.body);
      await newMember.save();
      res.json(newMember);
    } catch (error) {
      next(error);
    }
  },

  getMemberById: async (req, res, next) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.json(member);
    } catch (error) {
      next(error);
    }
  },

  updateMember: async (req, res, next) => {
    try {
      const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedMember) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.json(updatedMember);
    } catch (error) {
      next(error);
    }
  },

  deleteMember: async (req, res, next) => {
    try {
      const deletedMember = await Member.findByIdAndRemove(req.params.id);
      if (!deletedMember) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.json({ message: 'Member deleted successfully' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = memberController;
