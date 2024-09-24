import mongoose from "mongoose";

const autorShema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, {versionKey: false});

const autor = mongoose.model("autores", autorShema);

export { autor, autorShema };
