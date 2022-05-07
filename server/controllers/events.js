import EventInfo from "../models/event.js"

export const getEvents = async (req, res) => {
    try {
        const eventList = await EventInfo.find()

        console.log(eventList)

        res.status(200).json(eventList)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createEvent = async (req, res) => {
    const eventInfo = req.body;

    const newEvent = new EventInfo(eventInfo);
    try {
        await newEvent.save()

        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

