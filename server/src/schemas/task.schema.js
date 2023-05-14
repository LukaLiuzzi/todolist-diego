import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('tasks', taskSchema);

