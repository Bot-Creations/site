import Header from '../Components/Header/BaseHeader';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

export default function AboutPage() {
    return (
        <div className="App abts-site">
            <Header />
            <Main>
                <h1 className='heading'>
                    About
                </h1>
                <p>
                    <b>All Bot Testing Server</b> (<b>ABTS</b>) is a server founded and owned by <b>wayvshockGD#1500</b> at <b>6/14/2020</b>.<br />
                    It is a Discord server to test bots, and the server is open to everyone─which is why it has the <b>All</b> in the name.
                </p>
            </Main>
            <Footer></Footer>
        </div>
    )
};