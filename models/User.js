const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'A username is required.',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'An email is required.',
            match: [/.+@.+..+/, 'Please enter an email address.'],
        },
        thoughts: [
            String,
        ],
        friends: [
            String,
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});



const User = model('User', UserSchema);

module.exports = User;
