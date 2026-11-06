import { Pie, PieChart, Legend, Tooltip } from "recharts"

const spending = [
  { category: "Moradia", amount: 620 },
  { category: "Alimentação", amount: 410 },
  { category: "Transporte", amount: 180 },
  { category: "Saúde", amount: 90 },
]

export default function App() {

  return (
    <>
      <PieChart width={480} height={360}>
        <Pie data={spending} dataKey="amount" nameKey="category"
          cx="50%" cy="50%" innerRadius={50} paddingAngle={2} outerRadius={120}
          label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`} />
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  )
}