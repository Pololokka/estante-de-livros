import "./App.css";

import { books } from "./Data/books";
import { useState } from "react";

import Input from "./Components/Input/Index";

const formDefault = {
  title: "",
  author: "",
  genre: "",
  status: "",
};

function App() {
  document.title = "Estante de Livros";

  const [form, setForm] = useState(formDefault);

  const inputChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: books.length,
      title: form.title,
      author: form.author,
      genre: form.genre,
      status: form.status,
    };

    books.push(newBook);
    console.log(books);

    setForm(formDefault);
  };

  const handleEdit = () => {
    console.log("editando...");
  };

  const handleDelete = () => {
    console.log("deletando...");
  };

  return (
    <>
      <main>
        <form
          onSubmit={handleSubmit}
          className="form__container border__bottom"
        >
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

        <section className="books__container">
          {books?.map((element) => {
            return (
              <div key={element.id} className="book--card__container">
                <p className="subtitulo subtitulo-hover">{element.title}</p>
                <p className="texto">de</p>
                <p className="subtitulo subtitulo-hover">{element.author}</p>
                <p className="texto">Gênero(s): {element.genre}</p>
                <p className="texto">Status: {element.status}</p>
                <div className="book--card__buttons">
                  <input
                    type="button"
                    value="Editar"
                    className="texto btn__geral"
                    onClick={handleEdit}
                  />
                  <input
                    type="button"
                    value="Excluir"
                    className="texto btn__geral"
                    onClick={handleDelete}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
