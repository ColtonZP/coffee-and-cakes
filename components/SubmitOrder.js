import { useState, useEffect } from 'react'
import Router from 'next/router'

import loading from '../public/loading.svg'

export default function CheckOut({ toggleSubmit, clearBag, store }) {
  const [nameOnCard, changeName] = useState('')
  const [cardNumber, changeCardNumber] = useState('')
  const [expiration, changeExpiration] = useState('')
  const [cvv, changeCvv] = useState('')
  const [error, changeError] = useState(null)
  const [submitting, toggleSubmitting] = useState(false)

  useEffect(() => {
    submitting &&
      setTimeout(() => {
        clearBag()
        Router.push('/order')
      }, 5000)
  })

  const handleSubmit = e => {
    e.preventDefault()
    const cardType = testCards(cardNumber)
    if (store.name === null || store.name === undefined) {
      changeError('Store')
    } else if (!nameOnCard.match(/\s[a-zA-Z]/g)) {
      changeError('Name')
    } else if (!cardType) {
      changeError('Card')
    } else if (expiration.length < 4) {
      changeError('Expiration')
    } else if (
      (cardType !== 'AMEX' && cvv.length !== 3) ||
      (cardType === 'AMEX' && cvv.length !== 4)
    ) {
      changeError('CVV')
    } else {
      changeError(null)
      toggleSubmitting(true)
    }
  }

  return (
    <div className="submit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name On Card:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          minLength="3"
          placeholder="John Smith"
          value={nameOnCard}
          onChange={e => changeName(e.target.value)}
        />

        <div className="card">
          <div className="cardNumber">
            <label htmlFor="card">Card Number</label>
            <input
              type="text"
              name="card"
              maxLength="19"
              placeholder="1234 1234 1234 1234"
              value={formatNumber(cardNumber)}
              onChange={e => changeCardNumber(trim(e.target.value))}
            />
            {testCards(cardNumber) && <span className="cardType">{testCards(cardNumber)}</span>}
          </div>

          <div className="info">
            <div className="expiration">
              <label htmlFor="expirationMonth">
                Expiration <span className="format"></span>
              </label>
              <input
                type="text"
                name="expirationMonth"
                placeholder="MM / YY"
                maxLength="7"
                value={formatExpiration(expiration)}
                onChange={e => changeExpiration(handleDateChange(e.target.value))}
              />
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                maxLength="4"
                value={cvv}
                onChange={e => changeCvv(trim(e.target.value))}
              />
            </div>
          </div>
        </div>

        {error && <span className="error">** Invalid {error} **</span>}
        <button className="checkOutButton">Submit</button>
        <button className="checkOutButton" onClick={() => toggleSubmit(false)}>
          Cancel
        </button>
        <span className="disclaimer">** FOR DEMO ONLY **</span>
      </form>
      {submitting && (
        <div className="loadingDiv">
          <span>Submitting</span>
          <img className="loadingImg" src={loading} alt="loading" />
        </div>
      )}
    </div>
  )
}

const VISA = { name: 'VISA', value: /^4[0-9]{12}(?:[0-9]{3})?$/ }
const AMEX = { name: 'AMEX', value: /^3[47][0-9]{13}$/ }
const MASTER = {
  name: 'MASTER',
  value: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
}
const DISCOVER = { name: 'DISCOVER', value: /^6(?:011|5[0-9]{2})[0-9]{12}$/ }

const cards = [VISA, AMEX, MASTER, DISCOVER]

const formatNumber = numbers => {
  let formatted = numbers.match(/.{1,4}/g)
  if (testCards(numbers) === 'AMEX') {
    return `${numbers.substring(0, 4)} ${numbers.substring(4, 11)} ${numbers.substring(
      11,
      numbers.length,
    )}`
  } else if (formatted) {
    return formatted.join(' ')
  } else return ''
}

const testCards = value => {
  let type = null
  cards.forEach(card => {
    if (card.value.test(value)) {
      type = card.name
    }
  })

  return type
}

const handleDateChange = date => {
  const trimmedDate = trim(date)
  if (trimmedDate.substring(0, 2) > 12) {
    return `1`
  } else if (trimmedDate.substring(0, 1) > 1 && trimmedDate.substring(0, 1) < 10) {
    return `0${trimmedDate}`
  } else if (date.substring(1, 2).match(/[^0-9]/g) && date.substring(0, 1) === '1') {
    return `01`
  }
  return trimmedDate
}

const trim = numbers => {
  return numbers.replace(/[^0-9]/g, '')
}

const formatExpiration = date => {
  let formatted = date.match(/.{1,2}/g)

  if (formatted) {
    return formatted.join(' / ')
  } else return date
}
