import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Receipt() {
  const [licenseInfo, setLicenseInfo] = useState({
    request_name: "คำขอรับใบอนุญาตนำคนต่างด้าวเข้ามาทำงานกับนายจ้างในประเทศ",
    company_name: "บริษัท ทีซีเอ็ม มหาชน จำกัด",
    address: "ศาลากลางจังหวัดนนทบุรี ชั้น 1 ถนนรัตนาธิเบศร์ บางกระสอ เมืองนนทบุรี นนทบุรี 11000",
    license_meneger: "นายกระปุกชัย ชนะศพ",
    payment_date: "29/01/2556 14.30",
  });
  const getReceiptInfo = () => {
    
  };
  return (
    <div className="container py-3">
      <div className="card">
        <div className="card-header">รายการขำขอ</div>
        <div className="card-body">
          <h5 className="card-title">{licenseInfo.request_name}</h5>
          <p className="fw-bold">{licenseInfo.company_name}</p>

          <span className="text-black-50">สถานที่ตั้ง</span>
          <p className="fw-bold">{licenseInfo.address}</p>

          <span className="text-black-50">ผู้จัดการหรือผู้แทนของนิติบุคคลผู้รับอนุญาต</span>
          <p className="fw-bold">{licenseInfo.license_meneger}</p>
          <p>ชำระค่าธรรมเนียมแล้ว วันที่ {licenseInfo.payment_date}</p>
        </div>
      </div>

      <div className="row mt-3">
        <img
          src="https://img.freepik.com/free-vector/modern-flat-payment-receipt_23-2147911082.jpg?t=st=1677725917~exp=1677726517~hmac=b5359c78cbd582b91ba3c3c9b04dc61822bfac061f8c367d51e5a6b1eae73c89"
          className="img img-fluid"
          alt=""
        />
      </div>
    </div>
  );
}
