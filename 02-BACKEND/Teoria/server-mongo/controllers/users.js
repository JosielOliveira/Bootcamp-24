const User = require('../models/User'); // Asegúrate de que el modelo de usuario esté importado
const bcrypt = require('bcryptjs');

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateFields.password = await bcrypt.hash(password, salt);
        }

        const user = await User.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id);
        console.log("🚀 ~ deleteUser ~ userDelete:", userDelete);
        if (!userDelete) {
            return res.status(404).json({ errorMessage: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (error) {
        console.error("🚀 ~ deleteUser ~ error:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { updateUser, deleteUser };