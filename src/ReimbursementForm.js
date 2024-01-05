import React, { useState } from 'react';
import './ReimbursementForm.css'
const ReimbursementForm = ({ onLogout, userRole }) => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    paymentType: '',
    outOfPocket: false,
    materialTransportation: '',
    otherReason: '',
    raisedBy: '',
    remarks: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Invalid amount';
    }

    if (!formData.paymentType) {
      newErrors.paymentType = 'Payment type is required';
    }

    if (formData.outOfPocket) {
      if (!formData.materialTransportation && !formData.otherReason) {
        newErrors.outOfPocket = 'Please provide Material Transportation or Other reason';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Perform form submission logic
      alert('Reimbursement submitted successfully!');
      // Reset the form after submission
      setFormData({
        date: '',
        amount: '',
        paymentType: '',
        outOfPocket: false,
        materialTransportation: '',
        otherReason: '',
        raisedBy: '',
        remarks: '',
      });
    }
  };
  console.log('User Role:', userRole); // Add this line for debugging
  return (
    <div>
      <h2>Reimbursement Request Form</h2>


      {userRole === 'employee' ? (
        <form>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
          </div>

          <div>
            <label>Amount:</label>
            <input
              type="text"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            {errors.amount && <span style={{ color: 'red' }}>{errors.amount}</span>}
          </div>

          <div>
            <label>Payment Type:</label>
            <select
              value={formData.paymentType}
              onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })}
            >
              <option value="">Select Payment Type</option>
              <option value="cash">Cash</option>
              <option value="credit">Credit Card</option>
              {/* Add more payment types as needed */}
            </select>
            {errors.paymentType && <span style={{ color: 'red' }}>{errors.paymentType}</span>}
          </div>

          <div>
            <label>Out of Pocket Expense:</label>
            <input
              type="checkbox"
              checked={formData.outOfPocket}
              onChange={(e) => setFormData({ ...formData, outOfPocket: e.target.checked })}
            />
          </div>

          {formData.outOfPocket && (
            <>
              <div>
                <label>Material Transportation:</label>
                <input
                  type="text"
                  value={formData.materialTransportation}
                  onChange={(e) =>
                    setFormData({ ...formData, materialTransportation: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Other Reason:</label>
                <input
                  type="text"
                  value={formData.otherReason}
                  onChange={(e) => setFormData({ ...formData, otherReason: e.target.value })}
                />
              </div>
            </>
          )}

          <div>
            <label>Raised By:</label>
            <select
              value={formData.raisedBy}
              onChange={(e) => setFormData({ ...formData, raisedBy: e.target.value })}
            >
              <option value="">Select Employee</option>
              <option value="employee1">Employee 1</option>
              <option value="employee2">Employee 2</option>
              {/* Add more employees as needed */}
            </select>
          </div>

          <div>
            <label>Remarks:</label>
            <textarea
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
            />
          </div>

          {errors.outOfPocket && (
            <span style={{ color: 'red' }}>{errors.outOfPocket}</span>
          )}

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
         
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </form>
      ) : (
        <div>
          <p>Access denied. Only employees can fill out the reimbursement form.</p>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ReimbursementForm;
