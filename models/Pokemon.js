const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
    pokedexNumber: { type: Number, required: true },
    name: { type: String, required: true },
    gen: { type: Number },
    imageUrl: { type: String },
    types: [String],
    abilities: [String],
    category: { type: String },
}, { collection: 'Pokemon' });

PokemonSchema.methods.publicData = function () { //No cambiar a arrow por que se rompe xD
    return {
        id: this.id,
        pokedexNumber: this.pokedexNumber,
        name: this.name,
        gen: this.gen,
        imageUrl: this.imageUrl,
        types: this.types,
        abilities: this.abilities,
        category: this.category
    };
};

mongoose.model('Pokemon', PokemonSchema)