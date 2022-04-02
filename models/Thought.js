const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


/////   ReactionSchema   ///// this is the reaction field's subdocumant schema
const ReactionSchema = new Schema(
    {
        reactionId: { //is the next line correct? why? what is it doing? it doesn't match documtntation
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Your reaction must say something.',
            maxLength: 280,
        },
        username: {
            type: String,
            required: 'You forgot to enter your username.',
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)



/////   ThoughtSchema   /////
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You must enter text to submit a thought.',
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'You must enter your username.'
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

