import React, { useState } from "react";
import "./PricingSection.scss";
import {
  available_icon,
  unavailable_icon,
} from "../../../assets/resource/iconResource";
import { useLocation } from "react-router-dom";

function PricingSection() {
  const [monthlyYearly, setMonthlyYearly] = useState("monthly");
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <React.Fragment>
      <div className="container mt-5 mb-5">
        <section className={`pricing_description mb-5 ${currentPathname === '/pricing' ? 'd-flex justify-content-center' :'d-flex align-items-center justify-content-between'}`} >
          <div className={`pricing_description_content w-75 ${currentPathname === '/pricing'? 'd-none': 'd-block'}`}>
            <h1>Pricing</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div
            className="monthly_yearly_button bg-white rounded d-flex gap-1  mt-sm-2 p-2"
         
          >
            <button
              className={`monthly_Link border-0 ${monthlyYearly === 'monthly' ? 'active' : ''}`}
              onClick={() => setMonthlyYearly("monthly")}
            >
              <b>Monthly</b>
            </button>
            <button
              className={`yearly_Link border-0 ${monthlyYearly === 'yearly' ? 'active' : ''}`}
              onClick={() => setMonthlyYearly("yearly")}
            >
              <b>Yearly</b>
            </button>
          </div>
        </section>
        <div className="pricing_section row row-cols-1 row-cols-md-2 g-4 bg-white rounded p-4">
          <div className="col">
            <div className="card border-0 p-2 bg-light">
              <div className="card-body d-flex flex-column">
                <div className="plan_container bg-light rounded">
                  <h3 className="plan_type p-3 rounded text-center">
                    Free Plan
                  </h3>
                  <div className="text-center p-4">
                    <h2>
                      <span className="price fw-bold">$0</span>/
                      {monthlyYearly === "monthly" ? "month" : "year"}
                    </h2>
                  </div>
                  <div className="available_features_container bg-white border p-3 d-flex flex-column gap-2">
                    <h3 className="text-center fw-medium">
                      Available Features
                    </h3>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={available_icon} alt="available_icon" />
                      <p className="mt-2">Access to selected free courses.</p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={available_icon} alt="available_icon" />
                      <p className="mt-2">
                        Limited course materials and resources.
                      </p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={available_icon} alt="available_icon" />
                      <p className="mt-2">Basic community support.</p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={available_icon} alt="available_icon" />
                      <p className="mt-2">No certification upon completion.</p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={available_icon} alt="available_icon" />
                      <p className="mt-2">Ad-supported platform.</p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={unavailable_icon} alt="unavailable_icon" />
                      <p className="mt-2">
                        Access to exclusive Pro Plan community forums.
                      </p>
                    </div>
                    <div className="d-flex gap-3 border rounded align-content-center p-2">
                      <img src={unavailable_icon} alt="available_icon" />
                      <p className="mt-2">
                        Early access to new courses and updates.
                      </p>
                    </div>
                  </div>
                  <button className="get_started_button border-0 w-100 fw-bold text-white">
                    Get it Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 p-2 bg-light">
              <div className="card-body d-flex flex-column">
                <div className="plan_container bg-light rounded">
                  <h3 className="plan_type p-3 rounded text-center">
                    Pro Plan
                  </h3>
                  <div className="text-center p-4">
                    <h2>
                      <span className="price fw-bold">
                        {monthlyYearly === "monthly" ? "$79" : "$150"}
                      </span>
                      /{monthlyYearly === "monthly" ? "month" : "year"}
                    </h2>
                  </div>
                  <div>
                    <div className="available_features_container bg-white border p-3 d-flex flex-column gap-2">
                      <h3 className="text-center fw-medium">
                        Available Features
                      </h3>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">Unlimited access to all courses.</p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">
                          Unlimited course materials and resources.
                        </p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">
                          Priority support from instructors.
                        </p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">Course completion certificates.</p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">Ad-free platform.</p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="unavailable_icon" />
                        <p className="mt-2">
                          Access to exclusive Pro Plan community forums.
                        </p>
                      </div>
                      <div className="d-flex gap-3 border rounded align-content-center p-2">
                        <img src={available_icon} alt="available_icon" />
                        <p className="mt-2">
                          Early access to new courses and updates.
                        </p>
                      </div>
                    </div>
                    <button className="get_started_button border-0 w-100 fw-bold text-white">
                      Get it Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PricingSection;
