import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5"
import { navItem } from './nav-item'

interface Props {
  display: string | undefined
}

export const NavbarMobile = ({ display }: Props) => {


  return (
    <Box
      display={display === 'none' ? 'flex' : 'none'}
    >
      <Menu
        autoSelect={false}
      >
        <MenuButton
          as={IconButton}
          icon={<IoMenu />}
          variant={'outline'}
        />
        <MenuList>
          {
            navItem.map(({ label }) => (
              <MenuItem key={label} >
                {label}
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  )
}

