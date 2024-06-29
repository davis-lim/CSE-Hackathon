import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        taskname: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            required: true
        }
    }
);

export const Task = mongoose.model('Task', taskSchema);