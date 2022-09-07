import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {

    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    // Informacion del email

    const info = await transport.sendMail({
        from: '"UpTask - Admin de proyectos" <cuentas@uptasks.com>',
        to: email,
        subject: "UpTask - Confirma tu cuenta", 
        text: "Comprueba tu cuenta en UpTask",
        html: `
            <p>Bienvenido, ${nombre}</p>
            <p>Comprueba tu cuenta en UpTask para tener acceso.</p>
            <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>
            <p>Si tu no creaste esta cuenta, ignora este mensaje.</p>
        
        `
    })
}

export const emailOlvidePassword = async (datos) => {

    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    // Informacion del email

    const info = await transport.sendMail({
        from: '"UpTask - Admin de proyectos" <cuentas@uptasks.com>',
        to: email,
        subject: "UpTask - Reestablece tu contraseña", 
        text: "Reestablece tu contraseña",
        html: `
            <p>Bienvenido, ${nombre}</p>
            <p>Reestablece tu contraseña para tener acceso.</p>
            <p>Tu cuenta ya esta casi lista, solo debes reestablecer tu contraseña en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer tu contraseña</a>
            </p>
            <p>Si tu no pediste esto, ignora este mensaje.</p>
        
        `
    })
}