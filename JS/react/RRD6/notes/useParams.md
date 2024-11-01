# Query Params

Antes de entender sobre o "useParams", é importante entender sobre query params.

  http://localhost:5173/about/30

Isso é um claro exemplo de um query param, um parâmetro passado na URL da aplicação. (nesse caso, esse parâmetro geralmente é um id em exemplos reais, mas pode ser qualquer coisa)

# useParams

Então oque seria o useParams: um React Hook (funções que o React disponibiliza) para capturar esses parâmetros na URL.

  http://localhost:5173/about/30

  const {id} = useParams();
  console.log(id) //Saída: 30;

Pois quando eu enviei esse parâmetro, eu o nomeei de id na url do RRD6.

Ex.:

  <Route path="/about/:id" element={<About />} />

Então o useParams retona um objeto no qual tem a chave "id" com o valor colocado
