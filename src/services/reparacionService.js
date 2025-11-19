const notificationRepository = require("../repositories/notificationRepository");
const { sendMail } = require("../services/sendEmailService");
const { getClientById, getTechnicianById } = require("../services/externalServices/userService");
const MailDTO = require("../dto/MailDTO");
const { translateEquipmentType } = require("../utils/formatAndTranslate");

async function finishReparationService(payload) {
    const {
        technicianId,
        clientId,
        serviceNum,
        equipType,
        model,
        description,
        date,
        priority
    } = payload;

    // 1. Consultar datos reales desde el micro de usuarios
    const technicianResponse = await getTechnicianById(technicianId);
    const clientResponse = await getClientById(clientId);

    technician = technicianResponse.data
    client = clientResponse.data

    if (!client?.email) {
        throw new Error("El cliente no tiene correo registrado");
    }
    equipTypeTranslated = translateEquipmentType(equipType)
    const dto = new MailDTO({
        to: technician.email,
        subject: "Reparación finalizada",
        templateName: "finishServiceEmail",
        templateData: {
            technicianName: technician.name + " " + technician.surname,
            serviceNum,
            clientName: client.name + " " + client.surname,
            equipType: equipTypeTranslated,
            model,
            description,
            date,
            priority
        },
        pdf: false
    });

    // 3. Guardar log de notificación
    await notificationRepository.save({
        personId: clientId,
        toEmail: technician.email,
        notificationType: "finishReparation",
        createdAt: new Date().toISOString()
    });

    // 4. Enviar correo
    await sendMail(dto);


    return true;
}

module.exports = { finishReparationService };
