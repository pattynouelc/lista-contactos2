import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts(); // Obtener contactos cuando se carga el componente
    }, []);

    return (
        <div>
            <h1>Lista de Contactos</h1>
            {store.contacts.length > 0 ? (
                store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} onDelete={actions.deleteContact} />
                ))
            ) : (
                <p>No hay contactos.</p>
            )}
        </div>
    );
};
