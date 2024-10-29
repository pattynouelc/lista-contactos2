import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(contact);
    };

    return (
        <div>
            <h1>Añadir Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="full_name" placeholder="Nombre Completo" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Dirección" onChange={handleChange} required />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};
