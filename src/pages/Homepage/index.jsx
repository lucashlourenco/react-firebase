import "./styles.css";

export function Homepage() {
  return (
    <div>
      <h1>Receita de Brownie</h1>
      <h2>Ingredientes:</h2>
      <ul>
        <li>200g de chocolate meio amargo</li>
        <li>200g de manteiga</li>
        <li>4 ovos</li>
        <li>1 e 1/2 xícaras de açúcar</li>
        <li>1 xícara de farinha de trigo</li>
        <li>1 pitada de sal</li>
        <li>1 colher de chá de essência de baunilha</li>
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        <li>Preaqueça o forno a 180°C.</li>
        <li>Derreta o chocolate e a manteiga em banho-maria.</li>
        <li>Em uma tigela, bata os ovos com o açúcar até obter uma mistura clara e fofa.</li>
        <li>Adicione o chocolate derretido e misture bem.</li>
        <li>Incorpore a farinha e o sal, misturando delicadamente.</li>
        <li>Adicione a essência de baunilha.</li>
        <li>Despeje a massa em uma forma untada e asse por cerca de 25-30 minutos.</li>
      </ol>
    </div>
  );
}