export const fetchFakeIncrement = async (amount) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(amount);
        }, 1000); // 1 seconde de délai
    });
};
