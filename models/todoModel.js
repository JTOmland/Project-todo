var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
    type: String,
    process: String,
    title: String,
    status: String,
    due: { type : Date, default: Date.now },
    defer: { type : Date, default: Date.now },
    context: String,
    project: String,
    note: String,
    completed: { type : Boolean, default: false },
    tasktime: Number,
    recures: { type : Boolean, default: false },
    desire: { type : String, default: 'Empty' },
    value: { type : Number, default: 5 },
    priority:{ type : Number, default: 1 },
    urgent: { type : Boolean, default: false },
    important: { type : Boolean, default: true },
    flagged: { type : Boolean, default: false },
    delayedCount: { type : Number, default: 0 },
    inputs: [ {
                type: mongoose.Schema.Types.ObjectId,
                ref: ToDo
            }
        
    ],

});


var autoPopulateLead = function (next) {
    this.populate('inputs');
    //this.populate('usages.ToDo')

    next();
};

ToDoSchema.
    pre('findOne', autoPopulateLead).
    pre('find', autoPopulateLead);


var ToDo= mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;