import mongoose from "mongoose";

const memorySchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            required: true
        }
    }, {
        timestamps: true
    }
)

export const Memory = mongoose.model('Memory', memorySchema);