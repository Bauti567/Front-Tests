import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'; // Importa jwt y JsonWebTokenError juntos


export const createAccessToken = async (user) => {
    try {
        const token = await new Promise((resolve, reject) => {
            jwt.sign(
                { id: user._id },
                TOKEN_SECRET, // Debes reemplazar esto con tu clave secreta
                { expiresIn: '1h' },
                (err, token) => {
                    if (err) {
                        reject(new JsonWebTokenError(err.message));
                    }
                    resolve(token);
                }
            );
        });
        return token;
    } catch (error) {
        throw new JsonWebTokenError(error.message);
    }
};
