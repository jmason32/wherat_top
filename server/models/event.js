import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    time: Date,
    location: Object
})

const EventInfo = mongoose.model('EventInfo', eventSchema);

export default EventInfo;