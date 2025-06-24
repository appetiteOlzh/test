import {
  advertisingCookies,
  analyticsCookies,
  unclassifiedCookies,
} from "./data";
import { Table } from "./table";
import { TableLIstSection } from "./table-list-section";

export default function PrivacyPolicy() {
  return (
    <main>
      <style>{`
          table {
            text-align: left;
          }
          table td {
            color: #eee;
            padding-left: 0.5rem;
          }
          table a {
            color: #245dc1;
          }
          .table-wrapper {
              padding: 1rem;
              border: 1px solid #ccc;
              border-radius: 8px;
          }
      `}</style>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl">COOKIE POLICY</h1>
        <br />
        <br />
        <p>
          <em>Updated at April 22, 2025</em>
        </p>
        <br />
        <br />
        <br />
        <p>
          This Cookie Policy explains how MonClips inc. (
          <b>&quot;Company,&quot;</b> <b>&quot;we,&quot;</b>{" "}
          <b>&quot;us,&quot;</b> and
          <b>&quot;our&quot;</b>) uses cookies and similar technologies to
          recognize you when you visit our website at{" "}
          <a href="https://monclips.com">https://monclips.com</a>
          (&quot;Website&quot;). It explains what these technologies are and why
          we use them, as well as your rights to control our use of them.
          <br />
          <br />
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </p>
        <br />
        <br />
        <section>
          <h2 className="mb-4 text-2xl">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information. <br />
            <br />
            Cookies set by the website owner (in this case, MonClips inc.) are
            called &quot;first-party cookies.&quot; Cookies set by parties other
            than the website owner are called &quot;third-party cookies.&quot;
            Third-party cookies enable third-party features or functionality to
            be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these
            third-party cookies can recognize your computer both when it visits
            the website in question and also when it visits certain other
            websites.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">Why do we use cookies?</h2>
          <p>
            We use first- and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Website
            to operate, and we refer to these as &quot;essential&quot; or
            &quot;strictly necessary&quot; cookies. Other cookies also enable us
            to track and target the interests of our users to enhance the
            experience on our Online Properties. Third parties serve cookies
            through our Website for advertising, analytics, and other purposes.
            This is described in more detail below.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services.
            <br />
            <br />
            The Cookie Consent Manager can be found in the notification banner
            and on our Website. If you choose to reject cookies, you may still
            use our Website though your access to some functionality and areas
            of our Website may be restricted. You may also set or amend your web
            browser controls to accept or refuse cookies.
            <br />
            <br />
            The specific types of first- and third-party cookies served through
            our Website and the purposes they perform are described in the table
            below (please note that the specific cookies served may vary
            depending on the specific Online Properties you visit):
          </p>
        </section>
        <br />
        <TableLIstSection
          title="Essential website cookies:"
          description="These cookies are strictly necessary to provide you with services
            available through our Website and to use some of its features, such
            as access to secure areas."
        >
          <Table
            tableInner={[
              { row: ["Name:", "_ga"] },
              {
                row: [
                  "Purpose:",
                  "Cloudflare places the cookie on end-user devices that access customer sites protected by Bot Management or Bot Fight Mode.",
                ],
              },
              { row: ["Provider:", ".monclips.com"] },
              {
                row: [
                  "Service:",
                  <>
                    CloudFlare{" "}
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Service Privacy Policy
                    </a>
                  </>,
                ],
              },
              { row: ["Type:", "http_cookie"] },
              { row: ["Expires in:", "29 minutes"] },
            ]}
          />
        </TableLIstSection>
        <br />
        <TableLIstSection
          title="Analytics and customization cookies:"
          description="These cookies collect information that is used either in aggregate
            form to help us understand how our Website is being used or how
            effective our marketing campaigns are, or to help us customize our
            Website for you."
        >
          {analyticsCookies.map(({ tableInner }, index) => {
            return <Table tableInner={tableInner} key={index} />;
          })}
        </TableLIstSection>
        <br />
        <TableLIstSection
          title="Advertising cookies:"
          description="These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests."
        >
          {advertisingCookies.map(({ tableInner }, index) => {
            return <Table tableInner={tableInner} key={index} />;
          })}
        </TableLIstSection>
        <br />
        <TableLIstSection
          title="Unclassified cookies:"
          description="These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers."
        >
          {unclassifiedCookies.map(({ tableInner }, index) => {
            return <Table tableInner={tableInner} key={index} />;
          })}
        </TableLIstSection>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">
            How can I control cookies on my browser?
          </h2>
          <p>
            As the means by which you can refuse cookies through your web
            browser controls vary from browser to browser, you should visit your
            browser&apos;s help menu for more information. The following is
            information about how to manage cookies on the most popular
            browsers:
          </p>
          <br />
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edge
              </a>
            </li>
            <li>
              <a
                href="https://help.opera.com/en/latest/web-preferences/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opera
              </a>
            </li>
          </ul>
          <br />
          <p>
            In addition, most advertising networks offer you a way to opt out of
            targeted advertising. If you would like to find out more
            information, please visit:
          </p>
          <br />
          <ul className="list-disc pl-5">
            <li>
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a
                href="https://youradchoices.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Advertising Alliance of Canada
              </a>
            </li>
            <li>
              <a
                href="http://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">
            What about other tracking technologies, like web beacons?
          </h2>
          <p>
            Cookies are not the only way to recognize or track visitors to a
            website. We may use other, similar technologies from time to time,
            like web beacons (sometimes called &quot;tracking pixels&quot; or
            &quot;clear gifs&quot;). These are tiny graphics files that contain
            a unique identifier that enables us to recognize when someone has
            visited our Website or opened an email including them. This allows
            us, for example, to monitor the traffic patterns of users from one
            page within a website to another, to deliver or communicate with
            cookies, to understand whether you have come to the website from an
            online advertisement displayed on a third-party website, to improve
            site performance, and to measure the success of email marketing
            campaigns. In many instances, these technologies are reliant on
            cookies to function properly, and so declining cookies will impair
            their functioning.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">
            Do you use Flash cookies or Local Shared Objects?
          </h2>
          <p>
            Websites may also use so-called &quot;Flash Cookies&quot; (also
            known as Local Shared Objects or &quot;LSOs&quot;) to, among other
            things, collect and store information about your use of our
            services, fraud prevention, and for other site operations.
            <br />
            <br />
            If you do not want Flash Cookies stored on your computer, you can
            adjust the settings of your Flash player to block Flash Cookies
            storage using the tools contained in the{" "}
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Storage Settings Panel
            </a>
            . You can also control Flash Cookies by going to the{" "}
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Storage Settings Panel
            </a>{" "}
            and following the instructions (which may include instructions that
            explain, for example, how to delete existing Flash Cookies (referred
            to &quot;information&quot; on the Macromedia site), how to prevent
            Flash LSOs from being placed on your computer without your being
            asked, and (for Flash Player 8 and later) how to block Flash Cookies
            that are not being delivered by the operator of the page you are on
            at the time).
            <br />
            <br />
            Please note that setting the Flash Player to restrict or limit
            acceptance of Flash Cookies may reduce or impede the functionality
            of some Flash applications, including, potentially, Flash
            applications used in connection with our services or online content.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">Do you serve targeted advertising?</h2>
          <p>
            Third parties may serve cookies on your computer or mobile device to
            serve advertising through our Website. These companies may use
            information about your visits to this and other websites in order to
            provide relevant advertisements about goods and services that you
            may be interested in. They may also employ technology that is used
            to measure the effectiveness of advertisements. They can accomplish
            this by using cookies or web beacons to collect information about
            your visits to this and other sites in order to provide relevant
            advertisements about goods and services of potential interest to
            you. The information collected through this process does not enable
            us or them to identify your name, contact details, or other details
            that directly identify you unless you choose to provide these.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">
            How often will you update this Cookie Policy?
          </h2>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal, or regulatory reasons. Please therefore revisit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
            <br />
            <br />
            The date at the top of this Cookie Policy indicates when it was last
            updated.
          </p>
        </section>
        <br />
        <section>
          <h2 className="mb-4 text-2xl">
            Where can I get further information?
          </h2>
          <p>
            If you have any questions about our use of cookies or other
            technologies, please email us at iskander@shuttle.school or by post
            to:
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
      </div>
    </main>
  );
}
