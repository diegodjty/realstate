import {useStaticQuery,graphql} from 'gatsby';

const useIndex = () => {
   const result = useStaticQuery(graphql`
   query{
    allStrapiPages(filter: {name: {eq: "Home"}}){
      nodes{
        id
        name
        content
        img{
          sharp: childImageSharp{
              fluid( maxWidth: 1200){
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
    }
  }
  
   `)

   return result.allStrapiPages.nodes.map( i => ({
       name: i.name,
       content: i.content,
       img: i.img
   }))
};

export default useIndex;