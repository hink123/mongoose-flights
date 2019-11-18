var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = currentDate.getMonth();
            let day = currentDate.getDate();
            return new Date(year + 1, month, day);
        }
    }
});

