import DocsContainer from '../components/docs/DocsContainer'

function TermsOfService() {

  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]

  return (
    <>
      <DocsContainer>

        <div className="docs-body">
          <h1> Terms of Service </h1>
          <p> Effective Date: {todayStr} </p>
          <p>Welcome to Nyxtrackers! By purchasing our products, you agree to the following terms and conditions. Please read them carefully.</p>


          <ol>
            <li>
              <h2>Business Information</h2>
              Nyxtrackers specializes in the sale of customized trackers designed for personal and professional use.<br />
            </li>

            <li>
              <h2>Products and Usage</h2>
              Our trackers are precision devices and must be handled with care. To ensure optimal performance and longevity:<br />
              <ul>
                <li>Avoid exposing the trackers to hard falls, physical damage, or water damage.</li>
                <li>Proper maintenance is the customer's responsibility.</li>
              </ul>
            </li>

            <li>
              <h2>Resale</h2>
              While resale of our products is not restricted, please note that resale voids any warranty coverage.<br />
            </li>

            <li>
              <h2>Payments and Cancellations</h2>
              <ul>
                <li>Payments must be completed in full at the time of purchase.</li>
                <li>Cancellations are permitted only before the product is shipped. Once the product is shipped, our standard refund policies, as outlined in the Refund Policy, will apply.</li>
              </ul>
            </li>

            <li>
              <h2>Shipping</h2>
              <ul>
                <li>Products are manufactured within 5-6 business days.</li>
                <li>Shipping is carried out using local national couriers and typically takes around 10 working days.</li>
                <li>Delivery timelines may vary depending on your location and any unforeseen shipping delays.</li>
              </ul>
            </li>

            <li>
              <h2>Warranty</h2>
              Nyxtrackers offers a full warranty for the first 4 months after purchase, as outlined in our Refund Policy. Warranty does not cover:<br />
              <ul>
                <li>User-inflicted damage, including hard falls, physical damage, or water damage.</li>
                <li>Products resold or purchased from third-party sellers.</li>
              </ul>
            </li>

            <li>
              <h2>Liability</h2>
              Nyxtrackers is not responsible for any damages or losses resulting from:<br />
              <ul>
                <li>Improper use or mishandling of the product.</li>
                <li>Third-party modifications, repairs, or resale.</li>
                <li>Incidental or consequential damages caused by the use of our products.</li>
              </ul>
            </li>

            <li>
              <h2>Privacy and Data Protection</h2>
              Nyxtrackers respects your privacy. Any personal data collected during the purchasing process will be used solely for order processing, shipping, and customer support. We will not share your data with third parties without your consent unless required by law. For more details, refer to our Privacy Policy.<br />
            </li>

            <li>
              <h2>Modifications to Terms</h2>
              Nyxtrackers reserves the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our products after any changes indicates your acceptance of the updated terms.<br />
            </li>
          </ol>

          <hr />

          <p>
            Thank you for choosing Nyxtrackers. If you have any questions or concerns, feel free to contact our support team.
          </p>
        </div>

      </DocsContainer>

    </>
  )
}

export default TermsOfService