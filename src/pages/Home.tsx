import { useRef } from 'react';
/* Components */
import Promote from '../components/Promote';
import Promotion from '../components/Promotion';
import ListBooks from '../components/List-books';

type Props = {}

function Home({}: Props) {
  const listBooksRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToBooks = () => {
    listBooksRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <Promote handleScroll={handleScrollToBooks} />
      <Promotion />
      <ListBooks ref={listBooksRef} />
    </>
  )
}

export default Home;