// import React from 'react';
// import "./Booking.css";

// const Booking = () => {
//   return (
//     <div className="formbold-main-wrapper">
//       {/* Author: FormBold Team */}
//       {/* Learn More: https://formbold.com */}
//       <div className="formbold-form-wrapper">
//         <form action="https://formbold.com/s/FORM_ID" method="POST">
//           <div className="formbold-mb-5">
//             <label htmlFor="name" className="formbold-form-label"> Full Name </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Full Name"
//               className="formbold-form-input"
//             />
//           </div>
//           <div className="formbold-mb-5">
//             <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
//             <input
//               type="text"
//               name="phone"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="formbold-form-input"
//             />
//           </div>
//           <div className="formbold-mb-5">
//             <label htmlFor="email" className="formbold-form-label"> Email Address </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your email"
//               className="formbold-form-input"
//             />
//           </div>
//           <div className="flex flex-wrap formbold--mx-3">
//             <div className="w-full sm:w-half formbold-px-3">
//               <div className="formbold-mb-5 w-full">
//                 <label htmlFor="date" className="formbold-form-label"> Date </label>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   className="formbold-form-input"
//                 />
//               </div>
//             </div>
//             <div className="w-full sm:w-half formbold-px-3">
//               <div className="formbold-mb-5">
//                 <label htmlFor="time" className="formbold-form-label"> Time </label>
//                 <input
//                   type="time"
//                   name="time"
//                   id="time"
//                   className="formbold-form-input"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="formbold-mb-5 formbold-pt-3">
//             <label className="formbold-form-label formbold-form-label-2">
//               Address Details
//             </label>
//             <div className="flex flex-wrap formbold--mx-3">
//               <div className="w-full sm:w-half formbold-px-3">
//                 <div className="formbold-mb-5">
//                   <input
//                     type="text"
//                     name="area"
//                     id="area"
//                     placeholder="Enter area"
//                     className="formbold-form-input"
//                   />
//                 </div>
//               </div>
//               <div className="w-full sm:w-half formbold-px-3">
//                 <div className="formbold-mb-5">
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     placeholder="Enter city"
//                     className="formbold-form-input"
//                   />
//                 </div>
//               </div>
//               <div className="w-full sm:w-half formbold-px-3">
//                 <div className="formbold-mb-5">
//                   <input
//                     type="text"
//                     name="state"
//                     id="state"
//                     placeholder="Enter state"
//                     className="formbold-form-input"
//                   />
//                 </div>
//               </div>
//               <div className="w-full sm:w-half formbold-px-3">
//                 <div className="formbold-mb-5">
//                   <input
//                     type="text"
//                     name="post-code"
//                     id="post-code"
//                     placeholder="Post Code"
//                     className="formbold-form-input"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button type="submit" className="formbold-btn">Book Appointment</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;
// AppointmentForm.js

import React, { useState } from 'react';
import './Booking.css'; 

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">Appointment Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="notes">Additional Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <button type="submit">Book appointment</button>
      </form>
    </div>
  );
};

export default Booking;
