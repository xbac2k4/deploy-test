const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const showtime = new Scheme({
    date: { type: String, required: true },
    id_room: { type: Scheme.Types.ObjectId, ref: 'room' },
    id_time: { type: Scheme.Types.ObjectId, ref: 'time' },
    id_movie: { type: Scheme.Types.ObjectId, ref: 'movie' },
}, {
    timestamps: true
}
)
module.exports = mongoose.model('showtime', showtime)