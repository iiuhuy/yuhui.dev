// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// const Repository = () => {
//   const data = useStaticQuery(
//     graphql`
//       query MyQuery {
//         githubViewer {
//           pinnedItems {
//             nodes {
//               description
//               homepageUrl
//               name
//               url
//             }
//           }
//         }
//       }
//     `
//   )
//   return (
//     <div>
//       {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
//         <div className="pf-grid-item" key={i}>
//           <a
//             className="pf-project"
//             href={repository.url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub URL
//           </a>
//           <h2>{repository.name}</h2>
//           <p>{repository.description}</p>
//           <p>{repository.homepageUrl}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default Repository
