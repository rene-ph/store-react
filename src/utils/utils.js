export const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/gm;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/g;

export const displayNameRegex = /^[a-zA-Z0-9]{3,15}$/g;

export const creditcarRegex = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/g
