import { useState } from 'react'

export default function CheckOut({ toggleSubmit }) {
  const [nameOnCard, changeName] = useState('')
  const [cardNumber, changeCardNumber] = useState('')
  const [expiration, changeExpiration] = useState('')
  const [cvv, changeCvv] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(cardType)
    const cardType = testCards(cardNumber)
    console.log(cardType ? cardType : 'No card found')
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

        <button className="checkOutButton">Submit</button>
        <button className="checkOutButton" onClick={() => toggleSubmit(false)}>
          Cancel
        </button>
      </form>
    </div>
  )
}

const visa = /^4[0-9]{12}(?:[0-9]{3})?$/
const amEx = /^3[47][0-9]{13}$/

const formatNumber = numbers => {
  let formatted = numbers.match(/.{1,4}/g)
  if (testCards(numbers) === 'AMEX') {
    console.log("it's amex")
    return `${numbers.substring(0, 4)} ${numbers.substring(4, 11)} ${numbers.substring(
      11,
      numbers.length,
    )}`
  } else if (formatted) {
    return formatted.join(' ')
  } else return ''
}

const testCards = value => {
  if (visa.test(value)) {
    return 'VISA'
  } else if (amEx.test(value)) {
    return 'AMEX'
  } else return null
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
