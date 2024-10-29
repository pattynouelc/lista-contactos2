import React, { useState } from "react";

export const ContactCard = ({ contact, onDelete }) => {
    const [showModal, setShowModal] = useState(false); // Estado para mostrar o esconder el modal

    return (
        <div className="contact-card">
            <h4>{contact.full_name}</h4>
            <p>Email: {contact.email}</p>
            <p>Teléfono: {contact.phone}</p>
            <p>Dirección: {contact.address}</p>

            {/* Botón para eliminar el contacto, que activa el modal */}
            <button onClick={() => setShowModal(true)}>Eliminar</button>

            {/* Modal de confirmación para eliminar */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>¿Estás seguro de que deseas eliminar este contacto?</p>
                        <button 
                            onClick={() => {
                                onDelete(contact.id); // Eliminar el contacto si se confirma
                                setShowModal(false); // Cerrar el modal
                            }}>
                            Sí, eliminar
                        </button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
