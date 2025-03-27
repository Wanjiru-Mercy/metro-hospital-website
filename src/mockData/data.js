export const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
      submenu: [
        { id: 1, title: "Staff Portal", url: "http://196.200.29.226:8061/account/login" },
      ],
    },
    {
      id: 4,
      title: "M-Doctor",
      url: "https://m-doc.ecare.africa/login/doctor",
      submenu: [
        { id: 1, title: "Register", url: "https://m-doc.ecare.africa/medics-portal/medic-registration" },
        { id: 2, title: "Log In", url: "https://m-doc.ecare.africa/login/doctor" },
      ],
    },
    {
      id: 5,
      title: "Appointments",
      url: "#",
    },
    {
      id: 6,
      title: "Refer Patient",
      url: "https://metropolitan.ecare.africa/login/admin",
    },
  ];
  