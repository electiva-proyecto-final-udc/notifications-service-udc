const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("./sendEmailService");
const notificationRepository = require("../repositories/notificationRepository");

const { getClientById, getTechnicianById } = require("./externalServices/userService");
const { translateEquipmentType, translatePriority } = require("../utils/formatAndTranslate");

async function equipmentRegisteredService(payload) {
  const {
    technicianId,
    clientId,
    serviceNum,
    equipType,
    description,
    date,
    priority
  } = payload;

  // Consultar información real desde micro de usuarios
  const technicianResponse = await getTechnicianById(technicianId);
  const clientResponse = await getClientById(clientId);

  const technician = technicianResponse.data 
  const client = clientResponse.data

  if (!technician?.email) {
    throw new Error("El técnico no tiene correo registrado");
  }

  const readableType = translateEquipmentType(equipType);
  const readablePriority = translatePriority(priority);

  // Construir el correo
  const dto = new MailDTO({
    to: technician.email,
    subject: "Te han asignado un mantenimiento",
    templateName: "newServiceEmail",
    templateData: {
      technicianName: technician.name,
      serviceNum,
      clientName: client.name,
      equipType: readableType,
      description,
      date,
      priority: readablePriority
    },
    pdf: false
  });

  // Enviar correo
  await sendMail(dto);

  // Guardar registro en MongoDB
  await notificationRepository.save({
    personId: technicianId,
    toEmail: technician.email,
    notificationType: "newEquipment",
    createdAt: new Date().toISOString()
  });

  return true;
}

module.exports = { equipmentRegisteredService };
