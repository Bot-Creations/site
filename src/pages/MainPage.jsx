import Header from '../Components/Header/BaseHeader';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

export default function MainPage() {
    return (
        <div className="App abts-site">
            <Header />
            <Main>
                <h1 className='heading'>
                    <span className='text-blurple'>
                        All Bot Testing Server
                    </span> <span style={{ color: "var(--muted-color-alt)" }}>
                        (
                        </span>
                    <span className='text-blurple'>
                        ABTS
                        </span>
                    <span style={{color: "var(--muted-color-alt)"}}>
                        )
                    </span>
                </h1>
                <p>
                    A server for testing Discord bots. <a href='/#/about' className='App-link'>More information</a>
                </p>
            </Main>
            <Footer></Footer>
        </div>
    )
}