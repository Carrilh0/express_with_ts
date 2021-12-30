import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const PORT = 3000;

const add = (...numbers: number[]): number => {
  return numbers.reduce((accumulator, current) => {
    return (accumulator += current);
  });
};

// Middleware Example
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  next();
});

app.get("/", (req: Request, res: Response) => {
  let teste = add(55, 55, 100, 500);
  res.send(`${teste}`);
});


app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}.`);
});
