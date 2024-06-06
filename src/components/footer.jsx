import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ibsilver-500 text-ibsilver-100 w-full p-7 md:p-10 flex flex-col gap-16 md:gap-24">
      <div className="text-lg flex flex-col gap-16 md:justify-between md:flex-row md:flexWrap md:gap-10">
        <div className="flex flex-col gap-5">
          <img src="/logo.svg" alt="logo" className="w-40" />
          <div className="flex flex-col gap-7 md:gap-8">
            <p className="text-lg">
              Effektiv og nytænkende tilgang
              <br /> til bæredygtig udvikling.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/improvebusinessdk/"
                target="_blank"
                aria-label="linkedin profil"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_348_2483)">
                    <path
                      d="M4 6.53296C4 6.00253 4.21071 5.49382 4.58579 5.11875C4.96086 4.74367 5.46957 4.53296 6 4.53296H18C18.5304 4.53296 19.0391 4.74367 19.4142 5.11875C19.7893 5.49382 20 6.00253 20 6.53296V18.533C20 19.0634 19.7893 19.5721 19.4142 19.9472C19.0391 20.3222 18.5304 20.533 18 20.533H6C5.46957 20.533 4.96086 20.3222 4.58579 19.9472C4.21071 19.5721 4 19.0634 4 18.533V6.53296Z"
                      stroke="#FAF8FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8 11.533V16.533"
                      stroke="#FAF8FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8.53296V8.54296"
                      stroke="#FAF8FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16.533V11.533"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M16 16.533V13.533C16 13.0025 15.7893 12.4938 15.4142 12.1187C15.0391 11.7437 14.5304 11.533 14 11.533C13.4696 11.533 12.9609 11.7437 12.5858 12.1187C12.2107 12.4938 12 13.0025 12 13.533"
                      stroke="#FAF8FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_348_2483">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.532959)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/improvebusinessacademy/"
                target="_blank"
                aria-label="instagram profil"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_348_2484)">
                    <path
                      d="M4 8.53296C4 7.47209 4.42143 6.45468 5.17157 5.70453C5.92172 4.95439 6.93913 4.53296 8 4.53296H16C17.0609 4.53296 18.0783 4.95439 18.8284 5.70453C19.5786 6.45468 20 7.47209 20 8.53296V16.533C20 17.5938 19.5786 18.6112 18.8284 19.3614C18.0783 20.1115 17.0609 20.533 16 20.533H8C6.93913 20.533 5.92172 20.1115 5.17157 19.3614C4.42143 18.6112 4 17.5938 4 16.533V8.53296Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12.533C9 13.3286 9.31607 14.0917 9.87868 14.6543C10.4413 15.2169 11.2044 15.533 12 15.533C12.7956 15.533 13.5587 15.2169 14.1213 14.6543C14.6839 14.0917 15 13.3286 15 12.533C15 11.7373 14.6839 10.9742 14.1213 10.4116C13.5587 9.84903 12.7956 9.53296 12 9.53296C11.2044 9.53296 10.4413 9.84903 9.87868 10.4116C9.31607 10.9742 9 11.7373 9 12.533Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M16.5 8.03296V8.04296"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_348_2484">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.532959)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:gap-8">
          <p className="text-xl font-semibold font-poppins">
            Kontaktinformationer
          </p>
          <div>
            <p className="text-lg">Improve Business ApS</p>
            <p className="text-lg">CVR: 43326147</p>
          </div>
          <div>
            <a href="tel:4530141614">+ 45 30 14 16 14</a>
            <a href="mailto:kontakt@improvebusiness.dk​">
              kontakt@improvebusiness.dk​
            </a>
          </div>
          <p className="text-lg"></p>
        </div>
        <div className="flex flex-col gap-7 md:gap-8">
          <p className="text-xl font-semibold font-poppins">Genveje</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">Hjem</Link>
            </li>
            <li>
              <Link href="/consulting">Consulting</Link>
            </li>
            <li>
              <Link href="/academy">Academy</Link>
            </li>
            <li>
              <Link href="/om-os">Om os</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7 md:gap-8">
          <p className="text-xl font-semibold font-poppins">Lokation</p>
          <div>
            <p className="text-lg">The Union</p>
            <p className="text-lg">Lautrupsgade 13</p>
            <p className="text-lg">2100 København Ø</p>
          </div>
          <div>
            <p className="text-lg">Coworking+</p>
            <p className="text-lg">Kochsgade 31D</p>
            <p className="text-lg">5000 Odense</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 text-ibsilver-300 text-base mx-auto">
        <p className="text-base">© Improve Business 2024</p>
        <p className="text-base">|</p>
        <p className="text-base cursor-pointer">Privatlivspolitik</p>
      </div>
    </footer>
  );
}
