import React from 'react'
import { ReceiptCardUI, ReceiptCardData, ReceiptCardName, ReceiptCardPrice, ReceiptCardSpan } from './ReceiptExtrasStyles'
import { formatPrice } from '../../utils/formatPrice'

const ReceiptCard = (product) => {
  return (
        <ReceiptCardUI>
                <ReceiptCardData>
                        <ReceiptCardName>{product.name}</ReceiptCardName>
                        <ReceiptCardPrice>{formatPrice(product.price)}</ReceiptCardPrice>
                        <ReceiptCardSpan>{product.xAdded} unidades</ReceiptCardSpan>
                </ReceiptCardData>
        </ReceiptCardUI>
  )
}

export default ReceiptCard