import "./App.css";

import { books } from "./Data/books";
import { useState } from "react";

import Input from "./Components/Input/Index";
import Modal from "./Components/Modal/Index";

const formDefault = {
  id: "",
  title: "",
  author: "",
  genre: "",
  status: "",
};

function App() {
  document.title = "Estante de Livros";

  const [show, setShow] = useState(false);
  const [form, setForm] = useState(formDefault);
  const [edit, setEdit] = useState(formDefault);

  const inputChange = (event, state, setState) => {
    const name = event.target.id;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: new Date(),
      title: form.title,
      author: form.author,
      genre: form.genre,
      status: form.status,
    };

    books.push(newBook);

    setForm(formDefault);
  };

  const handleEdit = (event) => {
    const filterArray = event.target.name;
    filterInfo(filterArray);
    handleShow();
  };

  const handleDelete = (event) => {
    const filterArray = event.target.name;
    filterInfo(filterArray);

    const result = books.filter((book) => book.id == filterArray);
    const resultConverted = {
      id: result[0].id,
      title: result[0].title,
      author: result[0].author,
      genre: result[0].genre,
      status: result[0].status,
    };

    const index = books.findIndex((object) => {
      return object.id == resultConverted.id;
    });

    if (index > -1) {
      books.splice(index, 1);
    }

    // const index = books.findIndex((object) => {
    //   return object.id == edit.id;
    // });

    // console.log(edit.id);
    // console.log("teria apagado o ");
    // console.log(books[index]);

    // if (index > -1) {
    //   books.splice(index, 1);
    // }
  };

  const handleShow = () => {
    const showModal = !show;
    setShow(showModal);
  };

  const filterInfo = (filterArray) => {
    const result = books.filter((book) => book.id == filterArray);
    const resultConverted = {
      id: result[0].id,
      title: result[0].title,
      author: result[0].author,
      genre: result[0].genre,
      status: result[0].status,
    };
    setEdit(resultConverted);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedBook = {
      id: edit.id,
      title: edit.title,
      author: edit.author,
      genre: edit.genre,
      status: edit.status,
    };

    books[edit.id] = editedBook;

    handleShow();

    setEdit(formDefault);
  };

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">Estante de Livros</h1>

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
            inputChange={() => inputChange(event, form, setForm)}
          />
          <Input
            labelName="Autor"
            inputType="text"
            inputRequired={true}
            value={form.author}
            inputName="author"
            inputChange={() => inputChange(event, form, setForm)}
          />
          <Input
            labelName="Gênero"
            inputType="text"
            value={form.genre}
            inputName="genre"
            inputChange={() => inputChange(event, form, setForm)}
          />
          <label htmlFor="status" className="subtitulo subtitulo-hover">
            Status do Livro
          </label>
          <select
            id="status"
            className="texto"
            required
            value={form.status}
            onChange={() => inputChange(event, form, setForm)}
          >
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
                    name={element.id}
                    onClick={handleEdit}
                  />
                  <input
                    type="button"
                    value="Excluir"
                    className="texto btn__geral"
                    name={element.id}
                    onClick={handleDelete}
                  />
                </div>
              </div>
            );
          })}
        </section>

        <Modal
          show={show}
          info={edit}
          handleSave={handleSave}
          inputChange={() => inputChange(event, edit, setEdit)}
        />
      </main>
    </>
  );
}

export default App;
