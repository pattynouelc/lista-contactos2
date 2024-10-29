const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [] // Aquí guardaremos los contactos
        },
        actions: {
            // Obtener la lista de contactos desde la API
            getContacts: () => {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/alesanchezr')
                    .then(res => res.json())
                    .then(data => setStore({ contacts: data }))
                    .catch(error => console.log("Error fetching contacts", error));
            },

            // Crear un nuevo contacto
            addContact: (newContact) => {
                fetch('https://playground.4geeks.com/apis/fake/contact/', {
                    method: "POST",
                    body: JSON.stringify(newContact),
                    headers: { "Content-Type": "application/json" }
                })
                .then(resp => {
                    if (resp.ok) getActions().getContacts(); // Actualizar la lista después de agregar
                })
                .catch(error => console.log("Error adding contact", error));
            },

            // Actualizar un contacto existente
            updateContact: (contactId, updatedContact) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedContact),
                    headers: { "Content-Type": "application/json" }
                })
                .then(resp => {
                    if (resp.ok) getActions().getContacts(); // Actualizar la lista después de actualizar
                })
                .catch(error => console.log("Error updating contact", error));
            },

            // Eliminar un contacto
            deleteContact: (contactId) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                    method: "DELETE"
                })
                .then(resp => {
                    if (resp.ok) getActions().getContacts(); // Actualizar la lista después de eliminar
                })
                .catch(error => console.log("Error deleting contact", error));
            }
        }
    };
};

export default getState;
