import { Card, Text } from '@radix-ui/themes'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export type LineDataPoint = { name: string; value: number }

export default function LineChartCard({ title, data }: { title: string; data: LineDataPoint[] }) {
  return (
    <Card>
      <Text size="3" weight="bold">{title}</Text>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 16, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}