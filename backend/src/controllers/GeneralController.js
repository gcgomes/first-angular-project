const operators = [
  {nome: "Oi", codigo: "14", categoria: "Celular", preco: 2},
  {nome: "Vivo", codigo: "15", categoria: "Celular", preco: 1},
  {nome: "Tim", codigo: "41", categoria: "Celular", preco: 3},
];

let contacts = [
  {id: 1, nome: "Pedro", telefone: "9999-2222", data: new Date(), operadora: operators[0]},
  {id: 2, nome: "Ana", telefone: "9999-3333", data: new Date(), operadora: operators[1]},
  {id: 3, nome: "Maria", telefone: "9999-9999", data: new Date(),  operadora: operators[2]}
];

module.exports = {
  operatorIndex(request, response) {
    return response.json(operators);
  },
  contactIndex(request, response) {

    return response.json(contacts);
  },
  createContact(request, response) {
    const contact = request.body;

    contacts.push(contact);

    return response.json({ message: "Operação concluída com sucesso!" });
  }
};
