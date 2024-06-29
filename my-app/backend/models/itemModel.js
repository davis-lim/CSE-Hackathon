import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        itemname: String,
        description: String,
        pollenCost: Number,
        isBought: Boolean
    }, {
        timestamps: true
    }
)

export const Item = mongoose.model('Item', itemSchema);