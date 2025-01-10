import DocsContainer from '../components/docs/DocsContainer'

function RefoundPolicy() {

  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]

  return (
    <>
      <DocsContainer>

        <div className="docs-body">
          <h1>Refund Policy</h1>

          <h2>Eligibility</h2>
          <p>
            If you receive a defective or damaged product, you may be eligible for a full refund or repair at no cost to you, subject to the following terms and conditions:
          </p>

          <h3>Return Shipping</h3>
          <ul>
            <li>Customers are responsible for all return shipping expenses.</li>
            <li>The initial shipping cost is non-refundable: $40 for international shipping or $30 for domestic shipping.</li>
          </ul>

          <h3>Refund Window</h3>
          <ul>
            <li>Refunds or repairs for malfunctioning products will be considered within 12 days of receipt.</li>
            <li><strong>Note:</strong> These products are customized and therefore not subject to standard 14-day return policies. The 12-day window applies to ensure clarity and prevent confusion.</li>
          </ul>

          <h3>User-Inflicted Damage</h3>
          <p>Products damaged due to user mishandling or misuse are not eligible for a refund.</p>

          <h3>Proof of Purchase</h3>
          <p>A valid receipt or order confirmation must be provided to process any refund, repair, or warranty request.</p>

          <h3>Inspection Period</h3>
          <p>
            Returned products will be inspected upon receipt. Refunds or replacements will only be issued if the product is verified to meet the eligibility criteria.
          </p>

          <h3>Return Timeframe</h3>
          <p>Products must be shipped back within 5 days of the refund request.</p>

          <h3>Original Packaging</h3>
          <p>Products must be returned in their original packaging.</p>

          <h3>Complete Return</h3>
          <p>All components of the product must be returned. Incomplete returns or missing parts will be deemed ineligible for a refund.</p>

          <h3>Exchanges</h3>
          <p>
            Exchanges are allowed only if the replacement product is in stock. If not, a refund or repair will be offered.
          </p>

          <p>
            Please ensure adherence to these terms and conditions for a smooth and efficient refund or repair process.
          </p>

          <h2>Warranty</h2>

          <h3>First 4 Months:</h3>
          <ul>
            <li>Full warranty for replacements at no extra cost, covering up to 2 replacement parts for malfunctioning items.</li>
          </ul>

          <h3>4+ Months:</h3>
          <p>No warranty available. A full replacement must be purchased.</p>

          <h2>Second-Hand Products</h2>
          <p>
            Products purchased from third-party sellers or previous customers are not eligible for any warranty.
          </p>
        </div>

      </DocsContainer>

    </>
  )
}

export default RefoundPolicy