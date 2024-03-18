import Header from '../Header.js'
import Main from '../Main.js'
import CallToAction from './CallToAction.js'
import CustomerSays from './CustomersSays.js'
import Specials from './Specials.js'
import Chicago from './Chicago.js'
export default function() {
    return(
        <div className='homepage'>
            <Header></Header>
                <CallToAction />
                <Specials />
                <CustomerSays />
               <Chicago/>
        </div>
    )
}