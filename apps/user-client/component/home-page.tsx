import Link from "next/link";
import { Card } from "../component/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../component/ui/avatar";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center px-4 lg:px-6 h-14">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Acme Payments</span>
        </Link>
        <nav className="flex gap-4 ml-auto sm:gap-6">
          <Link
            href="#signin"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Signin
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Security
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure and Seamless Online Payments
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Accept payments from your customers with ease and
                    confidence. Our platform offers a range of payment options,
                    robust security features, and real-time analytics to help
                    your business thrive.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border rounded-md shadow-sm border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features to Grow Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our payment platform offers a range of features to help you
                  accept payments securely, streamline your operations, and gain
                  valuable insights into your business.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Multiple Payment Options
                      </h3>
                      <p className="text-muted-foreground">
                        Accept payments through credit/debit cards, digital
                        wallets, and more.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Robust Security</h3>
                      <p className="text-muted-foreground">
                        Protect your customers' data with advanced encryption
                        and fraud prevention tools.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-time Reporting</h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights into your business with
                        comprehensive reporting and analytics.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
                  Payment Methods
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Accept Payments Your Customers Love
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform supports a wide range of payment methods, so you
                  can offer your customers the flexibility they need.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Payment Methods"
                className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Credit/Debit Cards</h3>
                      <p className="text-muted-foreground">
                        Accept payments from all major credit and debit card
                        providers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Digital Wallets</h3>
                      <p className="text-muted-foreground">
                        Offer your customers the convenience of mobile and
                        digital wallet payments.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Bank Transfers</h3>
                      <p className="text-muted-foreground">
                        Accept direct bank transfers for larger or recurring
                        payments.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
                  Security
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Secure Payments You Can Trust
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our payment platform is built with industry-leading security
                  features to protect your business and your customers' data.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Encryption</h3>
                      <p className="text-muted-foreground">
                        All payment data is encrypted using the latest
                        industry-standard protocols.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fraud Prevention</h3>
                      <p className="text-muted-foreground">
                        Our advanced fraud detection and prevention tools
                        protect your business from unauthorized transactions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">PCI Compliance</h3>
                      <p className="text-muted-foreground">
                        Our platform is fully PCI-DSS compliant, ensuring the
                        highest standards of data security.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Security"
                className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with
                  our payment platform.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 shadow-sm bg-muted">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        CEO, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Acme Payments has been a game-changer for our business.\n
                    The platform is easy to use, secure, and has helped us\n
                    streamline our payment processing. We highly recommend it!"
                  </p>
                </div>
              </Card>
              <Card className="p-6 shadow-sm bg-muted">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">
                        CFO, Widgets Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "We've been using Acme Payments for over a year now, and\n
                    it's been a seamless experience. The reporting and\n
                    analytics have been invaluable in helping us make informed\n
                    business decisions."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 border-t md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
                  Get Started
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Start Accepting Payments Today
                </h2>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:"
                  prefetch={false}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
