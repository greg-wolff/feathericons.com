import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { Absolute, Relative } from 'rebass'
import Flex from './Flex'
import { colors } from '../theme'
import Icon from './Icon'
import Input from './Input'

const propTypes = {
  value: string,
  placeholder: string,
  label: string,
  onChange: func,
}

const defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  onChange: () => {},
}

const Fill = styled(Flex)`
  width: 100%;
  height: 100%;
`

function SearchInput({ value, placeholder, label, onChange, ...props }) {
  return (
    <Relative {...props}>
      <Absolute top bottom left>
        <Fill align="center" px={4}>
          <Icon name="search" color={colors.gray6} />
        </Fill>
      </Absolute>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="search"
        aria-label={label}
        py={4}
        pr={4}
        pl="56px"
      />
    </Relative>
  )
}

SearchInput.propTypes = propTypes
SearchInput.defaultProps = defaultProps

export default SearchInput
