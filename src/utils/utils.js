import jwt_decode from "jwt-decode";

// Nombre del token que se almacena en el LocalStorage para la sesion
const TOKEN_KEY = "auth.token";
const USER_DATA = "auth.user";

export const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/gm;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/g;

export const displayNameRegex = /^[a-zA-Z0-9]{3,15}$/g;

export const creditcarRegex = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/g;

export const expirationRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/g;

export const toUniqueArray = (a) => {
    let newArr = [];
    for (let index = 0; index < a.length; index++) {
        if (newArr.length === 0) {
            newArr.push({ title: a[index].title, url: a[index].imageUrl, id: a[index].col_id });
        } else {
            if (newArr.filter(item => item.title === a[index].title).length === 0) {
                newArr.push({ title: a[index].title, url: a[index].imageUrl, id: a[index].col_id });
            }
        }
    }
    return newArr;
}


export const data =
    [{ "col_id": 1, "title": "Hats", "item_id": 2, "name": "Blue Beanie", "price": 18, "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png" }, { "col_id": 1, "title": "Hats", "item_id": 9, "name": "Blue Snapback", "price": 16, "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png" }, { "col_id": 1, "title": "Hats", "item_id": 1, "name": "Brown Brim", "price": 25, "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png" }, { "col_id": 1, "title": "Hats", "item_id": 3, "name": "Brown Cowboy", "price": 35, "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png" }, { "col_id": 1, "title": "Hats", "item_id": 5, "name": "Green Beanie", "price": 18, "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png" }, { "col_id": 1, "title": "Hats", "item_id": 4, "name": "Grey Brim", "price": 25, "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png" }, { "col_id": 1, "title": "Hats", "item_id": 6, "name": "Palm Tree Cap", "price": 14, "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png" }, { "col_id": 1, "title": "Hats", "item_id": 7, "name": "Red Beanie", "price": 18, "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png" }, { "col_id": 1, "title": "Hats", "item_id": 8, "name": "Wolf Cap", "price": 14, "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png" }, { "col_id": 2, "title": "Jackets", "item_id": 10, "name": "Black Jean Shearling", "price": 125, "imageUrl": "https://i.ibb.co/XzcwL5s/black-shearling.png" }, { "col_id": 2, "title": "Jackets", "item_id": 11, "name": "Blue Jean Jacket", "price": 90, "imageUrl": "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" }, { "col_id": 2, "title": "Jackets", "item_id": 13, "name": "Brown Shearling", "price": 165, "imageUrl": "https://i.ibb.co/s96FpdP/brown-shearling.png" }, { "col_id": 2, "title": "Jackets", "item_id": 12, "name": "Grey Jean Jacket", "price": 90, "imageUrl": "https://i.ibb.co/N71k1ML/grey-jean-jacket.png" }, { "col_id": 2, "title": "Jackets", "item_id": 14, "name": "Tan Trench", "price": 185, "imageUrl": "https://i.ibb.co/M6hHc3F/brown-trench.png" }, { "col_id": 3, "title": "Mens", "item_id": 17, "name": "Black & White Longsleeve", "price": 25, "imageUrl": "https://i.ibb.co/55z32tw/long-sleeve.png" }, { "col_id": 3, "title": "Mens", "item_id": 20, "name": "Burgundy T-shirt", "price": 25, "imageUrl": "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png" }, { "col_id": 3, "title": "Mens", "item_id": 15, "name": "Camo Down Vest", "price": 325, "imageUrl": "https://i.ibb.co/xJS0T3Y/camo-vest.png" }, { "col_id": 3, "title": "Mens", "item_id": 16, "name": "Floral T-shirt", "price": 20, "imageUrl": "https://i.ibb.co/qMQ75QZ/floral-shirt.png" }, { "col_id": 3, "title": "Mens", "item_id": 19, "name": "Jean Long Sleeve", "price": 40, "imageUrl": "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png" }, { "col_id": 3, "title": "Mens", "item_id": 18, "name": "Pink T-shirt", "price": 25, "imageUrl": "https://i.ibb.co/RvwnBL8/pink-shirt.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 21, "name": "Adidas NMD", "price": 220, "imageUrl": "https://i.ibb.co/0s3pdnc/adidas-nmd.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 22, "name": "Adidas Yeezy", "price": 280, "imageUrl": "https://i.ibb.co/dJbG1cT/yeezy.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 27, "name": "Air Jordan Limited", "price": 190, "imageUrl": "https://i.ibb.co/w4k6Ws9/nike-funky.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 23, "name": "Black Converse", "price": 110, "imageUrl": "https://i.ibb.co/bPmVXyP/black-converse.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 26, "name": "Nike Brown High Tops", "price": 160, "imageUrl": "https://i.ibb.co/fMTV342/nike-brown.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 25, "name": "Nike Red High Tops", "price": 160, "imageUrl": "https://i.ibb.co/QcvzydB/nikes-red.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 24, "name": "Nike White AirForce", "price": 160, "imageUrl": "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png" }, { "col_id": 4, "title": "Sneakers", "item_id": 28, "name": "Timberlands", "price": 200, "imageUrl": "https://i.ibb.co/Mhh6wBg/timberlands.png" }, { "col_id": 5, "title": "Womens", "item_id": 29, "name": "Blue Tanktop", "price": 25, "imageUrl": "https://i.ibb.co/7CQVJNm/blue-tank.png" }, { "col_id": 5, "title": "Womens", "item_id": 30, "name": "Floral Blouse", "price": 20, "imageUrl": "https://i.ibb.co/4W2DGKm/floral-blouse.png" }, { "col_id": 5, "title": "Womens", "item_id": 31, "name": "Floral Dress", "price": 80, "imageUrl": "https://i.ibb.co/KV18Ysr/floral-skirt.png" }, { "col_id": 5, "title": "Womens", "item_id": 32, "name": "REd Dots Dress", "price": 80, "imageUrl": "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png" }, { "col_id": 5, "title": "Womens", "item_id": 33, "name": "Striped Sweater", "price": 45, "imageUrl": "https://i.ibb.co/KmSkMbH/striped-sweater.png" }, { "col_id": 5, "title": "Womens", "item_id": 35, "name": "White Blouse", "price": 20, "imageUrl": "https://i.ibb.co/qBcrsJg/white-vest.png" }, { "col_id": 5, "title": "Womens", "item_id": 34, "name": "Yellow Track Suit", "price": 135, "imageUrl": "https://i.ibb.co/v1cvwNf/yellow-track-suit.png" }];

//Need to remove this and use the internal redux state
export const getListOfCategory = (id) => {
    return data.filter((item) => item.col_id === id);
}

/**
 * Chequea si el token ya se encuentra respaldado en el localstorage
 * 
 * @returns True si el token se encuentra en localstorage, False de lo contrario.
 */
export const isLoggedIn = () => localStorage.getItem(TOKEN_KEY) ? true : false;

/**
 * Searches for the token stored at the localstorage
 * 
 * @returns {string} Returns an string for the token stored
 */
export const getLocalToken = () => {
    let token = localStorage.getItem(TOKEN_KEY);

    token = token && isJwtExpired(token) ? null : token;

    return token;
}

/**
 * Searches for the user already logged in and stored at the localstorage
 * 
 * @returns Returns an object
 */
export const getLocalUser = () => {
    let stringUser = localStorage.getItem(USER_DATA);
    let user = null;

    if (stringUser) {
        user = JSON.parse(stringUser);
    }

    return user;
}

/**
 * Sets at localstorage an string of the user data in JSON format.
 * 
 * @param {object} user Object containing data of the user
 */
export const setLocalUser = (user) => {
    if (user) {
        localStorage.setItem(USER_DATA, JSON.stringify(user));
    }
}

/**
 * Agrega el token obtenido del login en el localstorage
 * 
 * @param {string} token Token obtenido del servidor y almacenar en localstorage
 */
export const setLocalToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Remueve el token utilizado para login del localstorage
 */
export const removeLocalToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

/**
 * Remueve los datos de usuario almacenados en el localstorage
 */
export const removeLocalUser = () => {
    localStorage.removeItem(USER_DATA);
}

/**
 * Performs validation over the value received checking for a valid username.
 * 
 * @param {string} value Value to be tested valid for a username.
 * @returns Return an object with valid flag and message.
 */
export const usernameValidator = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    if (!valid && !value.match(displayNameRegex)) {
        msg = "Username not valid. Use alphanumeric values up to 15 characters.";
    } else {
        valid = true;
    }

    return { valid, msg };
};

/**
 * Performs validation over the value received checking for a valid email.
 * 
 * @param {string} value Value to be tested valid for a email.
 * @returns Return an object with valid flag and message.
 */
export const emailValidator = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    if (!valid && !value.match(emailRegex)) {
        msg = "Email address is not valid.";
    } else {
        valid = true;
    }

    return { valid, msg };
};

/**
 * Performs validation over the value received checking for a valid password.
 * 
 * @param {string} value Value to be tested valid for a username.
 * @returns Return an object with valid flag and message.
 */
export const passwordValidator = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    if (!valid && !value.match(passwordRegex)) {
        msg = "Please use more than 4 character password requiring numbers and both lowercase and uppercase letters.";
    } else {
        valid = true;
    }

    return { valid, msg };
};

export const requiredField = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    return { valid, msg };
};

export const optionalField = () => true;


export const creditCardValidator = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    if (!valid && !value.match(creditcarRegex)) {
        msg = "Credit card number is not valid.";
    } else {
        valid = true;
    }

    return { valid, msg };
};


export const expirationDateValidator = (value) => {
    let valid = false, msg = null;

    if (!value) {
        msg = "This field is required.";
    }

    if (!valid && !value.match(expirationRegex)) {
        msg = "Credit card number is not valid.";
    } else {
        valid = true;
    }

    return { valid, msg };
};

/**
 * Checks if the form received contains all error attributes with null
 * to determine that the form is valid.
 * 
 * @param {object} value Form with structure to validate.
 * @returns {boolean} Returns a flag indicating if the form is valid.
 */
export const validForm = (form) => {
    let ret = true;

    if (form) {
        for (var [, value] of Object.entries(form)) {
            ret = value.error === null;
            if (!ret)
                break;
        }
    } else {
        ret = false;
    }

    return ret;
}

/**
 * Prueba si el token jwt recibido esta expirado.
 * 
 * @param {string} token Token en formato jwt para validar
 * @returns True si elk token ha expirado.
 */
export const isJwtExpired = (token) => {
    if (token !== null && typeof token !== "undefined" && token !== "") {
        var decoded = jwt_decode(token);
        var now = new Date().getTime();

        //Se multiplica por 1000 ya que la libreria regresa el tiempo de expiracion 
        // lo regresa en segundos y poder pasarlo a milisegundos
        return now > decoded.exp * 1000;
    } else {
        return true;
    }
};