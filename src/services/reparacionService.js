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

    // Consultar datos desde el micro de usuarios
    const technicianResponse = await getTechnicianById(technicianId);
    const clientResponse = await getClientById(clientId);

    technician = technicianResponse.data
    client = clientResponse.data

    if (!client?.email) {
        throw new Error("El cliente no tiene correo registrado");
    }
    today = new Date().toISOString().split("T")[0];
    equipTypeTranslated = translateEquipmentType(equipType)
    const dto = new MailDTO({
        to: client.email,
        subject: "Reparación finalizada",
        templateName: "finishServiceEmail",
        templateData: {
            technicianName: technician.name + " " + technician.surname,
            serviceNum,
            clientName: client.name + " " + client.surname,
            equipType: equipTypeTranslated,
            model,
            description,
            date: today,
            priority
        },
        pdf: false
    });

    await notificationRepository.save({
        personId: clientId,
        toEmail: client.email,
        notificationType: "finishReparation",
        createdAt: today
    });

    // Enviar correo
    await sendMail(dto);


    return true;
}

module.exports = { finishReparationService };
