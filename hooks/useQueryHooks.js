import { useEffect, useState } from 'react'

export function useQueryChange(callback, query) {
  const [prev, setPrev] = useState(null)
  useEffect(() => {
    if (!!query && !!prev)
      callback()
    setPrev(query)
  }, [query])
}

export function useQueryOn(callback, query) {
  const [prev, setPrev] = useState(null)
  useEffect(() => {
    if (!!query && !prev)
      callback()
    setPrev(query)
  }, [query])
}

export function useQueryOff(callback, query) {
  const [prev, setPrev] = useState(null)
  useEffect(() => {
    if (!query && !!prev)
      callback()
    setPrev(query)
  }, [query])
}
