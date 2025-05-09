
import Head from "../components/head";

export async function getStaticProps() {
  const res = await fetch('https://api-chi-teal-89.vercel.app/api')
  const post = await res.json()
  

  return {
    props: { post },
  }
}


export default function Home({ post }) {
  return (
    <div>
      <div style={{'width':"100%" , 'height':'100%' , "overflow":"hidden"}}>
            <Head />
      </div>
    </div>
  );
}
