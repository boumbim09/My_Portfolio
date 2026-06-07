import React from 'react';

function About() {
  return (
    <div className="page" style={{ background: 'var(--bg2)' }}>
      <section id="about">
        <div className="section-container">
          <h2 className="section-title-center">About Me</h2>
          <p className="about-intro">
           ນັກສຶກສາ ສາຂາພັດທະນາເວບໄຊ ຊັ້ນປີທີ 3 ທີ່ມີຄວາມສົນໃຈໃນດ້ານ Quality Assurance (QA) ແລະ Software Testing ມີຄວາມຮູ້ ແລະ ປະສົບການໃນການຂຽນ Test Case, Bug Reporting ແລະ API Testing ໂດຍໃຊ້ Postman ແລະ Jira. ເປັນຄົນມີຄວາມລະອຽດຮອບຄອບ, ມັກການວິເຄາະບັນຫາ ແລະ ມີຄວາມມຸ່ງໝັ້ນໃນການພັດທະນາຄຸນນະພາບຊອບແວ ເພື່ອສົ່ງມອບຜະລິດຕະພັນທີ່ມີຄຸນນະພາບໃຫ້ແກ່ຜູ້ໃຊ້ງານ. ປັດຈຸບັນ ກຳລັງຊອກຫາໂອກາດຝຶກງານເພື່ອພັດທະນາທັກສະ ແລະ ປະສົບການໃນສາຍງານ QA Tester.
          </p>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">🔍</div>
              <div className="about-card-title">Test Case Writing</div>
              <p className="about-card-desc">ອອກແບບ Test Scenarios ໃຫ້ຄອບຄຸມທັງການທົດສອບ Functional, Edge Case ແລະ Boundary Condition.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🐛</div>
              <div className="about-card-title">Bug Reporting</div>
              <p className="about-card-desc">ຫາ document ແລະ track defects ພ້ອມກັບ steps ທີ່ຊັດເຈນ ໂດຍໃຊ້ Jira ເພື່ອໃຫ້ທີມເຮັດວຽກຮ່ວມກັນໄດ້ຢ່າງມີປະສິດທິພາບ.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">📮</div>
              <div className="about-card-title">API Testing</div>
              <p className="about-card-desc">ທົດສອບ REST APIs ດ້ວຍ Postman — ທັງການ validate responses, status codes, data integrity ແລະ edge cases</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
