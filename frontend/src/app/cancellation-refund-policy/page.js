import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className='relative mx-6 my-12 md:m-24'>
      <h2 className='text-3xl font-bold mb-6'>Cancellation &amp; Refund Policy</h2>
      <p><strong>Last Updated:</strong> 24/06/2025 </p>

      <h3>1. Cancellation Requests</h3>
      <p>
        All cancellation requests must be sent via email to <a href="mailto:support@youbuz.in">support@youbuz.in</a>
        {' '}or by calling <a href="tel:+YOURPHONE">[contact number]</a>. Please include your name, subscription type
        (daily/monthly/yearly), and reason for cancellation.
      </p>

      <h3>2. Effective Date &amp; Access</h3>
      <p>
        Cancellation takes effect immediately upon receipt. You will retain access until the end of your current paid
        period, and future charges will cease thereafter.
      </p>

      <h3>3. Refunds</h3>
      <ul>
        <li><strong>All sales are final:</strong> No refunds once a payment is made.</li>
        <li>No partial or pro‑rated refunds, except where required by law or if services aren’t delivered as promised.</li>
        <li>If we fail to deliver the agreed service, contact us within 7 days for review and possible remedy or refund.</li>
      </ul>

      <h3>4. Processing Time</h3>
      <p>
        Approved refunds, if any, are processed to the original payment method within 7–15 business days, depending on your bank.
      </p>

      <h3>5. Dispute Resolution</h3>
      <p>
        If a refund request is denied, we will clearly explain the reason. We encourage resolving any disagreements
        amicably before pursuing legal options.
      </p>

      <h3>6. Policy Updates</h3>
      <p>
        We may update this policy at any time. The revised version will be posted here with a new “Last Updated” date.
      </p>

      
    </div>
  );
};

export default CancellationRefundPolicy;
