import React, { Component } from 'react'

class Apropos extends Component {
    render () {
        return (
           <section className="apropos">
               <div className="profil">
               </div>

               <div className="contentpropos">
                   <h5 className="job">Ancien chef d'entreprise dans le secteur du batiment, je suis actuellement en reconversion professionnelle pour devenir développeur web en Javascript (Node.js /React.js) à la Wild Code School.
                       Je suis à la recherche d’un stage enrichissant dans le développement web afin d’accroître mes connaissances et mon expérience de ce métier captivant.</h5>
                   <h5 className="p-3 mb-2 bg-secondary text-white shadow p-3 mb-5  rounded">
                     Programmer m'a appris que tout était possible, Je peux faire ce qui me plait en utilisant seulement mon esprit
                   </h5>
               </div>

           </section>
        )
    }
}

export default Apropos