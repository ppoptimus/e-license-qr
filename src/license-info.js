import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LicenseInfo() {
  useEffect(() => {}, []);

  const [licenseInfo, setLicenseInfo] = useState({
    name: "สจจ.นนทบุรี",
    address: "ศาลากลางจังหวัดนนทบุรี ชั้น 1 ถนนรัตนาธิเบศร์ บางกระสอ เมืองนนทบุรี นนทบุรี 11000",
    telno: "0-2580-9276",
    license_meneger: "นายกระปุกชัย ชนะศพ",
    location: "https://goo.gl/maps/MZfed8FEGuYKRRfX9",
  });
  const getLicenseInfo = () => {
    
  };
  return (
    <div className="container mt-4">
      <h2>{licenseInfo.name}</h2>
      <p>{licenseInfo.address}</p>
      <p>โทรศัพท์ {licenseInfo.telno}</p>
      <p>ผู้จัดการใบอนุญาต {licenseInfo.license_meneger}</p>
      <p>
        <span>ตำแหน่งที่ตั้ง </span>
        <a href={licenseInfo.location}> คลิก</a>
      </p>
      <div className="row">
        <img
          src="https://img.freepik.com/free-vector/engraving-hand-drawn-ornamental-certificate_23-2148985846.jpg?t=st=1677644319~exp=1677644919~hmac=97a85cdfacaa2b1928f54af9f77c13c21e3a19c68e2aa72d23e583d418c3e0b9"
          className="img img-fluid"
          alt=""
        />
      </div>
    </div>
  );
}
