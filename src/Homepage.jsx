
import BlogList from './BlogList';
import useFetch from './useFetch';

const Homepage = () => {

   const {data:blogs , isPending, error}  = useFetch('http://localhost:8000/blogs');
  

 
    return (  
        <div className="Homepage">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
            {blogs && <BlogList blogs ={blogs} title ="All Blogs!!"/>}
            {/* {blogs && <BlogList blogs ={blogs.filter((blog)=>blog.author === 'Tara')} title ="Tara's Blogs!!" />} */}
          
        </div>
    );
}
 
export default Homepage;