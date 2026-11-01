import expres from 'express'
import { 
    
    addAssociation, addPosition, getAssociations, 
    removeAssociation, getPositions, 
    removePosition

} from '../../controller/admin/before-election.controller.js'
const router = expres.Router()

// Association
router.post('/add-association', addAssociation)
router.delete('/remove-association', removeAssociation)
router.get('/get-associations', getAssociations )

// Position
router.get('/get-positions', getPositions)
router.post('/add-position', addPosition)
router.delete('/remove-position', removePosition)

export default router