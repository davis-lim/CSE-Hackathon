import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        tasks: [
            { type: mongoose.Schema.Types.ObjectId,
                ref: 'Task'
            }
        ],
        pollen: {
            type: Number,
            required: true
        },
        memories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Memory'
        }],
        items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }]
    }
);

export const User = mongoose.model('User', userSchema);