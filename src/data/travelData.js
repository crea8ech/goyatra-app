export const packages = [
  {
    id: "goa-student-escape",
    title: "Goa Student Escape",
    location: "Goa",
    duration: "4D / 3N",
    price: 8499,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "manali-snow-trails",
    title: "Manali Snow Trails",
    location: "Himachal Pradesh",
    duration: "5D / 4N",
    price: 11999,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kerala-backwater-calm",
    title: "Kerala Backwater Calm",
    location: "Kerala",
    duration: "6D / 5N",
    price: 15999,
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
  },
];

export const leads = [
  {
    id: "LD-1008",
    name: "Aarav Sharma",
    phone: "+91 98765 43210",
    trip: "Goa Student Escape",
    status: "New",
  },
  {
    id: "LD-1007",
    name: "Meera Kapoor",
    phone: "+91 99887 77665",
    trip: "Manali Snow Trails",
    status: "Follow-up",
  },
  {
    id: "LD-1006",
    name: "Kabir Singh",
    phone: "+91 91234 56780",
    trip: "Kerala Backwater Calm",
    status: "Booked",
  },
  {
    id: "LD-1005",
    name: "Nisha Rao",
    phone: "+91 90123 45678",
    trip: "Goa Student Escape",
    status: "Payment pending",
  },
];

export const payments = [
  { id: "PAY-2410", guest: "Kabir Singh", amount: 15999, status: "Paid" },
  { id: "PAY-2409", guest: "Nisha Rao", amount: 3000, status: "Advance" },
  { id: "PAY-2408", guest: "Meera Kapoor", amount: 0, status: "Pending" },
];
