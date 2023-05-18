import "./App.css";

import { useState } from "react";

import Input from "./Components/Input/Index";

const formDefault = {
  title: "",
  author: "",
  genre: "",
  status: "",
};

function App() {
  const [form, setForm] = useState(formDefault);

  const inputChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm(formDefault);
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className="form__container">
          <Input
            labelName="Título"
            inputType="text"
            inputRequired={true}
            value={form.title}
            inputName="title"
            inputChange={inputChange}
          />
          <Input
            labelName="Autor"
            inputType="text"
            inputRequired={true}
            value={form.author}
            inputName="author"
            inputChange={inputChange}
          />
          <Input
            labelName="Gênero"
            inputType="text"
            value={form.genre}
            inputName="genre"
            inputChange={inputChange}
          />
          <label htmlFor="status" className="subtitulo subtitulo-hover">
            Status do Livro
          </label>
          <select id="status" className="texto" required onChange={inputChange}>
            <option value="" className="texto"></option>
            <option value="Lendo" className="texto">
              Lendo
            </option>
            <option value="Lido" className="texto">
              Lido
            </option>
            <option value="Vou Ler" className="texto">
              Vou Ler
            </option>
          </select>
          <input type="submit" value="Enviar!" className="texto btn__geral" />
        </form>
      </main>
    </>
  );
}

export default App;
