import { Card, Flex, Text, Badge } from '@radix-ui/themes'

export type KPICardProps = {
  title: string
  value: string | number
  deltaLabel?: string
  deltaPositive?: boolean
}

export default function KPICard({ title, value, deltaLabel, deltaPositive = true }: KPICardProps) {
  return (
    <Card>
      <Flex direction="column" gap="2">
        <Text size="2" color="gray">{title}</Text>
        <Text size="6" weight="bold">{value}</Text>
        {deltaLabel ? (
          <Badge color={deltaPositive ? 'green' : 'red'} variant="soft">
            {deltaLabel}
          </Badge>
        ) : null}
      </Flex>
    </Card>
  )
}