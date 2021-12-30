"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3000;
const add = (...numbers) => {
    return numbers.reduce((accumulator, current) => {
        return (accumulator += current);
    });
};
// Middleware Example
app.get("/", (req, res, next) => {
    next();
});
app.get("/", (req, res) => {
    let teste = add(55, 55, 100, 500);
    res.send(`${teste}`);
});
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}.`);
});
//# sourceMappingURL=server.js.map