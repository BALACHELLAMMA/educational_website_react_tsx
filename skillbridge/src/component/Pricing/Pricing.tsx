import { descriptionList } from '../Data/Description';

function Pricing() {
  return (
    <div>
     {descriptionList.filter(description=>{
      return(description.title==='pricing')
     }).map((description)=>{
        return(
          <section className="description_section container mt-5 mb-5 border-bottom">
          <div className="description_container row ">
            <h1 className="col-md-6 col-12">{description.heading}</h1>
            <p className="col-md-6 col-12">{description.content}</p>
          </div>
        </section>
        );
     })
     }
    </div>
  )
}

export default Pricing;
