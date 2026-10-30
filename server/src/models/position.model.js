import { mongoose } from 'mongoose'

const positionSchema = new mongoose.Schema(

    {

        position: { 
            
            type: String, 
            require: [ true, 'Position is required' ], 
            unique: [ true, 'Position name should be unique' ] 
        
        },
        responsibilities: { type: [ String ], default: [] },
        shortName: { type: String, unique: [ true, 'Short name should be unique' ] },
        belongsTo: { 
            
            type: Boolean,
            require: [ true, 'Provide belongs to' ], 
            enum: [true, false], default: false
        
        },
        category: { type: String, enum: ['p', 'g'] },
        program: { type: String, enum: ['ug', 'pg'] },
        department: { type: String, enum: ['all', 'CSE', 'EEE', 'ECE', 'ME', 'CE', 'ER', 'CHE', 'ARCH'] },
        gender: { type: String, enum:['m', 'f'], default: 'm' },
        description: { type: String, require: [ true, 'Description should be provided' ] }

    },
    { timestamps: true }

)

// Belongs n - No, y - Yes
// Category p - Program, g - Gender
// Department ug - Undergraduate, pg - Postgraduate
// Gender m - Male, f - Female

const Position = mongoose.models.Position || mongoose.model('Position', positionSchema)
export default Position