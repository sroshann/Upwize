import expres from 'express'
import { addAssociation, getAssociations, getPositions, removeAssociation } from '../../controller/admin/before-election.controller.js'
const router = expres.Router()

router.post('/add-association', addAssociation)
router.delete('/remove-association', removeAssociation)
router.get('/get-associations', getAssociations )
router.get('/get-positions', getPositions)

export default router