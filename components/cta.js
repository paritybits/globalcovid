import { Flex, Button, useColorMode } from 'theme-ui'
import Link from 'next/link'
import { reverse } from 'lodash'

export default ({ primary = [], secondary = {}, sx = {} }) => {
  const [colorMode] = useColorMode()
  let colors = ['blue', 'cyan']
  if (colorMode === 'dark') colors = reverse(colors)
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        ...sx
      }}
    >
      <Link href={primary[0]} passHref>
        <Button
          as="a"
          sx={{
            fontSize: 2,
            border: '3px solid',
            borderColor: colors[0],
            bg: colors[0],
            mr: 3,
            mb: 2
          }}
        >
          {primary[1]} →
        </Button>
      </Link>
      <Link href={secondary[0]} passHref>
        <Button variant="outline" as="a" sx={{ color: colors[1], mb: 2 }}>
          {secondary[1]} →
        </Button>
      </Link>
    </Flex>
  )
}