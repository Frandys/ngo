const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
    },
    email: {
        type: String,
        required: [true, 'User must provide an email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Please provide valid email'],
    },   
     phone: {
        type: String,
        required: [true, 'User must provide an phone'],
        unique: true
     },
    photo: {
        type: String,
        default: 'default.jpg',
    },
    role: {
        type: String,
        enum: ['user', 'mgo'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Password must be greater then 8 chars']
    },
    emailVerifyToken: String,
    emailVerifyExpires: Date,
    active: {
        type: Boolean,
        default: false
     } 
});

userSchema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    // if (!this.isModified('password')) return next();

    // Has the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    // Delete passwordConfirm field
    // this.passwordConfirm = undefined;
    next();
});
 

// userSchema.pre(/^find/, function (next) {
//     // "/^find/" => regular expression that looks for any string that starts with find... findById, findByIdAndUpdate...
//     // this middleware points to the current query
//     // This middleware outputs only users that dojnt have active: fasle
//     this.find({ active: { $ne: false } });
//     next();
// });

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
//     if (this.passwordChangedAt) {
//         const changedTimestamp = parseInt(
//             this.passwordChangedAt.getTime() / 1000,
//             10
//         );
//         return JWTTimestamp < changedTimestamp;
//     }

//     // false means NOT changed
//     return false;
// };

userSchema.methods.createVerfyToken = function () {
    const verifyToken = crypto.randomBytes(32).toString('hex');

    this.emailVerifyToken = crypto
        .createHash('sha256')
        .update(verifyToken)
        .digest('hex');
    console.log({ verifyToken }, this.emailVerifyToken);
    this.emailVerifyExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    return verifyToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
