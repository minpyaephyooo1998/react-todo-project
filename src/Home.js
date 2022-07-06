import Feed from './Feed';
import Loading from './Loading';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
    const { searchResult, fetchError, isLoading } = useContext(DataContext)
    return (
        <main className="Home">
            {isLoading && <Loading />}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className="statusMsg">No posts to display.</p>)}
            {/* {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)} */}

        </main>
    )
}

export default Home