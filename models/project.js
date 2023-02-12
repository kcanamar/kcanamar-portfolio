import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    live: {
        type: String
    },
    git: {
        type: String
    },
    stack: []
})

export default mongoose.models.Project || mongoose.model("Project", projectSchema)
