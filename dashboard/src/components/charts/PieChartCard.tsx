import { Card, Text } from '@radix-ui/themes'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

export type PieDataPoint = { name: string; value: number }

const COLORS = ['#6366F1', '#22C55E', '#F59E0B', '#EF4444', '#06B6D4']

export default function PieChartCard({ title, data }: { title: string; data: PieDataPoint[] }) {
  return (
    <Card>
      <Text size="3" weight="bold">{title}</Text>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}