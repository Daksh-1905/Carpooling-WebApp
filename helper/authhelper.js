import bcrypt from 'bcrypt'

export const hashPassword = async(Password){
    try {
        const hashedPassword = await bcrypt.hash(Password,process.env.SALTROUNDS);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async(Password,hashedPassword){
    return bcrypt.compare(Password,hashedPassword);
}