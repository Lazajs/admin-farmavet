'use client'

import { useState } from 'react'

interface Props {
  styles: string
  code: string
  image?: string
}

const ProductImage = (props: Props) => {
  const { styles } = props
  const [src, setSrc] = useState(
    `https://esperanzadistri.com.ar/medicamentos/uploads/${props.code}.jpg`
  )
  const [fallbackIndex, setFallbackIndex] = useState(0)

  const IMAGE_FALLBACKS = [
    `https://esperanzadistri.com.ar/instrumental/uploads/${props.code}.jpg`,
    `https://esperanzadistri.com.ar/balanceados/uploads/${props.code}.jpg`,
    '/placeholder-article.svg'
  ]

  if (props.image) IMAGE_FALLBACKS.unshift(props.image)

  const onError = () => {
    if (fallbackIndex >= IMAGE_FALLBACKS.length) {
      return
    }
    setSrc(IMAGE_FALLBACKS[fallbackIndex])
    setFallbackIndex(prevIndex => prevIndex + 1)
  }

  return (
    <img
      className={styles}
      src={src}
      onError={onError}
      width={200}
      height={200}
      alt="Farmavet placeholder"
    />
  )
}

export default ProductImage
