// components/ClientForm.tsx
import React, { useState, useEffect } from 'react';
import type { ClientFormProps } from '../types';

const ClientForm: React.FC<ClientFormProps> = ({ onAddClient }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // useEffect para atualizar o título da aba com o nome digitado
  //atualiza o título da aba do navegador sempre que o nome digitado muda. 
  useEffect(() => {
    document.title = name ? 'Cadastro: ${name}' : 'Cadastro de Cliente';
  }, [name]);

  // useEffect para simular pré-carregamento de dados
  //simula um carregamento de dados iniciais (como se estivéssemos editando um cliente).
  useEffect(() => {
    // Simula uma requisição que preenche o formulário com dados fictícios
    const mockData = { name: 'Diogo Santos', email: 'diogo@email.com', phone: '(11) 99999-9999' };
    setName(mockData.name);
    setEmail(mockData.email);
    setPhone(mockData.phone);
  }, []); // executa apenas na montagem

  // No handleSubmit, previno o comportamento padrão, valido os campos e chamo a função onAddClient (recebida por props).
  //* Essa função é definida no componente pai (App) e atualiza a lista de clientes.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Preencha todos os campos!');
      return;
    }
    // Envia os dados para o componente pai via callback
    onAddClient({ name, email, phone });
    // Limpa o formulário após o envio
    setName('');
    setEmail('');
    setPhone('');
    document.title = 'Cadastro de Cliente';
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">Cadastro de Cliente</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
      </form>
    </div>
  );
};

export default ClientForm;