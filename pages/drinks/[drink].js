import { RichText } from 'prismic-reactjs'

import { Client } from '../../lib/prismic-config'

const Drink = ({ item }) => {
  return (
    <>
      <h1>drink: {RichText.asText(item.data.name)}</h1>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const item = await Client().getByUID('coffee', query.drink)

  return { props: { item } }
}

export default Drink
