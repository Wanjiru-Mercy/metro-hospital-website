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
        { id: 1, title: "Staff Portal", url: "/staff-portal" },
      ],
    },
    {
      id: 4,
      title: "M-Doctor",
      url: "https://m-doc.ecare.africa/login/doctor",
      submenu: [
        { id: 1, title: "Register", url: "/register" },
        { id: 2, title: "Log In", url: "/login" },
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
  