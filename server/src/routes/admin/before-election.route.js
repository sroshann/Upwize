import expres from 'express'
import { addAssociation, getAssociations, removeAssociation } from '../../controller/admin/before-election.controller.js'
const router = expres.Router()

router.post('/add-association', addAssociation)
router.delete('/remove-association', removeAssociation)
router.get('/get-associations', getAssociations )

export default router