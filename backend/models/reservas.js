const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const reserva = new Schema ({

    numero      : { type:Number, },
    sala        : { type:String, },
    cliente     : { type:String, },    
    funcionario : { type:String, },
    data        : { type:Date,   },            
    inicio      : { type:Number, },
    fim         : { type:Number, },    
    valor       : { type:Number, },
    valortotal  : { type:Number, },    
    observacao  : { type:String, },
    status      : { type:String, }    
})

const reservaModel = mongoose.model('reservas', reserva);


module.exports = {reservaModel}