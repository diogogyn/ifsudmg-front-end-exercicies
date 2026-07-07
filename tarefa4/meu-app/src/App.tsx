// App.tsx
import React, { useState } from 'react';
import ClientForm from './components/ClientForm';
import type { Client } from './types';

function App() {
  const [clients, setClients] = useState<Client[]>([]);
  let nextId = 1;

  const handleAddClient = (newClient: Omit<Client, 'id'>) => {
    setClients([...clients, { id: nextId++, ...newClient }]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <ClientForm onAddClient={handleAddClient} />
        </div>
      </div>
      {clients.length > 0 && (
        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <h4>Clientes Cadastrados</h4>
            <ul className="list-group">
              {clients.map((client) => (
                <li key={client.id} className="list-group-item">
                  <strong>{client.name}</strong> - {client.email} - {client.phone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;