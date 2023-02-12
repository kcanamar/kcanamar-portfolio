import mongoose from 'mongoose'

const aboutSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    linked: {
        type: String
    },
    git: {
        type: String
    },
    twitter: {
        type: String
    },
    blog: {
        type: String
    },
    bio: {
        type: String
    },
    age: {
        type: Number
    },
    projects: {
        type: Array,
        ref: "Project",

    }
    ,
})

export default mongoose.models.About || mongoose.model("About", aboutSchema) 
// export let Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
