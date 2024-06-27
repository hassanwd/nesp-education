import React from 'react'
import './studentLoan.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const StudentLoan = () => {

    return(
      <>
          <Navbar />

            <div className='container'>
                <h1 className='text-center fw-bolder mt-5' style={{color: "rgb(1,65,28)"}}>Student Loan</h1>
                <p className='text-center mt-5'>Student Interest free Loans is a bespoke finance offering for students seeking assistance in financing their education. We are committed to helping students achieve their goals, by providing the necessary finance options needed to pay for their tuition fees. Scholarship Council Canada is our official partner assisting you to complete your education.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education is first and only private education service provider offering interest free loans for students in Pakistan, and thus we take immense pride in helping students reach their full potential.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; Study Loans does one thing, and NESP Education do it well – student finance.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP student loans can either be for Matriculation, Intermediate, Vocational Professional Diplomas run by our Education Partners, or Undergraduate & Postgraduate courses run by any provider within Pakistan and abroad.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; Our payment plans are for those students who want to focus on the studies and leave the finance side to NESP Education.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; Our Cash Solution offering allows PhD followers to continue their research work without financial worries.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education Study loans aim to offer interest free loans for students looking to take the next step with their education.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education Student loans can help you fund your entire course or can be used for your personal while buying course work or other necessities at school, college or university choice is yours.
                </p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education student loans are based on progress only that means the funds are available as you progress through in your chosen studies.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education study loans are flexible way of paying your course fee or personal educational</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; Needs to fulfil. Easy terms and conditions with no hidden fee.</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; NESP Education offers you life time opportunity to choose where you want study, apply for a</p>
                <p><i class="fa-solid fa-square-check"></i>  &nbsp; study loan and upon approval NESP Education will handle the invoices.</p>
            </div>

          <Footer />
      </>
    )
}

export default StudentLoan
