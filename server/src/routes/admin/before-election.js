import expres from 'express'
import { addAssociation, removeAssociation } from '../../controller/admin/before-election.js'
const router = expres.Router()

router.post('/add-association', addAssociation)
router.delete('/remove-association', removeAssociation)

export default router