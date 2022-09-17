import React from "react";
import SectionTitle from "../Title";
import "./style.scss";

const ServiceArea = ({ className, title, subTitle, services }) => {
  return (
    <div className={className} id={className === "ourServiceArea" ? "zamereni" : "odmena"}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="serviceWrap">
                <div className="serviceIcon">
                  <i className={`fi ${service.icon}`}></i>
                </div>
                <div className="serviceContent">
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                </div>
              </div>
            </div>
          ))}
          {className !== "ourServiceArea" && (
            <p className="text">
              Případné spory mezi spotřebiteli (tj. osobami nejednajícími v rámci své podnikatelské činnosti nebo v
              rámci samostatného výkonu svého povolání) a advokáty je možno řešit v souladu s § 14 zákona č. 634/1992
              Sb., o ochraně spotřebitele ve znění dle zákona č. 378/2015 Sb. mimosoudně u orgánu pro mimosoudní řešení
              spotřebitelských sporů. Příslušným orgánem pro mimosoudní řešení spotřebitelských sporů pro oblast sporů
              mezi advokátem a spotřebitelem ze Smluv o poskytování právních služeb je Česká advokátní komora
              (http://www.cak.cz).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServiceArea;
