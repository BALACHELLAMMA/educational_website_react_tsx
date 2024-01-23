import FAQSection from "../../component/CommonFunctionalities/FAQSection/FAQSection";
import PricingSection from "../../component/Pricing/PricingSection";
import { descriptionList } from "../../component/Data/Description";
import './Pricing.scss'

function PricingPage() {
  return (
    <div>
      {descriptionList
        .filter((description) => {
          return description.title === "pricing";
        })
        .map((description) => {
          return (
            <section className="description_section container mt-5 mb-5 border-bottom">
              <div className="description_container row ">
                <h1 className="col-md-6 col-12">{description.heading}</h1>
                <p className="col-md-6 col-12">{description.content}</p>
              </div>
            </section>
          );
        })}
      <PricingSection />
      <FAQSection />
    </div>
  );
}

export default PricingPage;
