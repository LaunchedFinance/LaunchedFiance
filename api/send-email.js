import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { data } = req.body;

    // Format the application data into email content
    const emailContent = `
      <h2>New Vehicle Finance Application</h2>
      <h3>Personal Details</h3>
      <p><strong>Name:</strong> ${data.title ? data.title + ' ' : ''}${data.firstName} ${data.lastName}</p>
      <p><strong>Date of Birth:</strong> ${data.fDob || 'Not provided'}</p>
      <p><strong>Email:</strong> ${data.fEmail}</p>
      <p><strong>Mobile:</strong> ${data.fMobile}</p>
      <p><strong>Address:</strong> ${data.address || 'Not provided'}</p>
      <p><strong>Citizenship:</strong> ${data.citizen || 'Not provided'}</p>

      <h3>Employment & Income</h3>
      <p><strong>Employment Status:</strong> ${data.employ || 'Not provided'}</p>
      <p><strong>Employer:</strong> ${data.fEmployer || 'Not provided'}</p>
      <p><strong>Time in Role:</strong> ${data.roleTime || 'Not provided'}</p>
      <p><strong>Gross Annual Income:</strong> $${data.income ? data.income.toLocaleString() : 'Not provided'}</p>
      <p><strong>Monthly Expenses:</strong> $${data.expenses ? data.expenses.toLocaleString() : 'Not provided'}</p>

      <h3>Vehicle Details</h3>
      <p><strong>Vehicle Type:</strong> ${data.vehicleType || 'Not provided'}</p>
      <p><strong>Purchase Price:</strong> $${data.price ? data.price.toLocaleString() : 'Not provided'}</p>
      <p><strong>Deposit:</strong> $${data.deposit ? data.deposit.toLocaleString() : 'Not provided'}</p>
      <p><strong>Loan Term:</strong> ${data.loanTerm || 'Not provided'}</p>
      <p><strong>Repayment Frequency:</strong> ${data.repayFreq || 'Not provided'}</p>
      <p><strong>Buying From:</strong> ${data.buyFrom || 'Not provided'}</p>

      <h3>Household & Credit</h3>
      <p><strong>Residential Status:</strong> ${data.ownRent || 'Not provided'}</p>
      <p><strong>Time at Address:</strong> ${data.resideDur || 'Not provided'}</p>
      <p><strong>Relationship Status:</strong> ${data.relStatus || 'Not provided'}</p>
      <p><strong>Dependants:</strong> ${data.dependants || 'Not provided'}</p>
      <p><strong>Driver's Licence:</strong> ${data.fLicence || 'Not provided'}</p>
      <p><strong>Existing Loans:</strong> ${data.existLoans || 'Not provided'}</p>
      <p><strong>Credit Issues:</strong> ${data.creditIssues || 'Not provided'}</p>

      <h3>Add-ons</h3>
      <p><strong>Selected Add-ons:</strong> ${data.addons && data.addons.length > 0 ? data.addons.join(', ') : 'None'}</p>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: 'Launched Finance <noreply@launchedfinance.co.nz>', // Replace with your verified domain
      to: ['info@launchedfinance.co.nz'], // Replace with your email
      reply_to: data.fEmail,
      subject: 'New Vehicle Finance Application',
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ ok: false, error: 'Failed to send email' });
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
}