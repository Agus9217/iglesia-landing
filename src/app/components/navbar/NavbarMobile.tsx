import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5"
import { navItem } from './nav-item'

interface Props {
  display: string | undefined
  change: number | undefined
}

export const NavbarMobile = ({ display, change }: Props) => {

  return (
    <Box
      display={display === 'none' ? 'flex' : 'none'}
    >
      <Menu
        autoSelect={false}
        isLazy
      >
        <MenuButton
          as={IconButton}
          icon={<IoMenu color={(change || 0) >= 60 ? 'white' : ''} />}
          variant={'outline'}
          aria-label='Options'
          _active={{
            style: 'none'
          }}
          _hover={{
            style: 'none'
          }}
        />
        <MenuList>
          {
            navItem.map(({ label }) => (
              <MenuItem
                key={label}
                color={'black'}
              >
                {label}
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  )
}

