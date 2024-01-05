import { DescriptionList } from '../Description/Description';

function Pricing() {
  return (
    <div>
     {DescriptionList.filter(description=>{
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

export default Pricing
      // <section class="description_section container mt-5 mb-5 border-bottom">
      //   <div class="description_container row ">
      //     <h1 class="col-md-6 col-12">Our Pricings</h1>
      //     <p class="col-md-6 col-12">Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
      //   </div>
      // </section>