import '../Styles/index.css';
import ReduxLogo from '../Assets/redux.svg';
import config from '../Config/index.json';
import alt from '../Config/altText.json';

const Header = config.header;
const ReduxLogoAlt = alt.index.reduxlogo;

function Index() {
    return (
        <>
        <div className='container'>
            <div className='header-container'>
                <header className='header'>{Header}</header>
            </div>
            <div className='logo-container'>
                <img className='redux-logo' src={ReduxLogo} alt={ReduxLogoAlt[0]} />
            </div>
        </div>
        </>
    )
}

export default Index;