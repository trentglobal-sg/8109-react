import AlertMessage from "./AlertMessage"
import "./App.css"



// A component in React is reusable JSX
// To create the component, follow the rules
// 1. A component is function
// 2. The first alphabet is uppercase
// 3. It must return JSX
function Navbar() {
  return (<nav>
    <ul>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Our Products</li>
    </ul>
  </nav>)
}

function Footer() {
  return (<footer>
    (c) 2026
  </footer>)
}




export default function App() {
  return <>

    <Navbar />

    <AlertMessage msg="Hello World" color="red"/>
    <AlertMessage msg="Account balance lower than withdrawl amount" color="orange"/>
    <AlertMessage msg="Not found"/>


    <main>
      <h1 className="important">Important</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum ligula, imperdiet sit amet imperdiet quis, fermentum at ligula. Donec sed ante id risus lobortis maximus sit amet ut nisi. Vestibulum eu sapien eget ante condimentum auctor et non ex. Vestibulum a laoreet nisi, at mollis arcu. Phasellus elementum dolor quis molestie condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu laoreet turpis, eget ullamcorper lorem. Vestibulum feugiat eleifend erat, a egestas augue molestie ornare. Nulla mollis libero at tempus hendrerit. Duis et lacus ac massa accumsan iaculis eget et sem. Ut lobortis sed metus et venenatis. Etiam sollicitudin vulputate nisl vitae euismod. Sed aliquet viverra suscipit. In convallis lectus id pulvinar egestas.
      </p>
      <p>
        Vestibulum diam neque, volutpat at volutpat condimentum, consequat quis libero. Aenean imperdiet, magna vel vestibulum mollis, nulla mi varius diam, et maximus metus est sit amet sapien. Morbi et interdum mi. Morbi ullamcorper odio ac felis facilisis, eget varius enim venenatis. In vel purus suscipit, tincidunt nunc sed, tempus urna. Vivamus interdum nisl nec ipsum iaculis, laoreet convallis erat mattis. Quisque mi sapien, cursus sit amet laoreet vel, mattis ut sapien. Donec pretium diam non sem interdum, sed pretium mi feugiat. Fusce id elit rutrum, molestie massa nec, vehicula ante. Fusce ultricies nisl in turpis rhoncus scelerisque. Nullam tempor gravida urna, sed tristique urna tempor nec. Cras auctor semper bibendum.
      </p>
    </main>

    <Footer/>

  </>
}