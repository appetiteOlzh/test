import { headers } from "next/headers";
import Link from "next/link";

export default function PrivacyPolicy() {
  const headersList = headers();
  const host = headersList.get("host");

  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl">PRIVACY POLICY</h1>
        <br />
        <br />
        <p>
          <em>Updated at April 01, 2025</em>
        </p>
        <br />
        <br />
        <br />
        <section>
          <h2 className="mb-4 text-2xl">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            This Privacy Notice for MonClips inc. (<b>&quot;we,&quot;</b>{" "}
            <b>&quot;us,&quot;</b> or <b>&quot;our&quot;</b>), describes how and
            why we might access, collect, store, use, and/or share (
            <b>&quot;process&quot;</b>) your personal information when you use
            our services (<b>&quot;Services&quot;</b>), including when you:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              Visit our website at{" "}
              <a
                href="https://monclips.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://monclips.com
              </a>
              , or any website of ours that links to this Privacy Notice
            </li>
            <li>
              Download and use our mobile application (MonClips inc.), or any
              other application of ours that links to this Privacy Notice
            </li>
            <li>
              <b>
                Use MonClips Gallery. MonClips Gallery is a cloud-based photo
                gallery that allows users to upload, organize, and share photos
                in collaborative folders.
              </b>
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <br />
          <p>
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for
            making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not
            use our Services. If you still have any questions or concerns,
            please contact us at support@monclips.com.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2 className="mb-4 text-2xl">SUMMARY OF KEY POINTS</h2>
          <p>
            <i>
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{" "}
              <Link href="#toc" style={{ color: "#245dc1" }}>
                table of contents
              </Link>{" "}
              below to find the section you are looking for.
            </i>
          </p>
          <br />
          <p>
            <b>What personal information do we process?</b> When you visit, use,
            or navigate our Services, we may process personal information
            depending on how you interact with us and the Services, the choices
            you make, and the products and features you use. Learn more about{" "}
            <Link href="#personalinfo" style={{ color: "#245dc1" }}>
              personal information you disclose to us
            </Link>
            .
          </p>
          <br />
          <p>
            <b>Do we collect any information from third parties?</b> We do not
            collect any information from third parties.
          </p>
          <br />
          <p>
            <b>How do we process your information?</b> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Learn more about{" "}
            <Link href="#infouse" style={{ color: "#245dc1" }}>
              how we process your information
            </Link>
            .
          </p>
          <br />
          <p>
            <b>
              In what situations and with which types of parties do we share
              personal information?
            </b>{" "}
            We may share information in specific situations and with specific
            categories of third parties. Learn more about{" "}
            <Link href="#whoshare" style={{ color: "#245dc1" }}>
              when and with whom we share your personal information
            </Link>
            .
          </p>
          <br />
          <p>
            <b>How do we keep your information safe?</b> We have adequate
            organizational and technical processes and procedures in place to
            protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Learn more about{" "}
            <Link href="#infosafe" style={{ color: "#245dc1" }}>
              how we keep your information safe
            </Link>
            .
          </p>
          <br />
          <p>
            <b>What are your rights?</b> Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information. Learn more about{" "}
            <Link href="#privacyrights" style={{ color: "#245dc1" }}>
              your privacy rights
            </Link>
            .
          </p>
          <br />
          <p>
            <b>How do you exercise your rights?</b> The easiest way to exercise
            your rights is by visiting{" "}
            <a
              href="https://monclips.com/?get=support"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#245dc1" }}
            >
              https://monclips.com/?get=support
            </a>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>
          <br />
          <p>
            Want to learn more about what we do with any information we collect?{" "}
            <Link href="#toc" style={{ color: "#245dc1" }}>
              Review the Privacy Notice in full
            </Link>
            .
          </p>
        </section>
        <br />
        <br />
        <section id="toc">
          <h2 className="mb-4 text-2xl">TABLE OF CONTENTS</h2>
          <ol className="list-decimal list-inside">
            <li>
              <Link href="#infocollect">WHAT INFORMATION DO WE COLLECT?</Link>
            </li>
            <li>
              <Link href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</Link>
            </li>
            <li>
              <Link href="#legalbases">
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                INFORMATION?
              </Link>
            </li>
            <li>
              <Link href="#whoshare">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Link>
            </li>
            <li>
              <Link href="#cookies">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>
            </li>
            <li>
              <Link href="#sociallogins">
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Link>
            </li>
            <li>
              <Link href="#intltransfers">
                IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </Link>
            </li>
            <li>
              <Link href="#inforetain">
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </li>
            <li>
              <Link href="#infosafe">
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Link>
            </li>
            <li>
              <Link href="#infominors">
                DO WE COLLECT INFORMATION FROM MINORS?
              </Link>
            </li>
            <li>
              <Link href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>
            </li>
            <li>
              <Link href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
            </li>
            <li>
              <Link href="#uslaws">
                DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>
            </li>
            <li>
              <Link href="#otherlaws">
                DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>
            </li>
            <li>
              <Link href="#policyupdates">
                DO WE MAKE UPDATES TO THIS NOTICE?
              </Link>
            </li>
            <li>
              <Link href="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
            </li>
            <li>
              <Link href="#request">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </Link>
            </li>
          </ol>
        </section>
        <br />
        <section id="infocollect">
          <h2 className="mb-4 text-2xl">
            <Link href="#services">1. WHAT INFORMATION DO WE COLLECT?</Link>
          </h2>
          <p>
            <b>Personal information you disclose to us</b>
            <br />
            <i>
              <b>In Short:</b> We collect personal information that you provide
              to us
            </i>
          </p>
          <br />
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
          <br />
          <p>
            <b>Personal Information Provided by You.</b> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>names</li>
            <li>email addresses</li>
            <li>phone numbers</li>
            <li>mailing addresses</li>
            <li>usernames</li>
            <li>passwords</li>
            <li>contact or authentication data</li>
            <li>contact preferences</li>
          </ul>
          <br />
          <p>
            <b>Sensitive Information.</b> We do not process sensitive
            information.
          </p>
          <br />
          <p>
            <b>Payment Data.</b> We may collect data necessary to process your
            payment if you choose to make purchases, such as your payment
            instrument number, and the security code associated with your
            payment instrument. All payment data is handled and stored by Apple
            , Google and Stripe. You may find their privacy notice link(s) here:{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.apple.com/legal/privacy/
            </a>
            ,{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>{" "}
            and{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://stripe.com/privacy
            </a>
            .
          </p>
          <br />
          <p>
            <b>Social Media Login Data.</b> We may provide you with the option
            to register with us using your existing social media account
            details, like your Facebook, X, or other social media account. If
            you choose to register in this way, we will collect certain profile
            information about you from the social media provider, as described
            in the section called{" "}
            <Link href="#sociallogins" style={{ color: "#245dc1" }}>
              &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
            </Link>{" "}
            below.
          </p>
          <br />
          <p>
            <b>Application Data.</b> If you use our application(s), we also may
            collect the following information if you choose to provide us with
            access or permission:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <i>Mobile Device Access.</i> We may request access or permission
              to certain features from your mobile device, including your mobile
              device&apos;s camera, microphone, storage, and other features. If
              you wish to change our access or permissions, you may do so in
              your device&apos;s settings.
            </li>
            <br />
            <li>
              <i>Mobile Device Data.</i> We automatically collect device
              information (such as your mobile device ID, model, and
              manufacturer), operating system, version information and system
              configuration information, device and application identification
              numbers, browser type and version, hardware model Internet service
              provider and/or mobile carrier, and Internet Protocol (IP) address
              (or proxy server). If you are using our application(s), we may
              also collect information about the phone network associated with
              your mobile device, your mobile device’s operating system or
              platform, the type of mobile device you use, your mobile device’s
              unique device ID, and information about the features of our
              application(s) you accessed.
            </li>
            <br />
            <li>
              <i>Push Notifications.</i> We may request to send you push
              notifications regarding your account or certain features of the
              application(s). If you wish to opt out from receiving these types
              of communications, you may turn them off in your device&apos;s
              settings.
            </li>
          </ul>
          <br />
          <p>
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
            <br />
            <br />
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information. <br />
            <br />
            <b>Information automatically collected</b>
            <br />
            <br />
            <i>
              <b>In Short:</b> Some information — such as your Internet Protocol
              (IP) address and/or browser and device characteristics — is
              collected automatically when you visit our Services.
            </i>
            <br />
            <br />
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
            <br />
            <br />
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find out more about this in our
            Cookie Notice: <Link href="/cookies">https://{host}/cookies</Link>.
          </p>
          <br />
          <p>The information we collect includes:</p>
          <ul className="list-disc list-inside">
            <li>
              <i>Log and Usage Data.</i> Log and usage data is service-related,
              diagnostic, usage, and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type, and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches, and other actions you
              take such as which features you use), device event information
              (such as system activity, error reports (sometimes called
              &quot;crash dumps&quot;), and hardware settings).
            </li>
            <br />
            <li>
              <i>Device Data.</i> We collect device data such as information
              about your computer, phone, tablet, or other device you use to
              access the Services. Depending on the device used, this device
              data may include information such as your IP address (or proxy
              server), device and application identification numbers, location,
              browser type, hardware model, Internet service provider and/or
              mobile carrier, operating system, and system configuration
              information.
            </li>
            <br />
            <li>
              <i>Location Data.</i> We collect location data such as information
              about your device&apos;s location, which can be either precise or
              imprecise. How much information we collect depends on the type and
              settings of the device you use to access the Services. For
              example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on
              your IP address). You can opt out of allowing us to collect this
              information either by refusing access to the information or by
              disabling your Location setting on your device. However, if you
              choose to opt out, you may not be able to use certain aspects of
              the Services.
            </li>
          </ul>
          <br />
          <p>
            <b>Google API</b>
            <br />
            Our use of information received from Google APIs will adhere to{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Limited Use requirements
            </a>
            .
          </p>
        </section>
        <br />
        <section id="infouse">
          <h2 className="mb-4 text-2xl">
            <Link href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We process your information to provide, improve,
              and administer our Services, communicate with you, for security
              and fraud prevention, and to comply with law. We may also process
              your information for other purposes with your consent.
            </i>
          </p>
          <br />
          <p>
            <b>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </b>
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              To facilitate account creation and authentication and otherwise
              manage user accounts. We may process your information so you can
              create and log in to your account, as well as keep your account in
              working order.
            </li>
            <li>
              To deliver and facilitate delivery of services to the user. We may
              process your information to provide you with the requested
              service.
            </li>
            <li>
              To respond to user inquiries/offer support to users. We may
              process your information to respond to your inquiries and solve
              any potential issues you might have with the requested service.
            </li>
            <li>
              To send administrative information to you. We may process your
              information to send you details about our products and services,
              changes to our terms and policies, and other similar information.
            </li>
            <li>
              To fulfill and manage your orders. We may process your information
              to fulfill and manage your orders, payments, returns, and
              exchanges made through the Services.
            </li>
            <li>
              To enable user-to-user communications. We may process your
              information if you choose to use any of our offerings that allow
              for communication with another user.
            </li>
            <li>
              To request feedback. We may process your information when
              necessary to request feedback and to contact you about your use of
              our Services.
            </li>
            <li>
              To send you marketing and promotional communications. We may
              process the personal information you send to us for our marketing
              purposes, if this is in accordance with your marketing
              preferences. You can opt out of our marketing emails at any time.
              For more information, see{" "}
              <Link href="#privacyrights" style={{ color: "#245dc1" }}>
                &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot;
              </Link>{" "}
              below.
            </li>
            <li>
              To protect our Services. We may process your information as part
              of our efforts to keep our Services safe and secure, including
              fraud monitoring and prevention.
            </li>
            <li>
              To identify usage trends. We may process information about how you
              use our Services to better understand how they are being used so
              we can improve them.
            </li>
            <li>
              To determine the effectiveness of our marketing and promotional
              campaigns. We may process your information to better understand
              how to provide marketing and promotional campaigns that are most
              relevant to you.
            </li>
            <li>
              To save or protect an individual&apos;s vital interest. We may
              process your information when necessary to save or protect an
              individual’s vital interest, such as to prevent harm.
            </li>
          </ul>
        </section>
        <br />
        <section id="legalbases">
          <h2 className="mb-4 text-2xl">
            <Link href="#legalbases">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </i>
          </p>
          <br />
          <p>
            <i>
              <u>
                If you are located in the EU or UK, this section applies to you.
              </u>
            </i>
          </p>
          <br />
          <p>
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <b>Consent.</b> We may process your information if you have given
              us permission (i.e., consent) to use your personal information for
              a specific purpose. You can withdraw your consent at any time.
              Learn more about{" "}
              <Link href="#withdrawconsent" style={{ color: "#245dc1" }}>
                withdrawing your consent
              </Link>
              .
            </li>
            <li>
              <b>Performance of a Contract.</b> We may process your personal
              information when we believe it is necessary to fulfill our
              contractual obligations to you, including providing our Services
              or at your request prior to entering into a contract with you.
            </li>
            <li>
              <b>Legitimate Interests.</b> We may process your information when
              we believe it is reasonably necessary to achieve our legitimate
              business interests and those interests do not outweigh your
              interests and fundamental rights and freedoms. For example, we may
              process your personal information for some of the purposes
              described in order to:
              <ul className="list-disc list-inside pl-4">
                <li>
                  Send users information about special offers and discounts on
                  our products and services
                </li>
                <li>
                  Analyze how our Services are used so we can improve them to
                  engage and retain users
                </li>
                <li>Support our marketing activities</li>
                <li>Diagnose problems and/or prevent fraudulent activities</li>
                <li>
                  Understand how our users use our products and services so we
                  can improve user experience
                </li>
              </ul>
            </li>
            <li>
              <b>Legal Obligations.</b> We may process your information where we
              believe it is necessary for compliance with our legal obligations,
              such as to cooperate with a law enforcement body or regulatory
              agency, exercise or defend our legal rights, or disclose your
              information as evidence in litigation in which we are involved.
            </li>
            <li>
              <b>Vital Interests.</b> We may process your information where we
              believe it is necessary to protect your vital interests or the
              vital interests of a third party, such as situations involving
              potential threats to the safety of any person.
            </li>
          </ul>
          <br />
          <p>
            <i>
              <u>If you are located in Canada, this section applies to you.</u>
            </i>
          </p>
          <br />
          <p>
            We may process your information if you have given us specific
            permission (i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can{" "}
            <Link href="#withdrawconsent" style={{ color: "#245dc1" }}>
              withdrawing your consent
            </Link>{" "}
            at any time.
          </p>
          <br />
          <p>
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including, for example:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent
              would compromise the availability or the accuracy of the
              information and the collection is reasonable for purposes related
              to investigating a breach of an agreement or a contravention of
              the laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the
              regulations
            </li>
          </ul>
        </section>
        <br />
        <section id="whoshare">
          <h2 className="mb-4 text-2xl">
            <Link href="#whoshare">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We may share information in specific situations
              described in this section and/or with the following categories of
              third parties.
            </i>
          </p>
          <br />
          <p>
            <b>
              Vendors, Consultants, and Other Third-Party Service Providers.
            </b>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents (<b>&quot;third parties&quot;</b>) who
            perform services for us or on our behalf and require access to such
            information to do that work. We have contracts in place with our
            third parties, which are designed to help safeguard your personal
            information. This means that they cannot do anything with your
            personal information unless we have instructed them to do it. They
            will also not share your personal information with any organization
            apart from us. They also commit to protect the data they hold on our
            behalf and to retain it for the period we instruct.
          </p>
          <br />
          <p>
            The categories of third parties we may share personal information
            with are as follows:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>Cloud Computing Services</li>
            <li>Data Analytics Services</li>
            <li>Data Storage Service Providers</li>
            <li>User Account Registration & Authentication Services</li>
            <li>Website Hosting Service Providers</li>
            <li>Payment Processors</li>
            <li>Social Networks</li>
            <li>AI Platforms</li>
          </ul>
          <br />
          <p>
            We also may need to share your personal information in the following
            situations:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <b>Business Transfers.</b> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <b>Other Users.</b> When you share personal information (for
              example, by posting comments, contributions, or other content to
              the Services) or otherwise interact with public areas of the
              Services, such personal information may be viewed by all users and
              may be publicly made available outside the Services in perpetuity.
              If you interact with other users of our Services and register for
              our Services through a social network (such as Facebook), your
              contacts on the social network will see your name, profile photo,
              and descriptions of your activity. Similarly, other users will be
              able to view descriptions of your activity, communicate with you
              within our Services, and view your profile.
            </li>
          </ul>
        </section>
        <br />
        <section id="cookies">
          <h2 className="mb-4 text-2xl">
            <Link href="#cookies">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We may use cookies and other tracking
              technologies to collect and store your information.
            </i>
            <br />
            <br />
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
            <br />
            <br />
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
            <br />
            <br />
            To the extent these online tracking technologies are deemed to be a
            &quot;sale&quot;/&quot;sharing&quot; (which includes targeted
            advertising, as defined under the applicable laws) under applicable
            US state laws, you can opt out of these online tracking technologies
            by submitting a request as described below under section{" "}
            <Link href="#uslaws" style={{ color: "#245dc1" }}>
              &quot;DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
              RIGHTS?&quot;
            </Link>
            <br />
            <br />
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice:{" "}
            <Link href="/cookies">https://{host}/cookies</Link>. <br />
            <br />
            <b>Google Analytics</b>
            <br />
            We may share your information with Google Analytics to track and
            analyze the use of the Services. To opt out of being tracked by
            Google Analytics across the Services, visit{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            . For more information on the privacy practices of Google, please
            visit the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy & Terms page
            </a>
            .
          </p>
        </section>
        <br />
        <section id="sociallogins">
          <h2 className="mb-4 text-2xl">
            <Link href="#sociallogins">
              6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> If you choose to register or log in to our
              Services using a social media account, we may have access to
              certain information about you.
            </i>
            <br />
            <br />
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The
            profile information we receive may vary depending on the social
            media provider concerned, but will often include your name, email
            address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media
            platform.
            <br />
            <br />
            We will use the information we receive only for the purposes that
            are described in this Privacy Notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </section>
        <br />
        <section id="intltransfers">
          <h2 className="mb-4 text-2xl">
            <Link href="#intltransfers">
              7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We may transfer, store, and process your
              information in countries other than your own.
            </i>
            <br />
            <br />
            Our servers are located in the United States. If you are accessing
            our Services from outside the United States, please be aware that
            your information may be transferred to, stored by, and processed by
            us in our facilities and in the facilities of the third parties with
            whom we may share your personal information (see{" "}
            <Link href="#whoshare" style={{ color: "#245dc1" }}>
              &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?&quot;
            </Link>{" "}
            above), in the United States, and other countries.
            <br />
            <br />
            If you are a resident in the European Economic Area (EEA), United
            Kingdom (UK), or Switzerland, then these countries may not
            necessarily have data protection laws or other similar laws as
            comprehensive as those in your country. However, we will take all
            necessary measures to protect your personal information in
            accordance with this Privacy Notice and applicable law.
            <br />
            <br />
            European Commission&apos;s Standard Contractual Clauses:
            <br />
            <br />
            We have implemented measures to protect your personal information,
            including by using the European Commission&apos;s Standard
            Contractual Clauses for transfers of personal information between
            our group companies and between us and our third-party providers.
            These clauses require all recipients to protect all personal
            information that they process originating from the EEA or UK in
            accordance with European data protection laws and regulations. Our
            Standard Contractual Clauses can be provided upon request. We have
            implemented similar appropriate safeguards with our third-party
            service providers and partners and further details can be provided
            upon request.
          </p>
        </section>
        <br />
        <section id="inforetain">
          <h2 className="mb-4 text-2xl">
            <Link href="#inforetain">
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We keep your information for as long as necessary
              to fulfill the purposes outlined in this Privacy Notice unless
              otherwise required by law.
            </i>
            <br />
            <br />
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
            <br />
            <br />
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </section>
        <br />
        <section id="infosafe">
          <h2 className="mb-4 text-2xl">
            <Link href="#infosafe">
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We aim to protect your personal information
              through a system of organizational and technical security
              measures.
            </i>
            <br />
            <br />
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </section>
        <br />
        <section id="infominors">
          <h2 className="mb-4 text-2xl">
            <Link href="#infominors">
              10. DO WE COLLECT INFORMATION FROM MINORS?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> We do not knowingly collect data from or market
              to children under 18 years of age.
            </i>
            <br />
            <br />
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age, nor do we knowingly sell such
            personal information. By using the Services, you represent that you
            are at least 18 or that you are the parent or guardian of such a
            minor and consent to such minor dependent’s use of the Services. If
            we learn that personal information from users less than 18 years of
            age has been collected, we will deactivate the account and take
            reasonable measures to promptly delete such data from our records.
            If you become aware of any data we may have collected from children
            under age 18, please contact us at support@monclips.com.
          </p>
        </section>
        <br />
        <section id="privacyrights">
          <h2 className="mb-4 text-2xl">
            <Link href="#privacyrights">11. WHAT ARE YOUR PRIVACY RIGHTS?</Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> Depending on your state of residence in the US or
              in some regions, such as the European Economic Area (EEA), United
              Kingdom (UK), Switzerland, and Canada, you have rights that allow
              you greater access to and control over your personal information.
              You may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </i>
            <br />
            <br />
            In some regions (like the EEA, UK, Switzerland, and Canada), you
            have certain rights under applicable data protection laws. These may
            include the right (i) to request access and obtain a copy of your
            personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; (iv)
            if applicable, to data portability; and (v) not to be subject to
            automated decision-making. In certain circumstances, you may also
            have the right to object to the processing of your personal
            information. You can make such a request by contacting us by using
            the contact details provided in the section{" "}
            <Link href="#contact" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
            </Link>{" "}
            below.
            <br />
            <br />
            We will consider and act upon any request in accordance with
            applicable data protection laws.
            <br />
            <br />
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <a
              href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#245dc1" }}
            >
              Member State data protection authority
            </a>{" "}
            or{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#245dc1" }}
            >
              UK data protection authority
            </a>
            .
            <br />
            <br />
            If you are located in Switzerland, you may contact the Federal{" "}
            <a
              href="https://www.edoeb.admin.ch/edoeb/en/home.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#245dc1" }}
            >
              Data Protection and Information Commissioner
            </a>
            .
            <br />
            <br />
            <u id="withdrawconsent">Withdrawing your consent:</u> If we are
            relying on your consent to process your personal information, which
            may be express and/or implied consent depending on the applicable
            law, you have the right to withdraw your consent at any time. You
            can withdraw your consent at any time by contacting us by using the
            contact details provided in the section{" "}
            <Link href="#contact" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
            </Link>{" "}
            below.
            <br />
            <br />
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
            <br />
            <br />
            <u>Opting out of marketing and promotional communications:</u> You
            can unsubscribe from our marketing and promotional communications at
            any time by clicking on the unsubscribe link in the emails that we
            send, or by contacting us using the details provided in the section{" "}
            <Link href="#contact" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
            </Link>{" "}
            below. You will then be removed from the marketing lists. However,
            we may still communicate with you — for example, to send you
            service-related messages that are necessary for the administration
            and use of your account, to respond to service requests, or for
            other non-marketing purposes.
          </p>
          <br />
          <p>
            <b>Account Information</b>
          </p>
          <br />
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              Log in to your account settings and update your user account.
            </li>
            <li>Contact us using the contact information provided.</li>
          </ul>
          <br />
          <p>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <br />
          <p>
            <u>Cookies and similar technologies:</u> Most Web browsers are set
            to accept cookies by default. If you prefer, you can usually choose
            to set your browser to remove cookies and to reject cookies. If you
            choose to remove cookies or reject cookies, this could affect
            certain features or services of our Services. For further
            information, please see our Cookie Notice:{" "}
            <Link href="/cookies">https://{host}/cookies</Link>.
          </p>
          <br />
          <p>
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <a href="mailto:support@monclips.com">support@monclips.com</a>.
          </p>
        </section>
        <br />
        <section id="DNT">
          <h2 className="mb-4 text-2xl">
            <Link href="#DNT">12. CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
          </h2>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this Privacy Notice.
            <br />
            <br />
            California law requires us to let you know how we respond to web
            browser DNT signals. Because there currently is not an industry or
            legal standard for recognizing or honoring DNT signals, we do not
            respond to them at this time.
          </p>
        </section>
        <br />
        <section id="uslaws">
          <h2 className="mb-4 text-2xl">
            <Link href="#uslaws">
              13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> If you are a resident of California, Colorado,
              Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland,
              Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon,
              Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have
              the right to request access to and receive details about the
              personal information we maintain about you and how we have
              processed it, correct inaccuracies, get a copy of, or delete your
              personal information. You may also have the right to withdraw your
              consent to our processing of your personal information. These
              rights may be limited in some circumstances by applicable law.
              More information is provided below.
            </i>
          </p>
          <br />
          <p>
            <b>Categories of Personal Information We Collect</b>
          </p>
          <br />
          <p>
            We have collected the following categories of personal information
            in the past twelve (12) months:
          </p>
          <br />
          <style>{`
            table {
              border: 1px solid #9ca3af;
              text-align: left;
              border-collapse: collapse;
              width: 100%;
              table-layout: fixed;
            }
            table td:nth-child(3) {
              text-align: center;
            }
            table td, th {
              padding: 10px;
              border: 1px solid #9ca3af;
            }
          `}</style>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Category</th>
                <th colSpan={6}>Examples</th>
                <th colSpan={2}>Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>A. Identifiers</td>
                <td colSpan={6}>
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, and account name
                </td>
                <td colSpan={2}>YES</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  B. Personal information as defined in the California Customer
                  Records statute
                </td>
                <td colSpan={6}>
                  Name, contact information, education, employment, employment
                  history, and financial information
                </td>
                <td colSpan={2}>YES</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  C. Protected classification characteristics under state or
                  federal law
                </td>
                <td colSpan={6}>
                  Gender, age, date of birth, race and ethnicity, national
                  origin, marital status, and other demographic data
                </td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>D. Commercial information</td>
                <td colSpan={6}>
                  Transaction information, purchase history, financial details,
                  and payment information
                </td>
                <td colSpan={2}>YES</td>
              </tr>
              <tr>
                <td colSpan={4}>E. Biometric information</td>
                <td colSpan={6}>Fingerprints and voiceprints</td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  F. Internet or other similar network activity
                </td>
                <td colSpan={6}>
                  Browsing history, search history, online behavior, interest
                  data, and interactions with our and other websites,
                  applications, systems, and advertisements
                </td>
                <td colSpan={2}>YES</td>
              </tr>
              <tr>
                <td colSpan={4}>G. Geolocation data</td>
                <td colSpan={6}>Device location</td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  H. Audio, electronic, sensory, or similar information
                </td>
                <td colSpan={6}>
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  I. Professional or employment-related information
                </td>
                <td colSpan={6}>
                  Business contact details in order to provide you our Services
                  at a business level or job title, work history, and
                  professional qualifications if you apply for a job with us
                </td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>J. Education Information</td>
                <td colSpan={6}>Student records and directory information</td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  K. Inferences drawn from collected personal information
                </td>
                <td colSpan={6}>
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual’s preferences and characteristics
                </td>
                <td colSpan={2}>NO</td>
              </tr>
              <tr>
                <td colSpan={4}>L. Sensitive personal Information</td>
                <td colSpan={6}></td>
                <td colSpan={2}>NO</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>
              Facilitation in the delivery of our Services and to respond to
              your inquiries.
            </li>
          </ul>
          <br />
          <p>
            We will use and retain the collected personal information as needed
            to provide the Services or for:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>Category A - As long as the user has an account with us</li>
            <li>Category B - As long as the user has an account with us</li>
            <li>Category D - As long as the user has an account with us</li>
            <li>Category F - As long as the user has an account with us</li>
          </ul>
          <br />
          <p>
            <b>Sources of Personal Information</b>
            <br />
            Learn more about the sources of personal information we collect in{" "}
            <Link href="#infocollect" style={{ color: "#245dc1" }}>
              &quot;WHAT INFORMATION DO WE COLLECT?&quot;
            </Link>{" "}
            <br />
            <br />
            <b>How We Use and Share Personal Information</b>
            <br />
            Learn more about how we use your personal information in the
            section,{" "}
            <Link href="#infouse" style={{ color: "#245dc1" }}>
              &quot;HOW DO WE PROCESS YOUR INFORMATION?&quot;
            </Link>
          </p>
          <br />
          <p>We collect and share your personal information through:</p>
          <br />
          <ul className="list-disc list-inside">
            <li>Beacons/Pixels/Tags</li>
          </ul>
          <br />
          <p>
            <b>Will your information be shared with anyone else?</b>
            <br />
            <br />
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information to in the
            section,{" "}
            <Link href="#whoshare" style={{ color: "#245dc1" }}>
              &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?&quot;
            </Link>
            <br />
            <br />
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            &quot;selling&quot; of your personal information.
            <br />
            <br />
            We have not sold or shared any personal information to third parties
            for a business or commercial purpose in the preceding twelve (12)
            months. We have disclosed the following categories of personal
            information to third parties for a business or commercial purpose in
            the preceding twelve (12) months:
            <br />
            <br />
            The categories of third parties to whom we disclosed personal
            information for a business or commercial purpose can be found under{" "}
            <Link href="#whoshare" style={{ color: "#245dc1" }}>
              &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?&quot;
            </Link>
          </p>
          <br />
          <p>
            <b>Your Rights</b>
          </p>
          <br />
          <p>
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <b>Right to know</b> whether or not we are processing your
              personal data
            </li>
            <li>
              <b>Right to access</b> your personal data
            </li>
            <li>
              <b>Right to correct</b> inaccuracies in your personal data
            </li>
            <li>
              <b>Right to request</b> the deletion of your personal data
            </li>
            <li>
              <b>Right to obtain</b> a copy of the personal data you previously
              shared with us
            </li>
            <li>
              <b>Right to non-discrimination</b> for exercising your rights
            </li>
            <li>
              <b>Right to opt out</b> of the processing of your personal data if
              it is used for targeted advertising (or sharing as defined under
              California’s privacy law), the sale of personal data, or profiling
              in furtherance of decisions that produce legal or similarly
              significant effects (&quot;profiling&quot;)
            </li>
          </ul>
          <br />
          <p>
            Depending upon the state where you live, you may also have the
            following rights:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              Right to access the categories of personal data being processed
              (as permitted by applicable law, including the privacy law in
              Minnesota)
            </li>
            <li>
              Right to obtain a list of the categories of third parties to which
              we have disclosed personal data (as permitted by applicable law,
              including the privacy law in California, Delaware, and Maryland)
            </li>
            <li>
              Right to obtain a list of specific third parties to which we have
              disclosed personal data (as permitted by applicable law, including
              the privacy law in Minnesota and Oregon)
            </li>
            <li>
              Right to review, understand, question, and correct how personal
              data has been profiled (as permitted by applicable law, including
              the privacy law in Minnesota)
            </li>
            <li>
              Right to limit use and disclosure of sensitive personal data (as
              permitted by applicable law, including the privacy law in
              California)
            </li>
            <li>
              Right to opt out of the collection of sensitive data and personal
              data collected through the operation of a voice or facial
              recognition feature (as permitted by applicable law, including the
              privacy law in Florida)
            </li>
          </ul>
          <br />
          <p>
            <b>Request Verification</b>
            <br />
            <br />
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
            <br />
            <br />
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
            <br />
            <br />
            <b>Appeals</b>
            <br />
            <br />
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at support@monclips.com. We will inform you in writing
            of any action taken or not taken in response to the appeal,
            including a written explanation of the reasons for the decisions. If
            your appeal is denied, you may submit a complaint to your state
            attorney general.
            <b>Financial Incentives</b>
            <br />
            <br />
            &quot;Financial incentive&quot; means a program, benefit, or other
            offering, including payments to consumers as compensation, for the
            disclosure, deletion, sale, or sharing of personal information.
            <br />
            <br />
            The law permits financial incentives or a price or service
            difference if it is reasonably related to the value of the
            consumer’s data. A business must be able to explain how the
            financial incentive or price or service difference is reasonably
            related to the value of the consumer’s data. The explanation must
            include:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>
              a good-faith estimate of the value of the consumer’s data that
              forms the basis for offering the financial incentive or price or
              service difference; and
            </li>
            <li>
              a description of the method the business used to calculate the
              value of the consumer’s data.
            </li>
          </ul>
          <p>
            We may decide to offer a &quot;bona fide loyalty program&quot; under
            Colorado law, or a &quot;financial incentive&quot; under California
            law (e.g., price or service difference) in exchange for the
            retention, sale, or sharing of a consumer’s personal information.
            <br />
            <br />
            If we decide to offer a financial incentive, we will notify you of
            such financial incentive and explain the price difference, as well
            as material terms of the financial incentive or price of service
            difference, including the categories of personal information that
            are implicated by the financial incentive or price or service
            difference.
            <br />
            <br />
            Under California law, the value of your personal information to us
            is related to the value of the free or discounted products or
            services, or other benefits that you obtain or that are provided as
            part of the applicable program, less the expense related to offering
            those products, services, and benefits to program participants.
            <br />
            <br />
            If you choose to participate in the financial incentive you can
            withdraw from the financial incentive at any time by emailing us at
            support@monclips.com, by visiting{" "}
            <a
              href="https://monclips.com/?get=support"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://monclips.com/?get=support
            </a>
            , or by referring to the contact details at the bottom of this
            document.
            <br />
            <br />
            <b>California &quot;Shine The Light&quot; Law</b>
            <br />
            California Civil Code Section 1798.83, also known as the &quot;Shine
            The Light&quot; law, permits our users who are California residents
            to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section{" "}
            <Link href="#contact" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
            </Link>
          </p>
        </section>
        <br />
        <section id="otherlaws">
          <h2 className="mb-4 text-2xl">
            <Link href="#otherlaws">
              14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> You may have additional rights based on the
              country you reside in.
            </i>
          </p>
          <b>Australia and New Zealand</b>
          <br />
          <br />
          <p>
            We collect and process your personal information under the
            obligations and conditions set by Australia&apos;s Privacy Act 1988
            and New Zealand&apos;s Privacy Act 2020 (Privacy Act).
            <br />
            <br />
            This Privacy Notice satisfies the notice requirements defined in
            both Privacy Acts, in particular: what personal information we
            collect from you, from which sources, for which purposes, and other
            recipients of your personal information.
            <br />
            <br />
            If you do not wish to provide the personal information necessary to
            fulfill their applicable purpose, it may affect our ability to
            provide our services, in particular:
          </p>
          <br />
          <ul className="list-disc list-inside">
            <li>offer you the products or services that you want</li>
            <li>respond to or help with your requests</li>
            <li>manage your account with us</li>
            <li>confirm your identity and protect your account</li>
          </ul>
          <br />
          <p>
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <Link href="#request" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
              FROM YOU?&quot;
            </Link>
          </p>
          <br />
          <p>
            If you believe we are unlawfully processing your personal
            information, you have the right to submit a complaint about a breach
            of the Australian Privacy Principles to the{" "}
            <a
              href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office of the Australian Information Commissioner
            </a>{" "}
            and a breach of New Zealand&apos;s Privacy Principles to the{" "}
            <a
              href="https://www.privacy.org.nz/your-rights/making-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office of New Zealand Privacy Commissioner
            </a>
            .
          </p>
          <br />
          <p>
            <b>Republic of South Africa</b>
            <br />
            <br />
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <Link href="#request" style={{ color: "#245dc1" }}>
              &quot;HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
              FROM YOU?&quot;
            </Link>
            <br />
            <br />
            If you are unsatisfied with the manner in which we address any
            complaint with regard to our processing of personal information, you
            can contact the office of the regulator, the details of which are:
            <br />
            <br />
            <a
              href="https://inforegulator.org.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Information Regulator (South Africa)
            </a>{" "}
            <br />
            General enquiries:{" "}
            <a href="mailto:enquiries@inforegulator.org.za">
              enquiries@inforegulator.org.za
            </a>{" "}
            <br />
            Complaints (complete POPIA/PAIA form 5):
            <a href="mailto:PAIAComplaints@inforegulator.org.za">
              PAIAComplaints@inforegulator.org.za
            </a>{" "}
            &
            <a href="mailto:POPIAComplaints@inforegulator.org.za">
              POPIAComplaints@inforegulator.org.za
            </a>
          </p>
        </section>
        <br />
        <section id="policyupdates">
          <h2 className="mb-4 text-2xl">
            <Link href="#policyupdates">
              15. DO WE MAKE UPDATES TO THIS NOTICE?
            </Link>
          </h2>
          <p>
            <i>
              <b>In Short:</b> Yes, we will update this notice as necessary to
              stay compliant with relevant laws.
            </i>
            <br />
            <br />
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date at
            the top of this Privacy Notice. If we make material changes to this
            Privacy Notice, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this Privacy Notice frequently to be
            informed of how we are protecting your informatio
          </p>
        </section>
        <br />
        <section id="contact">
          <h2 className="mb-4 text-2xl">
            <Link href="#contact">
              16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Link>
          </h2>
          <p>
            If you have questions or comments about this notice, you may email
            us at support@monclips.com or contact us by post at:
          </p>
          <br />
          <address>
            MonClips inc. <br />
            8 The Green, Dover, DE 19901, USA <br />
            Dover, DE 19901 <br />
            United States
          </address>
        </section>
        <br />
        <section id="request">
          <h2 className="mb-4 text-2xl">
            <Link href="#request">
              17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </Link>
          </h2>
          <p>
            You have the right to request access to the personal information we
            collect from you, details about how we have processed it, correct
            inaccuracies, or delete your personal information. You may also have
            the right to withdraw your consent to our processing of your
            personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please visit:{" "}
            <a
              href="https://monclips.com/?get=support"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://monclips.com/?get=support
            </a>
            .
          </p>
        </section>
        <br />
      </div>
    </main>
  );
}
