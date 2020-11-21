import { useState, createRef } from 'react'

export default function CheckOut({ toggleSubmit }) {
  const [firstName, changeFistName] = useState('')
  const [lastName, changeLastName] = useState('')
  const [cardNumber, changeCardNumber] = useState('')
  const [expiration, changeExpiration] = useState('')
  const [cvv, changeCvv] = useState('')

  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/
  const amEx = /^3[47][0-9]{13}$/

  const formatNumber = numbers => {
    let formatted = numbers.match(/.{1,4}/g)
    if (formatted) {
      return formatted.join(' ')
    } else return ''
  }

  const formatExpiration = numbers => {
    let formatted = numbers.match(/.{1,2}/g)
    if (formatted) {
      return formatted.join(' / ')
    } else return ''
  }

  const trim = numbers => {
    return numbers.replace(/[^0-9]/g, '')
  }

  const testCards = value => {
    if (visa.test(value)) {
      return 'visa'
    } else if (amEx.test(value)) {
      return 'amex'
    } else return false
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(cardType)
    const cardType = testCards(cardNumber)
    console.log(cardType ? cardType : 'No card found')
  }

  return (
    <div className="submit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          minLength="3"
          placeholder="John"
          value={firstName}
          onChange={e => changeFistName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          minLength="3"
          placeholder="Smith"
          value={lastName}
          onChange={e => changeLastName(e.target.value)}
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
                onChange={e => changeExpiration(trim(e.target.value))}
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
