import bcrypt from "bcryptjs";

export const _hash = async (pwd: string) => {
    const saltRounds = 10;
    return await bcrypt.hash(pwd, saltRounds);
}

export const _compare = async (pwd: string, hash: string) => {//pwd：输入; hash：encode_hash
    return await bcrypt.compare(pwd, hash);
}
