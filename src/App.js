import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body'
import Multiplepropes from './component/Multipleprops'
import Login from './component/login';
import Blog from './component/Blog/Blog';
import Plan from './component/Plan/Plan';
import Shoe from './component/Shoe/Shoe';
import Portfollio from './component/Portfollio/Portfollio';
import Garage from './component/Logical';




function App() {
  // const blogimg = 'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'
  return (
    <>
    {/* <Blog name='Bikram Roy' date='01' month='feb' title='every things is MOHOMAYA'
    authorimage='https://randomuser.me/api/portraits/men/95.jpg'
    blogimg={blogimg}
    dsc='twinkle twinkle little star how.....'/>  
    <Plan /> */}
    {/* <Shoe /> */}
    {/* <Portfollio /> */}
    <Garage cars={["Alto"]}/>
    </>
  );
}

export default App;
