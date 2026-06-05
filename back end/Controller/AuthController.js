const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const { RegisterSchema, LoginSchema } = require("../validations/authValidation");

const Register = async (req, res, next) => {
    try {
        const { error, value } = RegisterSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "This data isn't right, please try again"
            });
        }

        const { name, email, phoneNumber, password, role } = value;

        const IsExist = await User.findOne({ email });
        if (IsExist) {
            return res.status(400).json({
                success: false,
                message: "This user already exists, please try again"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            phoneNumber,
            password: hashPassword,
            role
        });

        return res.status(201).json({
            success: true,
            message: "Creating New User is Successful 🎉",
            data: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                role: newUser.role
            }
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const Login = async (req, res, next) => {
    try {
        const { error, value } = LoginSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Invalid inputs, please check your email and password"
            });
        }

        const { email, password } = value;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || "YOUR_JWT_SECRET",
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    Register,
    Login
};