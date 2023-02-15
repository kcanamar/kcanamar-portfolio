import mongoose from 'mongoose'

const talentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    link: {
        type: String
    },
    icon: {
        type: String
    }
})

export default mongoose.models.Talent || mongoose.model("Talent", talentSchema)