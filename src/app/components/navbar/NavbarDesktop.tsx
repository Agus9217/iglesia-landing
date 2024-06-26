import { Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import { navItem } from './nav-item'

interface Props {
  display: string | undefined
}

export const NavbarDesktop = ({ display }: Props) => {
  return (
    <Stack
      as={'nav'}
      display={display !== 'none' ? 'flex' : 'none'}
    >
      <UnorderedList
        styleType={'none'}
        display={'flex'}
        gap={4}
      >
        {
          navItem.map(({ label }) => (
            <ListItem key={label}>
              <Link>
                {label}
              </Link>
            </ListItem>
          ))
        }
      </UnorderedList>
    </Stack>
  )
}
