'use client'

import { Box } from '@chakra-ui/react'
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import Link from 'next/link'

interface Props {
  text?: string,
  href: string,
  colorScheme?: string
  variant?: string
  whileHover?: TargetAndTransition | VariantLabels | undefined
  whileTap?: TargetAndTransition | VariantLabels | undefined
  color?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  display?: string | undefined
  fontSize?: string | number
}

const MotionLink = motion(Box)

export const LinkButton = ({ text, href, whileHover, whileTap, color }: Props) => {
  return (
    <MotionLink
      as={Link}
      href={href}
      whileHover={whileHover}
      whileTap={whileTap}
      color={color}
    >
      {text}
    </MotionLink>
  )
}
