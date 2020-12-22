import Header from '../Components/Header/BaseHeader';
import Main from '../Components/Main'
import Footer from '../Components/Footer'


export default function NotFound() {
    return (
        <div className='App abts-site'>
            <Header />
            <Main>
                <h1 className='heading'>
                    404
                </h1>
                <p>
                    This page was not found. You may be a little lost. Would you like to <a href='/'>travel back home</a>?
                </p>
            </Main>
            <Footer></Footer>
        </div>
    )
};