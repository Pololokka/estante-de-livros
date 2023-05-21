import "./Styles.css";

import Input from "../Input/Index";

const Modal = ({ show, handleShow, handleSave, form, inputChange }) => {
  if (!show) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__header">
            <h3 className="titulo titulo-hover">Editar Informações</h3>
          </div>

          <div className="modal__body">
            <form onSubmit={handleSave} className="form__container form__modal">
              <Input
                labelName="Título"
                inputType="text"
                value={form.title}
                inputName="title"
                inputChange={inputChange}
              />
              <Input
                labelName="Autor"
                inputType="text"
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
              <select
                id="status"
                className="texto"
                value={form.status}
                onChange={inputChange}
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
              <input
                type="submit"
                value="Enviar!"
                className="texto btn__geral"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
