const router = require('express').Router();
const {
  appointmentsSearch,
  getAppointmentsByDate,
  getAvailableAppointments,
  deleteAppointments,
  editAppointmentTime,
  editAppointmentStatus,
} = require('../../controllers');

router.get('/search', appointmentsSearch);
router.get('/:appointmentDate', getAppointmentsByDate);
router.get('/available/:date', getAvailableAppointments);
router.delete('/:appointmentId', deleteAppointments);
router.post('/');
router.patch('/:appointmentId/time', editAppointmentTime);
router.patch('/:appointmentId/status', editAppointmentStatus);
module.exports = router;
