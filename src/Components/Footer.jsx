import Logo from '../Assets/Logos/Components/Logo-A';

export default function Footer() {
    return (
        <footer className='pt-4 my-md-5 pt-md-5 Footer-class'>
            {/*<div style={{color: `var(--not-quite-black)`}}>
                <svg style={{display: 'block'}} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path></svg>
    </div>*/}
            <div className='row m-0'>
                <div className='col-6 col-md'>
                    <h5>
                        Company
                    </h5>
                    <ul className='list-unstyled text-small'>
                        <li>
                            <a className='text-muted' href='/#/join' target="_blank">Discord</a>
                        </li>
                        <li>
                            <a className='text-muted' href='/#/about'>About</a>
                        </li>
                    </ul>
                </div>
                <div className='col-6 col-md'>
                    <h5>
                        Policies
                    </h5>
                    <ul className='list-unstyled text-small'>
                        <li>
                            <a className='text-muted' href='#'>Bot Rules</a>
                        </li>
                        <li>
                            <a className='text-muted' href='#'>Server (User) rules</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row mx-5'>
                <div className='col-12 col-md'>
                    <div className='mx-auto' style={{ height: 85 + "px" }} >
                        <div className='Footer-separator'></div>
                        <Logo style={{ bottom: -16 + "px", position: 'relative', left: -40 + "%" }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};