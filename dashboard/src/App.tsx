import './App.css'
import { Box, Container, Flex, Grid, Heading, Table, Text } from '@radix-ui/themes'
import KPICard from './components/KPICard'
import LineChartCard, { type LineDataPoint } from './components/charts/LineChartCard'
import BarChartCard, { type BarDataPoint } from './components/charts/BarChartCard'
import PieChartCard, { type PieDataPoint } from './components/charts/PieChartCard'

const kpiData = [
  { title: '总收入', value: '¥1,253,400', deltaLabel: '+8.2% 月环比', deltaPositive: true },
  { title: '活跃用户', value: 18432, deltaLabel: '+3.1% 周环比', deltaPositive: true },
  { title: '转化率', value: '4.7%', deltaLabel: '-0.3% 日环比', deltaPositive: false },
  { title: '退款率', value: '0.9%', deltaLabel: '-0.1% 月环比', deltaPositive: true },
]

const lineData: LineDataPoint[] = [
  { name: '1月', value: 400 },
  { name: '2月', value: 460 },
  { name: '3月', value: 380 },
  { name: '4月', value: 520 },
  { name: '5月', value: 610 },
  { name: '6月', value: 700 },
]

const barData: BarDataPoint[] = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 280 },
  { name: 'Fri', value: 300 },
  { name: 'Sat', value: 220 },
  { name: 'Sun', value: 180 },
]

const pieData: PieDataPoint[] = [
  { name: 'A 类', value: 400 },
  { name: 'B 类', value: 300 },
  { name: 'C 类', value: 300 },
  { name: 'D 类', value: 200 },
]

const tableData = [
  { id: 'O-1001', user: '张伟', amount: '¥1,299', status: '已完成' },
  { id: 'O-1002', user: '李娜', amount: '¥2,560', status: '已完成' },
  { id: 'O-1003', user: '王强', amount: '¥420', status: '处理中' },
  { id: 'O-1004', user: '赵敏', amount: '¥3,120', status: '已退款' },
]

function App() {
  return (
    <Container size="4">
      <Box py="4">
        <Heading size="6">数据看板</Heading>
        <Text size="2" color="gray">关键指标与趋势</Text>
      </Box>

      <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="3">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </Grid>

      <Grid columns={{ initial: '1', md: '2' }} gap="3" mt="4">
        <LineChartCard title="收入趋势" data={lineData} />
        <BarChartCard title="每日订单量" data={barData} />
      </Grid>

      <Grid columns={{ initial: '1', md: '2' }} gap="3" mt="4">
        <PieChartCard title="品类占比" data={pieData} />
        <Box>
          <Heading size="3" mb="2">最新订单</Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>订单号</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>用户</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>金额</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>状态</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableData.map((row) => (
                <Table.Row key={row.id}>
                  <Table.RowHeaderCell>{row.id}</Table.RowHeaderCell>
                  <Table.Cell>{row.user}</Table.Cell>
                  <Table.Cell>{row.amount}</Table.Cell>
                  <Table.Cell>{row.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Grid>

      <Flex justify="center" mt="5">
        <Text size="1" color="gray">演示数据仅供参考</Text>
      </Flex>
    </Container>
  )
}

export default App
