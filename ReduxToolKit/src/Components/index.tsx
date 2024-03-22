import '../Styles/index.css';
import config from '../Config/index.json'

const Header = config.header

function Index() {
    return (
        <>
        <div className='container'>
            <div className='header-container'>
                <header className='header'>{Header}</header>
            </div>
        </div>
        </>
    )
}

export default Index;