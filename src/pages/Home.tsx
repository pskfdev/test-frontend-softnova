import React from 'react'
/* Components */
import Promote from '../components/Promote';
import Promotion from '../components/Promotion';
import ListBooks from '../components/List-books';

type Props = {}

function Home({}: Props) {
  return (
    <>
      <Promote />
      <Promotion />
      <ListBooks />
    </>
  )
}

export default Home;