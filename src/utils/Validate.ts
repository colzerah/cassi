export const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, ""); // Remove máscara
  return digits.length === 11 || digits.length === 11;
};

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
