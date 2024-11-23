import CryptoJS from "crypto-js";
export const useCrypto = () => {
    const decode = (encryptedData: string, secretKey: string) => {
        const bytes = CryptoJS.AES.decrypt(
            encryptedData,
            secretKey
        );
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    };

    return {
        decode,
    };
};