import expres from 'express'
import { 
    
    addAssociation, addPosition, getAssociations, 
    removeAssociation, getPositions 

} from '../../controller/admin/before-election.controller.js'
const router = expres.Router()

router.post('/add-association', addAssociation)
router.delete('/remove-association', removeAssociation)
router.get('/get-associations', getAssociations )
router.get('/get-positions', getPositions)
router.post('/add-position', addPosition)

export default router