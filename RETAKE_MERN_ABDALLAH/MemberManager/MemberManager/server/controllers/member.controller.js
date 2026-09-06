const Member = require("../models/member.model");

const duplicateEmailError = (res) => {
  return res.status(400).json({
    errors: {
      email: {
        message: "Email should be valid and unique",
      },
    },
  });
};

const findMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(400).json(err);
  }
};

const createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.json(member);
  } catch (err) {
    if (err.code === 11000) {
      return duplicateEmailError(res);
    }
    res.status(400).json(err);
  }
};

const updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(member);
  } catch (err) {
    if (err.code === 11000) {
      return duplicateEmailError(res);
    }
    res.status(400).json(err);
  }
};

const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  findMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
