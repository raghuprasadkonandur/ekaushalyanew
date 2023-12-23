import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "http://www.kaushalya.tech/contact.html",
      },
      {
        name: "About Us",
        redirect: "http://www.kaushalya.tech/aboutUs.html",
      }
    ]
  },
  
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/raghuprasadkonandur/",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/raghukonandur",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/channel/UCFHmhbXVap_ukcHUYu9rx8w?view_as=subscriber",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office:</h2>
                <p className="mt-2 leading-5">Kaushalya Technologies,<br />
                  1094,23rd Cross,Indushankara &<br />
                  3rd Floor,MCECHS Layout,<br />
                  Dr.Shivarama Karantha Nagara,<br />
                  Bengaluru, 560077,<br />
                  Karnataka, India.
                  Mobile-9845547471
                </p>
              </div>

              
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          
        </>
      )}
    </>
  )
};

export default Footer;
