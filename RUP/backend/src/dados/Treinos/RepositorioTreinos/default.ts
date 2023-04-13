import Treino from "../../../negocio/Treino/Treino";

const TreinosDefault: Treino[] = [
  new Treino("A", ["Supino: 4x10", "Fly: 3x12", "Tríceps polia: 4x12"], 1),
  new Treino("B", ["Puxada: 4x10", "Remada: 4x10", "Rosca direta: 4x12"], 1),
  new Treino(
    "C",
    ["Agachamento: 5x8", "Flexão de Perna: 4x12", "Panturrilha sentado: 5x12"],
    1
  ),
  new Treino("A", ["Rosca direta: 4x10", "Tríceps polia: 4x10"], 2),
  new Treino("A", ["Agachamento: 5x8", "Supino: 4x10"], 3)
];

export default TreinosDefault;
