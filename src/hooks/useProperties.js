import { graphql,useStaticQuery } from 'gatsby';


const useProperties = () =>{
    const data = useStaticQuery(graphql`
    query{
        allStrapiProperties {
          nodes {
               name
               description
            id
            wc
            price
            parking
            rooms
            category{
              name
            }
            agents{
              name
              telephone
              email
            }
            img{
                sharp: childImageSharp{
                    fluid(maxWidth: 600, maxHeight: 400){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
          }
        }
      }
    `)
    
    return data.allStrapiProperties.nodes.map(property =>({
        name: property.name,
        description: property.description,
        img: property.img,
        id: property.id,
        wc: property.wc,
        rooms: property.rooms,
        parking: property.parking,
        agents: property.agents,
        price: property.price,
        category: property.category        
    }))
}

export default useProperties;