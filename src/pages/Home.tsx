import { useRef } from 'react';
/* Components */
import Promote from '../components/Promote';
import Promotion from '../components/Promotion';
import ListBooks from '../components/List-books';


function Home() {
  const listBooksRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToBooks = (): void => {
    listBooksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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